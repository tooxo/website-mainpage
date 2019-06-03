let topload = function() {
  var img = document.getElementById('mountains');
  img.src = "image/Mountains.jpg"
};

let smooth = function() {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
};


$(document).ready(function() {
	smooth();
	topload();
});
