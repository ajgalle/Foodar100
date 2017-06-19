// If user not signed in yet, we'll send them away from the profile page until they are'
if (sessionStorage.isLoggedIn != 'yes') {
    window.location = 'index.html';
}
// if there is already a picture set, display it. 
function setProfile() {
    var file = newPic.files[0];

    var reader = new FileReader();


    reader.onload = function (e) {
        localStorage.setItem('userPic', file);

        document.getElementById('profile-image').src = reader.result;

    }

    reader.readAsDataURL(file);

}

$(document).ready(function () {
    // if user already set their background choice, use it here when they log in.

    if (localStorage.colorChoice !== undefined && sessionStorage.isLoggedIn==='yes') {
        $('body').css({ 'background-color': localStorage.colorChoice});
    }

    // Coding a theme picker... it should track to every page once user is logged in thanks to the utility.js file. On log out, goes back to defaults.
    $('#theme').on('click', function () {
        $('#colorSelector').slideToggle();
    });
    
    $('#greenBtn').on('click', function () {
        localStorage.setItem('colorChoice', 'green');
        $('body').css({ 'background-color': 'green' });
    });
    $('#redBtn').on('click', function () {
        localStorage.setItem('colorChoice', 'maroon');
        $('body').css({ 'background-color': 'maroon' });
    });
    $('#whiteBtn').on('click', function () {
        localStorage.setItem('colorChoice', 'white');
        $('body').css({ 'background-color': 'white' });
    });



    //to avoid Access Control Origin and CORS problems, I am accessing my JSON data from a service called my JSON instead of local host. It seems even Firefox will block localhosts now.
    $.getJSON("https://api.myjson.com/bins/1dwjyr", function (data) {
        //if succeeds, lets update the profile page with all the user info;
        console.log(data[localStorage.foodarUsername]);
        localStorage.setItem("firstNameOnly", data[localStorage.foodarUsername].firstName);
        var obj = data[localStorage.foodarUsername];
        $('#firstName').html(obj.firstName);
        $('#lastName').html(obj.lastName);
        $('#email').html(obj.email);
        $('#phoneNumber').html(obj.phoneNumber);
        $('#address').html(obj.address);
        
        for (i = 0; i < obj.favoriteFoods.length; i++){
            $('#favoriteFoods').append('<input type="checkbox" id="' + obj.favoriteFoods[i] + '" /> ' + obj.favoriteFoods[i]);
                
         ;}

        
    });
    
});
