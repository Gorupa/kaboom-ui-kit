function bamEffect() {
    const words = ["BAM!", "POW!", "WHAM!", "ZAP!"];
    const word = words[Math.floor(Math.random() * words.length)];
    
    const badge = document.createElement('div');
    badge.className = 'comic-badge';
    badge.innerText = word;
    
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

    setTimeout(() => { badge.style.transform = badge.style.transform.replace('scale(0)', 'scale(1)'); }, 10);

    setTimeout(() => {
        badge.style.transform = badge.style.transform.replace('scale(1)', 'scale(0)');
        setTimeout(() => badge.remove(), 200);
    }, 800);
}
