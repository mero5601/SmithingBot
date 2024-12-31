const robot = require("robotjs");

// Function to perform random clicks within a rectangle
function randomClicks(startPos, endPos, numClicks, delay) {
    const [xMin, yMin] = startPos;
    const [xMax, yMax] = endPos;
    

    console.log(`Clicking randomly within the area: ${startPos} to ${endPos}`);
    
    for (let i = 0; i < numClicks; i++) {
        // Generate random x and y within the rectangle
        const x = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
        const y = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;

        // Move the mouse to the random position and click
        robot.moveMouse(x, y);
        robot.mouseClick();
        console.log(`Clicked at: (${x}, ${y})`);

        // Wait for the specified delay
        robot.setMouseDelay(delay);
    }
}

// Define the rectangle area
const startPosition = [1223, 436]; // Top-left corner
const endPosition = [1315, 497];   // Bottom-right corner

// Number of clicks and delay between each click in milliseconds
const numOfClicks = 10;
const clickDelay = 5000; // 500ms

randomClicks(startPosition, endPosition, numOfClicks, clickDelay);
