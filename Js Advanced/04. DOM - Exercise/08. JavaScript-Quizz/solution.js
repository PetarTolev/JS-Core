function solve() {
    let sectionElements = document.getElementsByTagName('section');
    let sectionIndex = 0;

    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswersCount = 0;

    [...document.querySelectorAll('.answer-text')].forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === correctAnswers[sectionIndex]) {
                rightAnswersCount++;
            }

            sectionElements[sectionIndex].style.display = 'none';

            if (sectionIndex === 2) {
                let resutltElement = document.querySelector('#results');
                let h1 = resutltElement.querySelector('.results-inner h1');

                if (rightAnswersCount === 3) {
                    h1.textContent = 'You are recognized as top JavaScript fan!';
                } else {
                    h1.textContent = `You have ${rightAnswersCount} right answers`;
                }
                resutltElement.style.display = 'block';

                return;
            }

            sectionElements[sectionIndex + 1].style.display = 'block';
            sectionIndex++;
        });
    });
}