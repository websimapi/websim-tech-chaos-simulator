document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const startButton = document.getElementById('start-chaos');
    const fixButton = document.getElementById('fix-all');
    const statusMessage = document.getElementById('status-message');
    const computer = document.getElementById('computer');
    const phone = document.getElementById('phone');
    const printer = document.getElementById('printer');
    const router = document.getElementById('router');
    const coffeeMachine = document.getElementById('coffee-machine');
    const character = document.querySelector('.character');
    const screen = document.getElementById('screen');
    const mouth = document.getElementById('mouth');

    // Messages for tech problems
    const techProblems = [
        "Computer blue screen of death!",
        "Phone battery draining rapidly!",
        "Printer paper jam... again!",
        "WiFi router stopped working!",
        "Coffee machine overflowing!"
    ];

    // Messages for character reactions
    const characterReactions = [
        "Not now, please!",
        "Why is everything happening at once?!",
        "I have a meeting in 5 minutes!",
        "Did I save my work?!",
        "This can't be happening!"
    ];

    // Start the chaos
    startButton.addEventListener('click', () => {
        startChaos();
        startButton.disabled = true;
        fixButton.disabled = false;
    });

    // Fix everything
    fixButton.addEventListener('click', () => {
        fixEverything();
        fixButton.disabled = true;
        startButton.disabled = false;
    });

    function startChaos() {
        statusMessage.textContent = "Oh no! Everything is going wrong!";
        
        // Make character panic
        character.classList.add('panic');
        mouth.setAttribute('d', 'M43,40 Q50,48 57,40'); // Shocked expression
        
        // Trigger device failures with slight delays
        setTimeout(() => computerFailure(), 500);
        setTimeout(() => phoneFailure(), 1000);
        setTimeout(() => printerFailure(), 1500);
        setTimeout(() => routerFailure(), 2000);
        setTimeout(() => coffeeFailure(), 2500);
        
        // Random character reactions
        let reactionInterval = setInterval(() => {
            const randomReaction = characterReactions[Math.floor(Math.random() * characterReactions.length)];
            statusMessage.textContent = randomReaction;
        }, 3000);
        
        // Store interval ID to clear it later
        window.reactionInterval = reactionInterval;
    }

    function computerFailure() {
        computer.classList.add('shake');
        screen.setAttribute('fill', '#0078D7');
        computer.classList.add('blue-screen');
        updateStatus(techProblems[0]);
    }

    function phoneFailure() {
        phone.classList.add('flash');
        const phoneScreen = document.getElementById('phone-screen');
        phoneScreen.setAttribute('fill', '#111');
        updateStatus(techProblems[1]);
    }

    function printerFailure() {
        printer.classList.add('paper-jam', 'smoke');
        const printerError = document.querySelector('.printer-error');
        printerError.setAttribute('fill', '#FF0000');
        updateStatus(techProblems[2]);
    }

    function routerFailure() {
        router.classList.add('offline');
        const routerLights = document.querySelectorAll('.router-light');
        routerLights.forEach(light => {
            light.setAttribute('fill', '#444');
        });
        updateStatus(techProblems[3]);
    }

    function coffeeFailure() {
        coffeeMachine.classList.add('shake', 'coffee-spill');
        const coffeeStream = document.querySelector('.coffee-stream');
        coffeeStream.setAttribute('height', '30');
        updateStatus(techProblems[4]);
    }

    function updateStatus(message) {
        statusMessage.textContent = message;
    }

    function fixEverything() {
        // Clear the reaction interval
        clearInterval(window.reactionInterval);
        
        // Reset character
        character.classList.remove('panic');
        mouth.setAttribute('d', 'M43,38 Q50,43 57,38'); // Smile again
        
        // Reset all devices
        computer.classList.remove('shake', 'blue-screen');
        screen.setAttribute('fill', '#0078D7');
        
        phone.classList.remove('flash');
        document.getElementById('phone-screen').setAttribute('fill', '#333');
        
        printer.classList.remove('paper-jam', 'smoke');
        document.querySelector('.printer-error').setAttribute('fill', '#FF7777');
        
        router.classList.remove('offline');
        document.querySelectorAll('.router-light').forEach(light => {
            light.setAttribute('fill', '#77FF77');
        });
        
        coffeeMachine.classList.remove('shake', 'coffee-spill');
        document.querySelector('.coffee-stream').setAttribute('height', '20');
        
        // Reset status
        statusMessage.textContent = "Phew! Everything is back to normal.";
        
        // Wait a moment then restore the initial message
        setTimeout(() => {
            statusMessage.textContent = "All systems normal... for now.";
        }, 3000);
    }
});

