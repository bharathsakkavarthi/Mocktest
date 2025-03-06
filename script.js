function submitQuiz() {
    let score = 0;

    // Correct answers
    let answers = {
        q1: "Delhi",
        q2: "8"
    };

    let form = document.getElementById("quizForm");
    
    // Check answers
    for (let key in answers) {
        let selectedOption = form.elements[key].value;
        if (selectedOption === answers[key]) {
            score++;
        }
    }

    // Display result
    let totalQuestions = Object.keys(answers).length;
    document.getElementById("result").innerHTML = `You scored ${score} out of ${totalQuestions}!`;
}
