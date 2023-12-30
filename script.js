let countdownInterval;

    function startCountdown() {
      const hours = parseInt(document.getElementById('hours').value, 10) || 0;
      const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
      const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;

      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      let remainingSeconds = totalSeconds;

      function updateCountdown() {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        document.getElementById('countdown').innerText = `${hours} ${minutes} ${seconds}`;

        remainingSeconds--;

        if (remainingSeconds < 0) {
          clearInterval(countdownInterval);
          document.getElementById('countdown').innerText = 'Countdown complete!';
          playSound();
        }
      }

      // Initial update
      updateCountdown();

      // Update countdown every second
      countdownInterval = setInterval(updateCountdown, 1000);
    }

    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const clockElement = document.getElementById('clock');
      clockElement.innerText = `${hours}:${minutes}:${seconds}`;

      // Update every second
      setTimeout(updateClock, 1000);
    }

    function playSound() {
        // Create an audio element
        const audio = new Audio('alarm.wav');
        audio.play();
      }

    // Initial clock update
    updateClock();