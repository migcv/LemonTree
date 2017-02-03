//
// Fade text and appears "Soon" on nav bar
//
function fadeText(ele, msg) {
    var $fadeTime = 200;
    var $time = 2000;
    
    var $text = ele.innerHTML
    var $tip = $("#" + ele.id);
    
    $tip.css('width', $tip.width() + 'px');
    
    $tip.fadeOut($fadeTime, function() {
        ele.style.textDecoration = "none";
        ele.style.color = "black";
        $tip.text(msg).fadeIn($fadeTime);
        setTimeout(function(){
            $tip.fadeOut($fadeTime, function() {
                ele.style.textDecoration = "line-through";
                ele.style.color = "#9B9898";
                $tip.text($text.replace(/&amp;/g, '&')).fadeIn($fadeTime);
                $tip.css('width', 'auto');
            });
        }, $time); 
    });
}
//
//  Close navbar when body is clicked
//
jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});
//
//  Change 'contacts' arrow on footer (mobile only)
//
var contacts_collapse = document.getElementById("contacts-footer")
var close = true;
if(contacts_collapse) {
    contacts_collapse.addEventListener('click', function() {
        var arrow = document.getElementById("arrow");
        if (close) {
            arrow.className = "fa fa-angle-up fa-fw";
            close = false;
        } else {
            arrow.className = "fa fa-angle-down fa-fw";
            close=true;
        }
    }, false);
}
//
// The function actually applying the offset
//
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}
// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
//
// When screen changes form xs/sm to md close collapse
//
function resize() {
    if($(window).width() >= 992) {
        $('.collapse').css("transition-duration", "0s");
        $('.collapse').collapse("hide");
    }
    else {
        console.log("1");
        $('.collapse').css("transition-duration", ".5s");
    }
}
$(window).on("resize", resize);
resize(); // call once initially
//
// Collapse close passed some seconds
//
function collapseTimer() {
    setTimeout(function(){
        $('.collapse').collapse("hide");
    }, 6000); 
}