console.log("LOG STARTED.");

var dir = document.getElementById("DIV");
var sp = document.createElement('span');
var nd = document.createTextNode('massrp-old');
let back = document.createTextNode('back');
let a0 = document.createElement('a');



var p = document.createElement('p');

p.appendChild(document.createElement('br'));
dir.appendChild(p);
sp.appendChild(nd);
sp.setAttribute('class', 'title');
p.appendChild(sp);

p.appendChild(document.createElement('br'));
p.appendChild(document.createElement('br'));

sp = document.createElement('span');
sp.appendChild(back);
sp.setAttribute('class', 'text');
a0.appendChild(sp);
a0.setAttribute('href', '../');
p.appendChild(a0);

p = document.createElement('p');
dir.appendChild(p);

var span = document.createElement('span');
span.setAttribute('class', 'text');
let nn = document.createTextNode('File');
span.appendChild(nn);
p.appendChild(span);
p.appendChild(document.createElement('br'));
p.appendChild(document.createElement('br'));

let json = {};
json.a1 = {};
json.a1.filename = "test.jpg";
json.a1.date = "1.1.18";

let scope;

let m = 0;
for (let f = 0; f < files.length;){
    scope = this;
    let n = "a" + m.toString();
    m = m+1;
    json[n] = {};
    json[n].filename = files[f];
    json[n].date = files[f+1];
    json[n].size = files[f+2];
    f = f+3;
}

var result = Array();

for (var a2 in json){
    result.push(json[a2]);
}


function sortNumber(a,b) {
    return b.date - a.date;
}

var out = result.sort(sortNumber);

for (let o = 0; o < out.length; o++){
    var a = document.createElement('a');
    a.setAttribute('href', './' + out[o].filename);
    p.appendChild(a);

    var sp = document.createElement('span');
    sp.setAttribute('class', 'text');
    var text = document.createTextNode(out[o].filename);
    sp.appendChild(text);
    a.appendChild(sp);

    p.appendChild(document.createElement('br'));
}

let p2 = document.createElement('p');
let span2 = document.createElement('span');
span2.appendChild(document.createTextNode("Last Modified"));
span2.setAttribute('class', 'text');
p2.appendChild(span2);
p2.appendChild(document.createElement('br'));
p2.appendChild(document.createElement('br'));



for (let po = 0; po < out.length; po++){
    let sp = document.createElement('span');
    sp.setAttribute('class', 'text');
    let date = moment.unix(out[po].date).format('DD.MM.YYYY-hh:mm:ss');
    let txt = document.createTextNode(date);
    sp.appendChild(txt);
    p2.appendChild(sp);
    p2.appendChild(document.createElement('br'));
}

let p3 = document.createElement('p');
let span3 = document.createElement('span');
span3.appendChild(document.createTextNode("Size"));
span3.setAttribute('class', 'text');
p3.appendChild(span3);
p3.appendChild(document.createElement('br'));
p3.appendChild(document.createElement('br'));

for (let c = 0; c < out.length; c++){
    let sp = document.createElement('span');
    sp.setAttribute('class', 'text');
    let size = (out[c].size * 0.00000095367432).toFixed(2).toString() + "mb";
    let txt = document.createTextNode(size);
    sp.appendChild(txt);
    p3.appendChild(sp);
    p3.appendChild(document.createElement('br'));
}

dir.appendChild(p2);
dir.appendChild(p3);