$(document).ready(function () {

    reportWindowSize();

    function reportWindowSize() {
        const heightOutput = document.querySelector('#height');
        const widthOutput = document.querySelector('#width');
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;

        if (window.innerWidth < 400) {

            $("#video0").hide();
            $("#video1").hide();
            $("#video2").hide();
            $("#video3").hide();
            $("#back_bn").show();
            $("#next_bn").show();

        } else {
            $("#video0").show();
            $("#video1").show();
            $("#video2").show();
            $("#video3").show();
            $("#back_bn").hide();
            $("#next_bn").hide();

        }

        if ($("#current").text() == 0) {
            $("#video0").show();
        } else if ($("#current").text() == 1) {
            $("#video1").show();
        } else if ($("#current").text() == 2) {
            $("#video2").show();
        } else if ($("#current").text() == 3) {
            $("#video3").show();
        }

    }

    window.onresize = reportWindowSize;

});

function video_click(clicked_id) {

    var tmp = document.getElementById(clicked_id).getAttribute("data-src");

    var text_embed = "https://www.youtube.com/embed/" + tmp + "?autoplay=0&start=0";

    document.getElementById("embed_video").src = text_embed;

    modal.style.display = "block";
}

$("#back_bn").click(function () {
    if ($("#current").text() == 0) {
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").show();
        $("#current").text('3');
    } else if ($("#current").text() == 1) {
        $("#video0").show();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").hide();
        $("#current").text('0');
    } else if ($("#current").text() == 2) {
        $("#video0").hide();
        $("#video1").show();
        $("#video2").hide();
        $("#video3").hide();
        $("#current").text('1');
    } else if ($("#current").text() == 3) {
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").show();
        $("#video3").hide();
        $("#current").text('2');
    }
});

$("#next_bn").click(function () {
    if ($("#current").text() == 0) {
        $("#video0").hide();
        $("#video1").show();
        $("#video2").hide();
        $("#video3").hide();
        $("#current").text('1');
    } else if ($("#current").text() == 1) {
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").show();
        $("#video3").hide();
        $("#current").text('2');
    } else if ($("#current").text() == 2) {
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").show();
        $("#current").text('3');
    } else if ($("#current").text() == 3) {
        $("#video0").show();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").hide();
        $("#current").text('0');
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    document.getElementById("embed_video").src = "https://www.youtube.com/embed/nvq_lvC1MRY";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    document.getElementById("embed_video").src = "";
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        document.getElementById("embed_video").src = "";
        modal.style.display = "none";
    }
}