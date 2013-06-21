$(document).ready(function() {
    !function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");

    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'http://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/us_EN/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});

function registerCustomHandlers() {

    $("a.item").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        return false;
    });


    $('#submit-btn').click(function() {
        var path = createPath();
        window.location.replace(path);
        return false;
    });
}

function createPath() {
    var userUrl = $('#user-url').val();
    userUrl = checkUrl(userUrl);
    var ico = 'web';
    if($('.selected').length > 0){
         ico = $('.selected')[0].getAttribute("id");
    }

    var path = "/tile.html?theme=Highlight&ico=" + ico + "&url=" + userUrl;
    return path;
};

function checkUrl(userUrl){
    if(userUrl.length === 0){
        return "http://www.hawks.mysteria.cz";
    }
    var index = userUrl.indexOf("http");
    if(index !== 0){
         userUrl = "http://" + userUrl;
    }
    return userUrl;
}

