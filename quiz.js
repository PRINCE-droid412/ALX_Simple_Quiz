// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Compare the user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

//Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
