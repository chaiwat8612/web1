function video_click(clicked_id) {

    // get modal element
    var modal = document.getElementById("myModal");

    //get video id
    var video_id = document.getElementById(clicked_id).getAttribute("data-src");

    //add iframe youtube
    appendYouTubeByID(video_id);

    //show modal
    modal.style.display = "block";
}

function closeModal() {

    // get modal element
    var modal = document.getElementById("myModal");

    //remove iframe youtube
    removeIframe();

    //close modal
    modal.style.display = "none";

}

function appendYouTubeByID(videoID) {

    //get element load-player
    var loadSubscribe = document.getElementById("load-player");

    // create iframe
    var youtube = '<iframe width="100%" height="540" frameborder="0" class="youtube-video" id="iframe_item" src="https://www.youtube.com/embed/' + videoID + '?autoplay=0&start=0" id="embed_video" allowscriptaccess="always" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>';

    // add iframe
    loadSubscribe.innerHTML = youtube;
}

function removeIframe() {

    //check exist before remove

    if ($('#iframe_item').length) {

        //remove iframe
        $("#iframe_item").remove();
    }

}

