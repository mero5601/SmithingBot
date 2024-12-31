const robot = require('robotjs');
const furnace={x:1234,y:396}
const selection={x:262,y:963}
const timer=135600;
const inv_balls={x:1502,y:755}
const bank_steelbars={x:712,y:134}
const edge_bank={x:312,y:737}

// ... (your constants)

function sleep(ms, maxOffset = 1500) {
    // Ensure ms is a number
    ms = Number(ms)
    if (isNaN(ms)) {
        console.error("Sleep value is not a number!");
        return; // Or throw an error if you prefer
    }

    // Add random offset (but never go below the original ms value)
    const additionalSleep = Math.floor(Math.random() * (maxOffset + 1));
    const totalSleep = ms + additionalSleep;

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, totalSleep);
}

// ... (randomOffset and clickWithOffset functions - no changes needed)

function cannonballs() {
    robot.moveMouse(furnace.x, furnace.y);
    robot.mouseClick();
    console.log(`Clicked Furnace at x: ${furnace.x}, y: ${furnace.y}`);
    sleep(6500); // Now correctly adds RNG to 6500ms

    clickWithOffset(selection);
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

    clickWithOffset(edge_bank);
    sleep(200);
    clickWithOffset(edge_bank);
    sleep(8500); // Now correctly adds RNG to 8500ms

    emptyballs();
}

// ... (emptyballs and main functions - no changes needed)

function emptyballs() {
    clickWithOffset(758, 96); //bank tab
    sleep(500);
    clickWithOffset(inv_balls.x, inv_balls.y);
    sleep(500);
    clickWithOffset(761, 107); //bank tab
    sleep(200);
    clickWithOffset(bank_steelbars.x, bank_steelbars.y);
    sleep(200); //Added a small sleep here as it is good practice
    cannonballs();
}

function main(){
    sleep(1000)
    cannonballs();
}

main();