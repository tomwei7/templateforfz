jQuery(document).ready(function($) {
    // console.log('jquery');
    function change (argument) {
        var mWindowWidth = $(window).width();
        if(mWindowWidth>1000){
            $('#iframephototitlefont').text($('#posttitle').text());
            if ($('#postdetails').find('img').length>0) {
                $('#focusphoto').attr('src', $('#postdetails').find('img').attr('src'));
            };
            $('#focuslink').attr('href', window.location.href);
            $('#displayiframephoto').css('display', 'block');
        }
        else{
            var time = $('#time').text();
            var title = $('#posttitle').text();
            var post = $('#postdetails').text();
            if (mWindowWidth>250 && mWindowWidth<350) {
                $('#day').text(time.substring(8,10));
                $('#year').text(time.substring(0,7));
                $('#newtitle').text(title.replace(/(^\s*)|(\s*$)/g, "").substring(0,12));
                $('#newinfo').text(post.replace(/(^\s*)|(\s*$)/g, "").substring(0,48));
                $('#newmore').attr('href', window.location.href);
                $('#displayiframenew').css('display', 'block');
            }
            else{
                if ($('#postdetails').find('img').length>0) {
                    $('#moreimgid').attr('src', $('#postdetails').find('img').attr('src'));
                };
                $('#moretitle').text(title.replace(/(^\s*)|(\s*$)/g, "").substring(0,14));
                $('#morepost').text(post.replace(/(^\s*)|(\s*$)/g, "").substring(0,64));
                $('#moremore').attr('href', window.location.href);
                $('#displayiframemore').css('display', 'block');
            }
        };
    }
    if (self != top) {
        // console.log('isiframe');
        change();
    }
    else{
        $('#displayinfocent').css('display', 'block');
    }
    $(window).resize(function(event) {
        // console.log('resize');
        if (self != top) {
            change();
        };
    });
});