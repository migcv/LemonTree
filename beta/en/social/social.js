var feed = new Instafeed({
    get: 'user',
    userId: '1678902750',
    clientId: '37585c1e342646e09bb6617aa0a04cf8',
    accessToken:'1678902750.1677ed0.846b3385f9b949979d4095a23350058b',
    resolution: 'low_resolution',
    template: '<div class="instafeed-image col-lg-4 col-md-4 col-sm-4 col-xs-6"><a href="{{link}}"><img class="insta-image" src="{{image}}"/></a></div>',
    limit: 11,
});
feed.run();
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

function loadMoreInstafeed() {
    feed.next();
}