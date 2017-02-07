/*
 *  Adds classes to allign instafeed images
 */
function setClassesInstaImages() {
    var class_md_sm = ['image-left', 'image-center', 'image-right'];
    var class_xs = ['image-xs-left', 'image-xs-right'];
    var insta_feed = document.getElementsByClassName('instafeed-image');
    for (var i = 0; i < insta_feed.length; i++) {
        insta_feed[i].className += " " + class_md_sm[i%3];
        insta_feed[i].className += " " + class_xs[i%2];
    }
}
window.onload = setClassesInstaImages;