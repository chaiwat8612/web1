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

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        videoId: '',
        playerVars: { 'autoplay': 1, 'playsinline': 1 }
        
    });
}

function video_click(clicked_id) {

    //get videoId
    var videoId = document.getElementById(clicked_id).getAttribute("data-src");

    //onYouTubeIframeAPIReady(videoId);

    //assign videoId to player
    player.loadVideoById(videoId);

    //play video
    player.playVideo();

    //show modal
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    //stop video
    player.stopVideo();

    //close modal
    modal.style.display = "none";

    //clear player
    player.loadVideoById('');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {

        //stop video
        player.stopVideo();

        //close medal
        modal.style.display = "none";

        //clear player
        player.loadVideoById('');
    }
}

