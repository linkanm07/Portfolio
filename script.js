// --- JAVASCRIPT FOR DYNAMIC TYPING INTERFACE ---
document.addEventListener("DOMContentLoaded", () => {
    // Specialized MERN stack titles for professional impression
    const phrases = ["MERN Stack Developer.", "JavaScript Specialist.", "Full-Stack Engineer."];
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeletingWords = false;
    
    const targetSpan = document.getElementById("typing-text");

    function renderTypingAnimation() {
        const currentFullPhrase = phrases[phraseIndex];
        
        if (isDeletingWords) {
            // Cut down characters one by one
            targetSpan.textContent = currentFullPhrase.substring(0, characterIndex - 1);
            characterIndex--;
        } else {
            // Print characters one by one
            targetSpan.textContent = currentFullPhrase.substring(0, characterIndex + 1);
            characterIndex++;
        }

        // Setup variant delays for typing vs deleting speed
        let operationalDelay = isDeletingWords ? 30 : 60;

        if (!isDeletingWords && characterIndex === currentFullPhrase.length) {
            // Wait for 2 seconds when full word is typed
            operationalDelay = 2000; 
            isDeletingWords = true;
        } else if (isDeletingWords && characterIndex === 0) {
            isDeletingWords = false;
            // Loop sequentially through keywords array
            phraseIndex = (phraseIndex + 1) % phrases.length;
            operationalDelay = 400; 
        }

        setTimeout(renderTypingAnimation, operationalDelay);
    }

    // Initialize only if target element exists safely inside DOM
    if (targetSpan) {
        renderTypingAnimation();
    }
});
