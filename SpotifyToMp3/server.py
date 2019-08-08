from flask import Flask, request, Response
import time
import base64
import youtube_dl
import requests
from queue import Queue

CLIENT_ID = "fdf322abb74a46cca505004b23c7530c"
CLIENT_SECRET = "e262390982eb443281da04bb3a0af1dc"

epoch = 0
app = Flask(__name__)
REQUEST_TOKEN = {"token": "", "last": 0}
queue = Queue()


@app.route("/")
def index():
    return open("index.html", "r").read()


@app.route("/download.js")
def download_js():
    return open("download.js", "r").read()


@app.route("/zip.js")
def zip_js():
    return open("zip.js", "r").read()


@app.route("/fs.js")
def fs_js():
    return open("fs.js", "r").read()


@app.route("/api/youtube/stream", methods=["POST"])
def api_youtube_stream():
    # if (self.epoch - int(time.time())) < 1:
    #     time.sleep(1)
    #     self.epoch = int(time.time())
    try:
        _song_title = request.data.decode().replace("- ", "")
    except KeyError as ke:
        print(ke)
        return Response("Invalid", 400)
    queue.put(_song_title, block=True, timeout=None)
    try:
        with youtube_dl.YoutubeDL() as ydl:
            info = ydl.extract_info("ytsearch:" + _song_title, download=False)
            stream = ""
            for audio_format in info["entries"][0]["formats"]:
                if "audio only" in audio_format["format"]:
                    stream = audio_format["url"]
            return Response(stream)
    except youtube_dl.DownloadError as de:
        print(de)
        return Response("")


@app.route("/api/spotify/playlist/", methods=["GET"])
def api_spotify_playlist():
    arguments = request.args
    try:
        _id = arguments["id"]
    except KeyError:
        return Response("Invalid ID", 400)

    if "?si=" in _id:
        _id = _id.split("?si=")[0]

    url = (
            "https://api.spotify.com/v1/playlists/"
            + _id
            + "/tracks?limit=100&offset=0"
    )
    header = {"Authorization": "Bearer " + request_token()}
    _list = []
    more = True
    while more is True:
        response = requests.get(url=url, headers=header).json()
        try:
            for track in response["items"]:
                _list.append(
                    track["track"]["album"]["artists"][0]["name"].replace(
                        ",", ""
                    )
                    + " - "
                    + track["track"]["name"].replace(",", "")
                )
            if response["next"] is None:
                more = False
            else:
                url = response["next"]
        except KeyError and requests.RequestException as re:
            more = False
            print(re)
    response_string = (
        str(_list)
            .replace("[", "")
            .replace("]", "")
            .replace(", ", ",")
            .replace('"', "")
            .replace("'", "")
    )
    return Response(response_string)


@app.route("/api/youtube/download", methods=["POST"])
def api_youtube_download():
    _url = None

    try:
        _url = request.data.decode()
    except KeyError:
        return Response("Error", 400)

    queue.put(_url, block=True, timeout=None)

    try:
        content_length = int(requests.head(_url).headers["Content-Length"])
    except KeyError:
        return Response("", 200)
    count = int(content_length / (12000 * 32))
    try:
        sliced = split_integer(content_length, count)
    except ZeroDivisionError:
        return Response("", 200)

    def generator():
        start_list = []
        end_list = []
        start_list.append(0)
        for a in range(0, len(sliced) - 1):
            start = 0
            b = a
            while b >= 0:
                start += sliced[b]
                b -= 1
            start += 1
            start_list.append(start)

        for a in range(1, len(start_list)):
            end_list.append(start_list[a] - 1)
        end_list.append(content_length)

        for i in range(0, len(start_list)):
            range_str = "bytes=" + str(start_list[i]) + "-" + str(end_list[i])
            header = {"Range": range_str, "Accept": "audio/mpeg"}
            with requests.get(_url, stream=True, headers=header) as r:
                r.raise_for_status()
                for chunk in r.iter_content(chunk_size=4096):
                    if chunk:
                        yield chunk

    return Response(generator(), 201)

def split_integer(num, parts):
    quotient, remainder = divmod(num, parts)
    lower_elements = [quotient for i in range(parts - remainder)]
    higher_elements = [quotient + 1 for j in range(remainder)]
    return lower_elements + higher_elements


def request_token():
    if (int(time.time()) - REQUEST_TOKEN["last"]) < 3000:
        return REQUEST_TOKEN["token"]
    else:
        _string = CLIENT_ID + ":" + CLIENT_SECRET
        _enc = base64.b64encode(_string.encode())
        _url = "https://accounts.spotify.com/api/token"
        _header = {
            "Authorization": "Basic " + _enc.decode(),
            "Content-Type": "application/x-www-form-urlencoded",
        }
        _payload = "grant_type=client_credentials&undefined="
        response = requests.post(_url, data=_payload, headers=_header)
        access_token = response.json()["access_token"]
        REQUEST_TOKEN["token"] = access_token
        REQUEST_TOKEN["last"] = int(time.time())
        return access_token
