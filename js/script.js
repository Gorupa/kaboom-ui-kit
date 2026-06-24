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

    // Trigger the pop-in animation
    setTimeout(() => { 
        badge.style.transform = badge.style.transform.replace('scale(0)', 'scale(1)'); 
    }, 10);

    // Trigger the fade/scale-out animation and remove from DOM
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
        bubble.style.transform = "scale(1.02)";
        setTimeout(() => bubble.style.transform = "scale(1)", 100);
    }
}

// ==========================================
// PAYPAL SMART BUTTONS INTEGRATION
// ==========================================

// Global style for buttons
const paypalBtnStyle = {
    color:  'blue',
    shape:  'rect',
    label:  'checkout',
    height: 48
};

// 1. Premium Tier Button ($16)
if (document.getElementById('paypal-button-premium')) {
    paypal.Buttons({
        style: paypalBtnStyle,
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "KABOOM! UI Premium Kit",
                    amount: { value: '16.00' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('ZAP! Payment successful, ' + details.payer.name.given_name + '! Redirecting to WhatsApp to get your file...');
                window.open('https://wa.me/917339992788?text=Hey%20Gaurav!%20%F0%9F%92%A5%20I%20just%20paid%20$16%20via%20PayPal%20for%20the%20KABOOM!%20Premium%20Kit.%20Here%20is%20my%20transaction%20ID:%20' + details.id, '_blank');
            });
        }
    }).render('#paypal-button-premium');
}

// 2. Premium v2 Upgrade Button ($10)
if (document.getElementById('paypal-button-upgrade')) {
    paypal.Buttons({
        style: { ...paypalBtnStyle, color: 'gold', height: 40 }, // Slightly different style for upgrade button
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "KABOOM! UI Premium v2 Upgrade",
                    amount: { value: '10.00' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('BAM! Payment successful, ' + details.payer.name.given_name + '! Redirecting to WhatsApp to verify and get your file...');
                window.open('https://wa.me/917339992788?text=Hey%20Gaurav!%20%F0%9F%92%A5%20I%20just%20paid%20$10%20via%20PayPal%20for%20the%20KABOOM!%20Premium%20v2%20Upgrade.%20Here%20is%20my%20transaction%20ID:%20' + details.id + '%20(I%20will%20also%20provide%20proof%20of%20my%20v1%20purchase)', '_blank');
            });
        }
    }).render('#paypal-button-upgrade');
}

// 3. Elite Tier Button ($30)
if (document.getElementById('paypal-button-elite')) {
    paypal.Buttons({
        style: paypalBtnStyle,
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "KABOOM! UI Elite Kit",
                    amount: { value: '30.00' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('KABOOM! Payment successful, ' + details.payer.name.given_name + '! Redirecting to WhatsApp to get your file...');
                window.open('https://wa.me/917339992788?text=Hey%20Gaurav!%20%F0%9F%92%A5%20I%20just%20paid%20$30%20via%20PayPal%20for%20the%20KABOOM!%20Elite%20Kit.%20Here%20is%20my%20transaction%20ID:%20' + details.id, '_blank');
            });
        }
    }).render('#paypal-button-elite');
}
