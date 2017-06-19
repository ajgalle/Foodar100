// This file is for javascript that applies to all pages, like the login function.

$(document).ready(function () {

    if (localStorage.colorChoice !== undefined && sessionStorage.isLoggedIn === 'yes') {
        $('body').css({ 'background-color': localStorage.colorChoice });
    }
    if (sessionStorage.isLoggedIn === 'yes') {
        $('#signinLink').html('Hi, <a href="profile.html">' + localStorage.firstNameOnly +"</a>!");
        $('#registerField').html('<a href="#" id="logOut"> Log Out</a>');
        $('#logOut').on('click', function () {
            sessionStorage.isLoggedIn = "no";
            location.reload();
        });
    } else {
        //only show sign in bar if not signed in
        $('#signinLink').on('click', function () {
        $('.signin_banner').slideToggle();
        });
    }

    
});