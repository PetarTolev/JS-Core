function solve() {
    function clickEvent() {
        if (this.textContent === correctAnswers[sectionIndex - 1]) {
            rightAnswersCount++;
        }

        if (sectionIndex === 3) {
            let resutltElement = document.getElementsByTagName('h1')[1];

            if (rightAnswersCount === 3) {
                resutltElement.textContent = 'You are recognized as top JavaScript fan!';
            } else {
                resutltElement.textContent = `You have ${rightAnswersCount} right answers`;
            }
        }

        sectionElements[sectionIndex].style.display = 'none';
        sectionElements[sectionIndex + 1].style.display = 'block';
        sectionIndex++;
    }

    let sectionElements = document.getElementById('quizzie').parentElement;
    let sectionIndex = 1;

    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswersCount = 0;

    let buttons = document.getElementsByClassName('answer-text');

    for (const button of buttons) {
        button.addEventListener('click', clickEvent);
    }
}