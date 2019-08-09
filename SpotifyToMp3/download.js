let lock = false;
let ConsoleArray = function () {
    let arr = [];
    arr.push = function () {
        let v = "";
        for (let i = 0; i < arr.length; i++) {
            v += arr[i] + "\n";
        }
        v += arguments[0];
        let textArea = document.getElementById('textArea');
        textArea.value = v;
        textArea.scrollTop = textArea.scrollHeight;

        return Array.prototype.push.apply(this, arguments)
    };
    return arr
};

let currentTime = function () {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if (hours.toString().length === 1) {
        hours = "0" + hours.toString()
    } else {
        hours = hours.toString()
    }
    if (minutes.toString().length === 1) {
        minutes = "0" + minutes.toString()
    } else {
        minutes = minutes.toString()
    }
    if (seconds.toString().length === 1) {
        seconds = "0" + seconds.toString()
    } else {
        seconds = seconds.toString()
    }
    return "[" + hours + ":" + minutes + ":" + seconds + "]"
};

let con = new ConsoleArray();

function validURL(str) {
    let pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
    let spotify_pattern = new RegExp(/https:\/\/open.spotify.com\/playlist\/.*/gmi);
    return !!pattern.test(str) && !!spotify_pattern.test(str)
}

let array_c;
let getTracks = function (spotify_url) {
    try {
        spotify_url = spotify_url.split('/');
        spotify_url = spotify_url[spotify_url.length - 1]
    } catch (e) {
        console.log(e)
    }
    fetch(
        'https://s.chulte.de/spotify2mp3/api/spotify/playlist?id=' + spotify_url
    ).then(
        function (response) {
            return response.text()
        }
    ).then(
        function (response) {
            let streams = [];
            let array = response.split(',');
            let new_array = [];
            for (let song in array) {
                if (!new_array.includes(array[song])) {
                    new_array.push(array[song])
                }
            }
            array = new_array;
            array_c = array.slice(0);

            con.push(currentTime() + " Gathered " + array.length.toString() + " Tracks to download!");

            function getStreamUrl(array, callback) {
                let title = array[0];
                fetch('https://s.chulte.de/spotify2mp3/api/youtube/stream', {
                    method: 'POST',
                    body: title,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    return response.text()
                }).then(function (response) {
                    callback(response)
                })
            }

            let callback = function (response) {
                streams.push(response);
                let current = array_c.length - array.length + 1;
                let max = array_c.length;
                con.push(currentTime() + " Gathering Streams. (" + current.toString() + "/" + max.toString() + ")");
                array.shift();
                if (array.length > 0) {
                    getStreamUrl(array, callback)
                } else {
                    con.push(currentTime() + " Gathering Done!");
                    let zipfile = new JSZip();
                    let folder = zipfile.folder('songs');
                    let count = 0;
                    let callback = function () {
                        count++;
                        con.push(currentTime() + " Downloading Songs! (" + (count).toString() + "/" + array_c.length.toString() + ")");
                        if (count >= streams.length) {
                            con.push(currentTime() + " Downloading Done!");
                            con.push(currentTime() + " Saving as playlist.zip! This might take a while!");
                            zipfile.generateAsync({type: "blob"}).then(function (content) {
                                saveAs(content, "playlist.zip");
                                con.push(currentTime() + " All done!");
                                lock = false;
                            })
                        } else {
                            createZipFromStreams(callback)
                        }
                    };
                    let createZipFromStreams = function (callback) {
                        if (streams[count] === '') {
                            callback()
                        } else {
                            fetch('https://s.chulte.de/spotify2mp3/api/youtube/download', {
                                method: 'POST',
                                body: streams[count]
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        con.push(currentTime() + " Error while downloading one song. One might be missing afterwards.");
                                        callback()
                                    } else {
                                        response.arrayBuffer().then(buffer => {
                                            folder.file(array_c[count] + ".mp3", buffer, {binary: true});
                                            callback();
                                        })
                                    }
                                })
                        }
                    };
                    createZipFromStreams(callback)
                }
            };
            getStreamUrl(array, callback);

        }
    )
};

window.onload = function () {
    document.getElementById('textArea').value = "";
    document.getElementById('button').onclick = function () {
        let string = document.getElementById('input_field').value;
        if (lock === true) {
            con.push(currentTime() + " You cant do this twice a time.");
            return
        }
        lock = true;
        if (!validURL(string)) {
            con.push(currentTime() + " This is not a valid url.");
        } else {
            con.push(currentTime() + " Using this Playlist: " + string);
            getTracks(string)
        }
    };
    con.push(currentTime() + " Welcome to the console!")
};
