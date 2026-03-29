// Creates a fun comic book visual effect when the button is clicked
function bamEffect() {
    const words = ["BAM!", "POW!", "WHAM!", "ZAP!", "BOOM!"];
    const word = words[Math.floor(Math.random() * words.length)];
    
    const badge = document.createElement('div');
    badge.className = 'k-badge';
    badge.innerText = word;
    
    Object.assign(badge.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(' + (Math.random() * 20 - 10) + 'deg) scale(0)',
        fontSize: '80px',
        zIndex: '9999',
        boxShadow: '8px 8px 0px var(--k-ink)',
        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    document.body.appendChild(badge);

    setTimeout(() => { badge.style.transform = badge.style.transform.replace('scale(0)', 'scale(1)'); }, 10);

    setTimeout(() => {
        badge.style.transform = badge.style.transform.replace('scale(1)', 'scale(0)');
        setTimeout(() => badge.remove(), 200);
    }, 800);
}

// Updates the speech bubble in real-time
function updateBubble() {
    const input = document.getElementById('live-input').value;
    const bubble = document.getElementById('live-bubble');
    
    if (input.trim() === "") {
        bubble.innerText = "Type below to see me change!";
        bubble.style.transform = "scale(1)";
    } else {
        bubble.innerText = input;
        // Add a slight pop animation when typing
        bubble.style.transform = "scale(1.02)";
        setTimeout(() => bubble.style.transform = "scale(1)", 100);
    }
}
