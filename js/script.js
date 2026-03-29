function bamEffect() {
    // Creates a fun comic book visual effect when the button is clicked
    const words = ["BAM!", "POW!", "WHAM!", "ZAP!"];
    const word = words[Math.floor(Math.random() * words.length)];
    
    const badge = document.createElement('div');
    badge.className = 'comic-badge';
    badge.innerText = word;
    
    // Style it to pop up in the middle of the screen
    Object.assign(badge.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(' + (Math.random() * 20 - 10) + 'deg) scale(0)',
        fontSize: '80px',
        zIndex: '9999',
        boxShadow: '8px 8px 0px #111',
        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    document.body.appendChild(badge);

    // Animate in
    setTimeout(() => { badge.style.transform = badge.style.transform.replace('scale(0)', 'scale(1)'); }, 10);

    // Remove after 1 second
    setTimeout(() => {
        badge.style.transform = badge.style.transform.replace('scale(1)', 'scale(0)');
        setTimeout(() => badge.remove(), 200);
    }, 800);
}
