// 添加焦点图
var fparray = $('#focusphotofrom').find('a');
$('focusphotonumcent').css('width', 36*fparray.length+2);
for (var i = 0; i < fparray.length; i++) {
    var miframe = $("<iframe></iframe>");
    miframe.attr({
        'width': '1200',
        'height': '400',
        'frameborder': '0',
        'scrolling':'no',
        'src':fparray[i].href
    });
    miframe.css('border', '0');
    $('#focusphotobd').append(miframe);
    var mli = $("<li></li>");
    mli.text(i+1);
    $('#focusphotonumul').append(mli);
};
// 添加热点新闻
var rdarray = $('#hitnewsfrom').find('a');
var rdiframe = $('#headlines').find('iframe');
for(var i = 0; i < 3; i++){
    if(i < rdarray.length){
        rdiframe[i].src = rdarray[i].href;
    }
}
//添加新闻详情
if($('#newiframesrc1').find('a').length != 0)
    $('#newiframe1').attr('src',$('#newiframesrc1').find('a').attr('href'));
if($('#newiframesrc2').find('a').length != 0)
    $('#newiframe2').attr('src',$('#newiframesrc2').find('a').attr('href'));
if($('#newiframesrc3').find('a').length != 0)
    $('#newiframe3').attr('src',$('#newiframesrc3').find('a').attr('href'));
if($('#newiframesrc4').find('a').length != 0)
    $('#newiframe4').attr('src',$('#newiframesrc4').find('a').attr('href'));
if($('#newiframesrc5').find('a').length != 0)
    $('#newiframe5').attr('src',$('#newiframesrc5').find('a').attr('href'));
