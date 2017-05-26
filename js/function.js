
//Task:Return true if the zipcode is greater than 20000 and false otherwise. 


var submitZip=document.getElementById('zipSubmitButton');
submitZip.addEventListener('click', checkZip)


function checkZip(){

	var zip=document.getElementById('zipField');

    if (zip.value>20000){
        document.getElementById('driverResultTarget').innerHTML="<p>We've got your area covered!</p>";
		} else{
        document.getElementById('driverResultTarget').innerHTML="<p>Sorry, we haven't expanded to that area yet. </p>";
    }

}
