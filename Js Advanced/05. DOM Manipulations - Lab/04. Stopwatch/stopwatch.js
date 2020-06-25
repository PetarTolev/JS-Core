function stopwatch() {
    const timeDiv = document.querySelector('#time');
    let interval;

    document.querySelector('#startBtn')
        .addEventListener('click', function() {
            let seconds = 0;
            let minutes = 0;
            timeDiv.textContent = '00:00';

            interval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }

                let secondsText = seconds.toString();
                let minutesText = minutes.toString();

                if (seconds < 10) {
                    secondsText = '0' + seconds;
                }

                if (minutes < 10) {
                    minutesText = '0' + minutes;
                }

                timeDiv.textContent = `${minutesText}:${secondsText}`;
            }, 1000);

            startBtn.disabled = true;
            stopBtn.disabled = false;
        });

    document.querySelector('#stopBtn')
        .addEventListener('click', () => {
            clearInterval(interval);

            startBtn.disabled = false;
            stopBtn.disabled = true;
        })
}