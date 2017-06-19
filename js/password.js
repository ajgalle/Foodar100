var signinSubmit = document.getElementById('signinSubmit');
// Check to see if signed in and if not, fill in username.

if (localStorage.foodarUsername !== undefined) {
    document.getElementById('signinName').value = localStorage.foodarUsername;
}

function validatePassword() {
    var username = document.getElementById('signinName').value;
    var pass = document.getElementById('signinPass').value;
    
    //Lets use regular expressions to find if the password has at least 1 letter, number, and special character!
   if (pass.match(/[0-9]/) && pass.match(/[a-zA-Z]/) && pass.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)) {
       if (pass.length > 7) {
        //This is just a simulation, so we'll just check for the password here instead of on the server side
            if (pass === '1password!'){        
            localStorage.setItem('foodarUsername', username);
            sessionStorage.setItem('isLoggedIn', 'yes');
             window.location = 'profile.html';
            }  else {
             alert('Did you forget your username or password? The username is "myUserName" and the password is "1password!" (with no quotation marks).  Please try again.');
       }
    } else {
        alert('Passwords must be at least 8 characters and must have at least one letter, number, and special character.Please try again.');
    }
    }
    else {
        alert('Passwords must be at least 8 characters and must have at least one letter, number, and special character.Please try again.');
    }
}
    

signinSubmit.addEventListener('click', validatePassword);