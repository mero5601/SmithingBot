const robot = require('robotjs');

const furnace = { x: 1267, y: 366, name: "Furnace" };
const selection = { x: 262, y: 963, name: "Selection" };
const timer = (149600/2)+1.5;
const inv_balls = { x: 1502, y: 755, name: "Inventory Balls" };
const bank_steelbars = { x: 712, y: 134, name: "Bank Steel Bars" };
const edge_bank = { x: 312, y: 737, name: "Edge Bank" };
// Example usage (you'll need to get the actual hex color of the furnace):
const furnaceColor = "ff981f"; // Example color, REPLACE THIS
const furnaceCheckX = furnace.x; //x coordinate to check colour at. Ideally not where the npc spawns
const furnaceCheckY = furnace.y - 10; //y coordinate to check colour at. Ideally not where the npc spawns





function sleep(ms) {
    ms = Number(ms)
    if (isNaN(ms)) {
        console.error("Sleep value is not a number!");
        return; 
    }
    const maxOffset = 1337;
    const additionalSleep = Math.floor(Math.random() * (maxOffset + 1));
    const totalSleep = ms + additionalSleep;

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, totalSleep);
}

function randomOffset(maxOffset) {
    return Math.floor(Math.random() * (2 * maxOffset + 1)) - maxOffset;
}

function clickWithOffset(point, maxOffset = 5) {
    const offsetX = randomOffset(maxOffset);
    const offsetY = randomOffset(maxOffset);
    const x = point.x + offsetX;
    const y = point.y + offsetY;
    robot.moveMouse(x, y);
    robot.mouseClick();
    robot.mouseClick();
    console.log(`Clicked ${point.name} at x: ${x}, y: ${y}`);
}

function cannonballs() {
   
    clickWithOffset(furnace); // Correctly using clickWithOffset
    sleep(6500);

    clickWithOffset(selection); // Correctly using clickWithOffset
    sleep(500);

    console.log("Starting countdown...");
    const startTime = Date.now();
    const endTime = startTime + timer;
    while (Date.now() < endTime) {
        const remainingTime = Math.ceil((endTime - Date.now()) / 1000);
        if (remainingTime >= 0) {
            console.log(`${remainingTime} seconds remaining...`);
        }
        sleep(1000);
    }

    clickWithOffset(edge_bank); // Correctly using clickWithOffset
    clickWithOffset(edge_bank); // Correctly using clickWithOffset
    sleep(8500);

    emptyballs();
}


function emptyballs() {
    clickWithOffset({ x: 758, y: 96, name: "Bank Tab" });
    sleep(500);
    clickWithOffset(inv_balls);
    sleep(500);
    sleep(200);
    clickWithOffset(bank_steelbars);
    sleep(200);
    cannonballs();
}

function main() {
    // sleep(2000);
    // cannonballs();
    robot.moveMouse(1272,365)
   
}

main();