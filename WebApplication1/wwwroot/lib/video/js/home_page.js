$(document).ready(function () {

    reportWindowSize();

    window.onresize = reportWindowSize;

    document.getElementById("back_bn").addEventListener("click", backVideo);
    document.getElementById("next_bn").addEventListener("click", nextVideo);

    document.getElementById("close_button").addEventListener("click", closeModal);
    document.getElementById("myModal").addEventListener("click", closeModal);

});

function reportWindowSize() {

    const heightOutput = document.querySelector('#height');
    const widthOutput = document.querySelector('#width');
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;

    var valWidthMobile = (window.innerWidth - 100).toString() + "px";

    var device = getDeviceType();

    setDeviceStat(device);    

    if (device == "MOBILE") {

        if (window.innerWidth >= 800) {

            hideButtonControl();
            setPaddingVideo("15px");
            showAllVideo();
            setModalForDesktop();
            setTitle2Line("135.5px");

        } else {

            hideAllVideo();
            setPaddingVideo("5px");
            showButtonControl();
            showCurrentVideo();
            setModalForMobile();
            setTitle2Line(valWidthMobile);

        }

    } else {

        if (window.innerWidth >= 1280) {

            hideButtonControl();
            setPaddingVideo("15px");
            showAllVideo();
            setModalForDesktop();
            setTitle2Line("240.5px");

        } else if (window.innerWidth >= 1024) {

            hideButtonControl();
            setPaddingVideo("15px");
            showAllVideo();
            setModalForDesktop();
            setTitle2Line("190.5px");

        } else if (window.innerWidth >= 768) {

            hideButtonControl();
            setPaddingVideo("15px");
            showAllVideo();
            setModalForDesktop();
            setTitle2Line("135.5px");

        } else {

            hideButtonControl();
            setPaddingVideo("15px");
            showAllVideo();
            setModalForMobile();
            setTitle2Line("135.5px");
        }
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

function setPaddingVideo(padding_value) {

    if ($("#video0").length) {
        document.getElementById("video0").style.paddingLeft = padding_value;
        document.getElementById("video0").style.paddingRight = padding_value;
    }

    if ($("#video1").length) {
        document.getElementById("video1").style.paddingLeft = padding_value;
        document.getElementById("video1").style.paddingRight = padding_value;
    }

    if ($("#video2").length) {
        document.getElementById("video2").style.paddingLeft = padding_value;
        document.getElementById("video2").style.paddingRight = padding_value;
    }

    if ($("#video3").length) {
        document.getElementById("video3").style.paddingLeft = padding_value;
        document.getElementById("video3").style.paddingRight = padding_value;
    }

}

function setModalForDesktop() {

    if ($("#modal_content").length) {
        document.getElementById("modal_content").style.width = "60%";
    }

}

function setModalForMobile() {

    if ($("#modal_content").length) {
        document.getElementById("modal_content").style.width = "80%";
    }

}

function subStringVideo(val_sub) {

    if ($("#strTitleID0").length) {

        var titleFocus = document.getElementById("strTitleID0");
        var titleFull = titleFocus.getAttribute("data-src");

        if (titleFull.length > val_sub) {

            var titleSub = subStringTitle(titleFull, val_sub);

            titleFocus.innerHTML = titleSub;

        }

    }

    if ($("#strTitleID1").length) {

        var titleFocus = document.getElementById("strTitleID1");
        var titleFull = titleFocus.getAttribute("data-src");

        if (titleFull.length > val_sub) {

            var titleSub = subStringTitle(titleFull, val_sub);

            titleFocus.innerHTML = titleSub;

        }

    }

    if ($("#strTitleID2").length) {

        var titleFocus = document.getElementById("strTitleID2");
        var titleFull = titleFocus.getAttribute("data-src");

        if (titleFull.length > val_sub) {

            var titleSub = subStringTitle(titleFull, val_sub);

            titleFocus.innerHTML = titleSub;

        }

    }

    if ($("#strTitleID3").length) {

        var titleFocus = document.getElementById("strTitleID3");
        var titleFull = titleFocus.getAttribute("data-src");

        if (titleFull.length > val_sub) {

            var titleSub = subStringTitle(titleFull, val_sub);

            titleFocus.innerHTML = titleSub;

        }

    }

}

function subStringTitle(str, val_sub) {

    //first substring
    var first_sub = str.substring(0, val_sub);

    //count uppercase
    var cnt = countUpperCase(str);

    //mean
    var mean = Math.ceil(cnt * 1.5);

    //more
    var more = mean - cnt;

    //second substring
    var val_sub2 = val_sub - more - 2;
    var second_sub = first_sub.substring(0, val_sub2) + "...";

    return second_sub;

}

function setTitle2Line(valTextWidth) {

    var elementArray = document.getElementsByClassName("video-title");
    var i = 0;

    for (i = 0; i < elementArray.length; i++) {

        elementArray[i].style.width = valTextWidth;

    }

}

function countUpperCase(str) {

    var cnt = str.length - str.replace(/[A-Z]/g, '').length;

    return cnt;

}

function backVideo() {

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

}

function nextVideo() {

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

}
