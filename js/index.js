var scroll = new BScroll($(".wrapper")[0],{
  scrollX: true,
  scrollY: true,
  eventPassthrough: "vertical"
})
var $toggle = $('.topbar-toggle');
var $spans = $toggle.children('span');
var toggle = true;
var toggleFlag = true;
var $aside = $(".topbar-aside-bg")
var asideScroll = new BScroll($aside[0],{
  scrollY: true
})
$toggle.on('click',function(){
  if(!toggleFlag){
    return false;
  }
  toggleFlag = false;
  window.setTimeout(function(){
    toggleFlag = true;
  },200)
  if(toggle){
    $($spans[2]).addClass('rotate-add-45')
    $($spans[1]).addClass('invisible')
    $($spans[0]).addClass('rotate-minus-45')
    $(".person-avatar").fadeTo(200,0)
    $(".topbar-logo-sm").fadeTo(200,0)
    $aside.removeClass('topbar-bg-move-back hide')
    $aside.addClass('topbar-bg-move')
  }else{
    $($spans[2]).removeClass('rotate-add-45')
    $($spans[1]).removeClass('invisible')
    $($spans[0]).removeClass('rotate-minus-45')
    $(".person-avatar").fadeTo(200,1)
    $(".topbar-logo-sm").fadeTo(200,1)
    $aside.removeClass('topbar-bg-move')
    $aside.addClass('topbar-bg-move-back')
    window.setTimeout(function(){
      $aside.addClass('hide')
    },200)
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