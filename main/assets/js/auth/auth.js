// Listen for Auth Status Change
auth.onAuthStateChanged(user => {
    if(user){
        console.log('User logged In: ', user)
    } else {
        console.log('User logged Out');
    }
});

// Login
const loginForm = document.querySelector('#login-form');
if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        //get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
    
        //Sign Up the User to Firebase
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            location.href = "../index.html";
        }).catch(e => {
            console.log(e.message);
        });
    });
}

// Signup
const signupForm = document.querySelector('#signup-form');
if(signupForm){
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        //get user info
        //const name = signupForm['signup-name'].value;
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;
        const confirmPassword = signupForm['signup-conf-password'].value;
    
        //Sign Up the User to Firebase
        if(password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password).then(cred => {
                console.log(cred.user);
                location.href = "login.html";
            }).catch(e => {
                console.log(e.message);
            });
        } else {
            console.log('Passwords does not Match');
        }
    });
}

// logout
const logout = document.querySelector('#logout');

if(logout){
    logout.addEventListener('click', e => {
        e.preventDefault();
    
        auth.signOut();
        location.href = "/auth/login.html";
    });
}