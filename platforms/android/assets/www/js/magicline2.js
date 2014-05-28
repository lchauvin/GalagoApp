$currentPage = $.mobile.activePage.attr('id');

$($currentPage+" .nav-wrap ul").append("<li id='magic-line'></li>");

var $magicLine = $($currentPage+" #magic-line");
$magicLine
        .width($($currentPage+" .current_page_item").width())
        .css("left",$($currentPage+" .current_page_item a").position().left)
        .data("origLeft",$magicLine.position().left)
        .data("origiWidth",$magicLine.width());

$($currentPage+" .nav-wrap li").find("a").hover(function()
{
   $el = $(ui.prevPage);
   leftPos = $el.position().left;
   newWidth = $el.parent().width();

   $magicLine.stop().animate({
      left:leftPos,
      width:newWidth
   });
},function()
{
   $magicLine.stop().animate({
       left:$magicLine.data("origLeft"),
       width:$magicLine.data("origWidth")
   });
});

