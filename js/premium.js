var $toggle = $('.topbar-toggle');
var $spans = $toggle.children('span');
var toggle = true;
var $aside = $(".topbar-aside-bg")
var asideScroll = new BScroll($aside[0],{
  scrollY: true,
  tap: "click"
})
var $topbarItems = $(".topbar-aside").children();
$topbarItems.each(function(i,val){
  if(val.href){
    $(val).on("click",function(){
      window.location.href = this.href;
    })
  }
  var delay = ((0.2) * 1000 + (0.015 * i) * 1000) / 1000
  $(val).css("animation-delay", delay + "s")
})
var toggleFlag = true;
$toggle.on('click',function(){
  if(!toggleFlag){
    return false;
  }
  $(".topbar-bg-sm").toggleClass("topbar-bg-sm-height");
  toggleFlag = false;
  window.setTimeout(function(){
    toggleFlag = true;
  },500)
  if(toggle){
    $($spans[2]).addClass('rotate-add-45')
    $($spans[1]).addClass('invisible')
    $($spans[0]).addClass('rotate-minus-45')
    $(".person-avatar").fadeTo(200,0)
    $(".topbar-logo-sm").fadeTo(200,0)
    $(".topbar-bg-sm").addClass("topbar-bg-sm-height-change").removeClass("topbar-bg-sm-height-back");
    $aside.removeClass('topbar-bg-move-back').addClass('topbar-bg-move')
    $topbarItems.each(function(i,val){
      $(val).addClass("topbar-items-move")
    })
  }else{
    $($spans[2]).removeClass('rotate-add-45')
    $($spans[1]).removeClass('invisible')
    $($spans[0]).removeClass('rotate-minus-45')
    $(".person-avatar").fadeTo(200,1)
    $(".topbar-logo-sm").fadeTo(200,1)
    $(".topbar-bg-sm").removeClass("topbar-bg-sm-height-change").addClass("topbar-bg-sm-height-back");
    $aside.removeClass('topbar-bg-move').addClass('topbar-bg-move-back')
    $topbarItems.each(function(i,val){
      $(val).removeClass("topbar-items-move")
    })
  }
  toggle = !toggle;
  return false;
})
window.onscroll = function(){
  if(window.scrollY >= 45){
    $('.topbar-bg-lg').addClass('topbar-show-bg')
  }else{
    $('.topbar-bg-lg').removeClass('topbar-show-bg')
  }
}