const canvas = document.getElementById('diceCanvas');
    const ctx = canvas.getContext('2d');

    // Function to draw dots on the dice
    function drawDots(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    // Function to draw a dice with specified number
    function drawDice(number) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the border of the dice
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 50, 100, 100);

        // Draw dots based on the number
        ctx.fillStyle = 'black';
        switch (number) {
            case 1:
                drawDots(100, 100);
                break;
            case 2:
                drawDots(75, 75);
                drawDots(125, 125);
                break;
            case 3:
                drawDots(75, 75);
                drawDots(100, 100);
                drawDots(125, 125);
                break;
            case 4:
                drawDots(75, 75);
                drawDots(125, 75);
                drawDots(75, 125);
                drawDots(125, 125);
                break;
            case 5:
                drawDots(75, 75);
                drawDots(125, 75);
                drawDots(100, 100);
                drawDots(75, 125);
                drawDots(125, 125);
                break;
            case 6:
                drawDots(75, 75);
                drawDots(125, 75);
                drawDots(75, 100);
                drawDots(125, 100);
                drawDots(75, 125);
                drawDots(125, 125);
                break;
        }
    }

    // Function to handle key press event
    function handleKeyPress(event) {
        if (event.code === 'Space') {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            drawDice(randomNumber);
        }
    }

    // Attach key press event listener
    document.addEventListener('keydown', handleKeyPress);

    // Draw the initial dice with number 1
    drawDice(1);