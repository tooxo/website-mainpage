window.onresize = function(event) {
    try {
        document.getElementById('frame1').contentWindow.location.reload(true);
        document.getElementById('frame2').contentWindow.location.reload(true);
    }catch (e) {}
};
