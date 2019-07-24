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
    $aside.removeClass('topbar-bg-move').addClass('topbar-bg-move-back')
    $topbarItems.each(function(i,val){
      $(val).removeClass("topbar-items-move")
    })
  }
  toggle = !toggle;
  return false;
})
$(".navigation").find("ul").each(function(i,val){
  if($(val).children().length > 5){
    $(val).siblings(".navigation-show-all").css("display","inline-block")
    $(val).children().each(function(j,item){
      if(j >= 5){
        $(item).css("display","none")
      }
    })
  }else{
    return;
  }
})
$(".navigation-bg").css("height",parseInt($(".navigation-fa").css("height")))
$(".navigation").on("click",function(e){
  // 事件委托
  if(e.target.className == "navigation-show-all"){
    $(this).find("ul").children().each(function(j,item){
      if(j >= 5){
        $(item).css("display","block")
      }
    })
    $(e.target).css("display","none")
    $(".navigation-bg").css("height",$(".navigation-fa").css("height"));
    return false;
  }
})
$(".navigation-toggle").each(function(i,val){
  var open = false;
  var flag = true;
  $(val).on("click",function(){
    if(!flag) return false;
    flag = false;
    if(!open){
      $(this).find("i").removeClass("icofont-simple-down").addClass("icofont-simple-up");
    }else{
      $(this).find("i").addClass("icofont-simple-down").removeClass("icofont-simple-up");
    }
    $(this).siblings("ul").toggle(200,function(){
      flag = true;
    })
    open = !open;
    return false;
  })
})
$(".use-toggle").each(function(i,val){
  var open = false;
  var flag = true;
  $(val).on("click",function(){
    if(!flag) return false;
    flag = false;
    if(!open){
      $(this).find("i").removeClass("icofont-simple-down").addClass("icofont-simple-up");
    }else{
      $(this).find("i").addClass("icofont-simple-down").removeClass("icofont-simple-up");
    }
    $(this).siblings("ul").toggle(200,function(){
      flag = true;
    })
    open = !open;
    return false;
  })
})
$(".circle").each(function(i,val){
  $(val).on("click",function(e){
    var scroll = parseInt($(e.target).parents(".help-container").offset().top);
    $('html,body').animate({scrollTop:scroll}, 500);
    return false;
  })
})