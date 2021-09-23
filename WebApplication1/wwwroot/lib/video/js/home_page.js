$(document).ready(function () {

    reportWindowSize();

    window.onresize = reportWindowSize;

    document.getElementById("close_button").addEventListener("click", closeModal);
    document.getElementById("myModal").addEventListener("click", closeModal);

});

function reportWindowSize() {

    const heightOutput = document.querySelector('#height');
    const widthOutput = document.querySelector('#width');
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;

    var device = getDeviceType();

    setDeviceStat(device);

    if (device == "MOBILE") {

        if (window.innerWidth >= 800) {

            hideButtonControl();
            showAllVideo();

        } else {

            hideAllVideo();
            showButtonControl();
            showCurrentVideo();

        }

    } else {

        hideButtonControl();
        showAllVideo();

    }

}

function getDeviceType() {

    var result = "Unknown";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent)) {

            result = "TABLET";

        } else {

            result = "MOBILE";

        }

    } else {

        result = "DESKTOP";
    }

    return result;

}

function setDeviceStat(valDevice) {

    var element = document.getElementById("device_type");
    element.innerHTML = valDevice;

}

function hideAllVideo() {

    $("#video0").hide();
    $("#video1").hide();
    $("#video2").hide();
    $("#video3").hide();

}

function showAllVideo() {

    $("#video0").show();
    $("#video1").show();
    $("#video2").show();
    $("#video3").show();

}

function hideButtonControl() {

    $("#back_bn").hide();
    $("#next_bn").hide();

}

function showButtonControl() {

    $("#back_bn").show();
    $("#next_bn").show();

}

function showCurrentVideo() {

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