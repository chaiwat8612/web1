function video_click(clicked_id) {

    if ($("#device_type").text() == "MOBILE") {

        $("#load-player").removeClass("embed-responsive");
        $("#load-player").removeClass("embed-responsive-16by9");

    } else {

        $("#load-player").addClass("embed-responsive");
        $("#load-player").addClass("embed-responsive-16by9");
    }

    // get modal element
    var modal = document.getElementById("myModal");

    //get video id
    var tmp = document.getElementById(clicked_id).getAttribute("data-src");

    //create source
    var text_embed = "https://www.youtube.com/embed/" + tmp + "?autoplay=0&start=0";

    //set src
    document.getElementById("embed_video").src = text_embed;

    //show modal
    modal.style.display = "block";
}

function closeModal() {

    // get modal element
    var modal = document.getElementById("myModal");

    //remove iframe youtube
    document.getElementById("embed_video").src = "";

    //close modal
    modal.style.display = "none";

}


