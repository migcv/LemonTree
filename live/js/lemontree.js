function fadeText(e,o){var t=200,n=2e3,a=e.innerHTML,s=$("#"+e.id)
s.css("width",s.width()+"px"),s.fadeOut(t,function(){e.style.textDecoration="none",e.style.color="black",s.text(o).fadeIn(t),setTimeout(function(){s.fadeOut(t,function(){e.style.textDecoration="line-through",e.style.color="#9B9898",s.text(a.replace(/&amp;/g,"&")).fadeIn(t),s.css("width","auto")})},n)})}function offsetAnchor(){0!==location.hash.length&&window.scrollTo(window.scrollX,window.scrollY-100)}function resize(){$(window).width()>=992?($(".collapse").css("transition-duration","0s"),$(".collapse").collapse("hide")):(console.log("1"),$(".collapse").css("transition-duration",".5s"))}function collapseTimer(){setTimeout(function(){$(".collapse").collapse("hide")},3e3)}jQuery("body").bind("click",function(e){if(0==jQuery(e.target).closest(".navbar").length){var o=jQuery(".navbar-collapse").hasClass("collapse in")
o===!0&&jQuery(".navbar-collapse").collapse("hide")}})
var contacts_collapse=document.getElementById("contacts-footer"),close=!0
contacts_collapse&&contacts_collapse.addEventListener("click",function(){var e=document.getElementById("arrow")
close?(e.className="fa fa-angle-up fa-fw",close=!1):(e.className="fa fa-angle-down fa-fw",close=!0)},!1),window.addEventListener("hashchange",offsetAnchor),window.setTimeout(offsetAnchor,1),$(window).on("resize",resize),resize()