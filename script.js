const examDate = new Date('April 21, 2026 10:00:00').getTime();

const quotes = [
    "Believe you can and you're halfway there.",
    "The secret of getting ahead is getting started.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your hard work will pay off. Stay focused!",
    "Success is the sum of small efforts repeated daily.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The only way to do great work is to love what you do.",
    "Start where you are. Use what you have. Do what you can."
];

function updateQuote() {
    const quoteEl = document.getElementById('motivational-section');
    if (!quoteEl) return;
    
    quoteEl.classList.remove('quote-fade');
    void quoteEl.offsetWidth; // Trigger reflow
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${randomQuote}"`;
    quoteEl.classList.add('quote-fade');
}

// Update quote every 10 seconds
setInterval(updateQuote, 10000);
updateQuote();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = examDate - now;
    
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown-container').style.display = 'none';
        document.getElementById('motivational-section').style.display = 'none';
        document.getElementById('completion-message').classList.add('show');
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}, 1000);

function updateElement(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    
    const newValue = String(value).padStart(2, '0');
    if (el.textContent !== newValue) {
        el.textContent = newValue;
    }
}
