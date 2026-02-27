// Quick Exit: Redirects to a neutral site like Google immediately
function quickExit() {
    window.location.href = "https://www.google.com";
}

// Form Submission Handling
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, this is where you'd send data to your secure database
    const county = document.getElementById('location').value;
    
    alert("Your report has been sent securely. A Children's Officer in " + county + " will be alerted. Please stay safe.");
    
    this.reset(); // Clear the form
});




function quickExit() {
    window.location.replace("https://www.google.com");
}

document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add a loading state to the button
    const btn = document.querySelector('.submit-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Safely...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert("Asante! Your report has been encrypted and sent to the Children's Office. Stay calm, help is coming.");
        btn.innerHTML = 'Send Secure Report';
        btn.style.opacity = '1';
        this.reset();
    }, 2000);
});


// Smooth Scroll for Dashboard Link
document.querySelector('.dashboard-nav-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#dashboard').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form Submission Handling
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const county = document.getElementById('location').value;
    const btn = document.querySelector('.submit-btn');
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Safely...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert("Asante! Your report has been encrypted and sent to the Children's Office in " + county + ". You are a brave member of the Assembly.");
        btn.innerHTML = 'Send Secure Report';
        btn.style.opacity = '1';
        this.reset();
    }, 2000);
});

// Form Submission Handling
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const county = document.getElementById('location').value;
    const btn = document.querySelector('.submit-btn');
    
    // Visual feedback
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Safely...';
    btn.style.opacity = '0.7';

    // Simulate secure transmission
    setTimeout(() => {
        alert("Asante! Your report has been encrypted and sent to the Children's Office in " + county + ". Please stay calm, help is coming.");
        btn.innerHTML = 'Send Secure Report';
        btn.style.opacity = '1';
        this.reset();
    }, 2000);
});



// Redirects to Google and clears history so 'Back' button won't return here
function quickExit() {
    window.location.replace("https://www.google.com");
}

// Emergency Hotkey: Pressing 'Escape' triggers the Quick Exit
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") quickExit();
});

// Form Submission with visual feedback
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const county = document.getElementById('location').value;
    const btn = document.querySelector('.submit-btn');

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Safely...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate secure transmission
    setTimeout(() => {
        alert("Thank you. Your report has been encrypted and sent to the Children's Office in " + county + ". Please stay calm, help is coming.");
        btn.innerHTML = 'Send Secure Report';
        btn.style.opacity = '1';
        btn.disabled = false;
        this.reset();
    }, 2000);
});




const facts = [
    "Fact: In Kenya, a child is anyone below the age of 18.",
    "Fact: You have the right to a name and nationality from birth!",
    "Fact: It is illegal for anyone to keep you out of school.",
    "Fact: Your opinion matters in all matters affecting you.",
    "Fact: You have the right to be protected from child labor."
];

const factTrigger = document.querySelectorAll('.fact-trigger');
const factText = document.getElementById('fact-text');

factTrigger.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factText.innerText = randomFact;
    });
});