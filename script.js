// Set the target date and time
const examDate = new Date('April 21, 2026 10:00:00').getTime();

// Update countdown every second
const countdownTimer = setInterval(function() {
    // Get current time
    const now = new Date().getTime();
    
    // Calculate time difference
    const distance = examDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    
    // When countdown reaches zero
    if (distance < 0) {
        clearInterval(countdownTimer);
        
        // Hide countdown
        const countdownContainer = document.getElementById('countdown-container');
        const motivationalSection = document.getElementById('motivational-section');
        const completionMessage = document.getElementById('completion-message');

        if (countdownContainer) countdownContainer.style.display = 'none';
        if (motivationalSection) motivationalSection.style.display = 'none';
        
        // Show completion message
        if (completionMessage) completionMessage.classList.add('show');
    }
}, 1000);

// Run immediately on page load
countdownTimer;
