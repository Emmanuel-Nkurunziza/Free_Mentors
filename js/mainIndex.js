// OPEN/CLOSE MODAL

// Get modal elements
var signUpModalElements = document.getElementById('signUpModalElts');
var signInModalElements = document.getElementById('signInModal');


// Get open modal buttons
var signUpModalButtons = document.getElementById('signUpModal');



// Get close the signUp mondal button
var closeMondalButton = document.getElementsByClassName('closeModalButton')[0];


// Listen for click to open signUpModal (ONLY ONE BUTTON!!!)
signUpModalButtons.addEventListener('click', openSignUpModal);
// Listen for click to close signUpModal
closeMondalButton.addEventListener('click', closeSignUpModal);
// Listen for click to close signUpModal -- by clicking outide window
window.addEventListener('click', closeSignUpModalOut);



//Function to open the signUp modal
function openSignUpModal() {
    signUpModalElements.style.display = 'block';
}
//Function to close the signUp modal
function closeSignUpModal() {
    signUpModalElements.style.display = 'none';
}
//Function to close the signUp modal-- by clicking outide window
function closeSignUpModalOut(e) {
    if (e.target == signUpModalElements) {
        signUpModalElements.style.display = 'none';
    }
    
}