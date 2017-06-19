//Task:Return true if the zipcode is greater than 20000 and false otherwise. Use a webworker to do it, so this will likely only work if hosted online due to chrome's security policies'


var submitZip = document.getElementById('zipSubmitButton');
submitZip.addEventListener('click', checkZip);

function checkZip() {
    // The commented out code can be used to make this function work through a webworker.  However, it is not possible due to same origin issues on just a local host due to restrictions on web workers.
    /*if (typeof (Worker) !== "undefined") {
        var worker = new Worker("js/zipcode.js");
        // Web workers can't get at my variables, so I'll send it this way:
        var zip = document.getElementById('zipField');
        worker.postMessage(zip.value);

         Now lets wait for a message from the worker, and when we get it, display it on the screen.
        /*worker.onmessage = function (e) {
            var workerResult = e.data;
            document.getElementById('driverResultTarget').innerHTML = workerResult;
        }
        alert('Sorry, web workers are not supported!');

    }

    else {
       document.getElementById('driverResultTarget').innerHTML = "Webworkers are not supported in this browser!";
            }*/
    var zip = document.getElementById('zipField');
    
    var zipper = zip.value;

    if (zipper > 20000) {
        workerResult="<p>We've got your area covered!</p>";
    } else {
        workerResult="<p>Sorry, we haven't expanded to that area yet. </p>";
    }
    
    document.getElementById('driverResultTarget').innerHTML = workerResult;

}


