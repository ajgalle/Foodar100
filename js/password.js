var signinSubmit = document.getElementById('signinSubmit');
// Check to see if signed in and if not, fill in username.

if (localStorage.sousmate_userName !== undefined) {
    document.getElementById('signinName').value = localStorage.sousmate_userName;
}

function validatePassword() {
    var username = document.getElementById('signinName').value;
    var pass = document.getElementById('signinPass').value;
    
    //Lets use regular expressions to find if the password has at least 1 letter, number, and special character!
   if (pass.match(/[0-9]/) && pass.match(/[a-zA-Z]/) && pass.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)) {
    if (pass.length > 7) {
        
        localStorage.setItem('foodar_username', username);
        sessionStorage.setItem('isLoggedIn', 'yes');
        window.location = 'profile.html';

    } else {
        alert('Passwords must be at least 8 characters and must have at least one letter, number, and special character.Please try again.');
    }
    }
    else {
        alert('Passwords must be at least 8 characters and must have at least one letter, number, and special character.Please try again.');
    }
}
    

signinSubmit.addEventListener('click', validatePassword);