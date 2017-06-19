// Here's a webworker!'
self.onmessage = function (zip) {
    var zipper = zip.data;
    console.log(zipper);
    if (zipper > 20000) {
        postMessage("<p>We've got your area covered!</p>");
    } else {
        postMessage("<p>Sorry, we haven't expanded to that area yet. </p>");
    }
}
