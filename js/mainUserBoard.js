// OPEN/CLOSE MODAL ON THE USER BOARD PAGE

// Get modal elements
var OpenMentor1ModalElements = document.getElementById('Mentor1ModalElts');


// Get open modal buttons
var viewMoreMentor1Button = document.getElementById('Mentor1Modal');



// Get close mondal button
var closeMondalButton = document.getElementsByClassName('closeModalButton')[0];


// Listen for click to open signUpModal (ONLY ONE BUTTON!!!)
viewMoreMentor1Button.addEventListener('click', viewMentor1);
// Listen for click to close signUpModal
closeMondalButton.addEventListener('click', closeSignUpModal);
// Listen for click to close signUpModal -- by clicking outide window
window.addEventListener('click', closeSignUpModalOut);



//Function to open the signUp modal
function viewMentor1() {
    OpenMentor1ModalElements.style.display = 'block';
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