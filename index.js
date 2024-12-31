// Import the robotjs library
const robot = require('robotjs');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function rngsleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate a random sleep duration between 500ms and 1000ms
const randomDelay = Math.random() * (1000 - 500) + 500;

// Use the sleep function
(async () => {
    console.log("Start");
    await sleep(randomDelay);
    console.log("End after", randomDelay, "ms");
})();

const inv_smallpouch = { x: 1457, y: 756 };
const inv_medpouch = { x: 1499, y: 756 };
const inv_largepouch = { x: 1545, y: 756 };
const inv_xlargepouch = { x: 1588, y: 759 };
const bank_essence = { x: 529, y: 137 };
const close_bank = { x: 1360, y: 60 };
const compass={x:1486, y:48};
const first={x:1601,y: 147}
const second={x:1583,y: 173}
const agi_shortcut={x:890,y:670}
const cosmic_ruin={x:987,y:489}
const cosmic_altar={x:1265,y:585}
const furnace={x:1235,y:401}
const selection={x:262,y:963}
const timer=135600;
const inv_balls={x:1502,y:755}
const bank_steelbars={x:712,y:134}
const edge_bank={x:312,y:737}


// Function to capture a 10x10 box around a specific pixel
function captureBoxAroundPixel(x, y) {
    const boxSize = 10;
    const startX = x - Math.floor(boxSize / 2);
    const startY = y - Math.floor(boxSize / 2);
    const width = boxSize;
    const height = boxSize;

    // Capture the specified area
    const img = robot.screen.capture(startX, startY, width, height);

    // Save the screenshot to clipboard
    saveToClipboard(img, width, height);

    console.log(`Captured a ${boxSize}x${boxSize} box around pixel (${x}, ${y}).`);
    console.log(`Top-left corner of the box: (${startX}, ${startY})`);
}
function cannonballs(){
    // pixelcolor=robot.getPixelColor(369,686)
    // console.log(pixelcolor)

    

    
    robot.moveMouse(furnace.x,furnace.y)
    robot.mouseClick();
    sleep(6500)
    robot.moveMouse(selection.x,selection.y)
    sleep(500)
    robot.mouseClick()
    //  Start a countdown during sleep(timer)
     console.log("Starting countdown...");
     for (let i = timer / 1000; i > 0; i--) {
         console.log(`${i} seconds remaining...`);
         sleep(1000);
     }
    robot.moveMouse(edge_bank.x,edge_bank.y)
    sleep(200)
    robot.mouseClick();
    sleep(8500)
    emptyballs();
    
}



function emptyballs() {
    robot.moveMouse(758,96)  //bank tab
    robot.mouseClick();
    sleep(500)
    robot.moveMouse(inv_balls.x, inv_balls.y);
                    robot.mouseClick();
                    sleep(500);
                    robot.moveMouse(761,107)
                    sleep(200)
                    robot.mouseClick();
                    sleep(200)
                    robot.moveMouse(bank_steelbars.x, bank_steelbars.y);
                    robot.mouseClick();
                    cannonballs();
                    
}

function empty(){
    // robot.moveMouse(inv_smallpouch.x,inv_smallpouch.y);
    // sleep(100)
    // robot.mouseClick();
    // sleep(600)
    // robot.moveMouse(inv_medpouch.x,inv_medpouch.y);
    // sleep(100)
    // robot.mouseClick();
    // sleep(600)
    // robot.moveMouse(inv_largepouch.x,inv_largepouch.y);
    // robot.mouseClick();
    // sleep(1600)
    findCosmicAltar();  //begin craft position near 
    if (!findCosmicAltar()) {
        console.log("No altar found. Exiting sequence.");
        return; // Exit if no altar was found
    }
    
    sleep(3000)
    robot.moveMouse(inv_xlargepouch.x,inv_xlargepouch.y)
    robot.mouseClick()
    sleep(400)
    robot.mouseClick()
    sleep(400)
    findCosmicAltar();  //begin craft position near 
    robot.mouseClick();  
}




function returntrip(){
    findPortal();
    robot.moveMouse(911,121);
    sleep(500)
    2405,4831
    robot.mouseClick();
    sleep(11000)
    2409,4402
    
    
   
    robot.keyToggle("down","down")
    sleep(500)
    robot.keyToggle("down","up")
    sleep(500)

    robot.moveMouse(610,225)
    sleep(500)
    robot.mouseClick();
    
    sleep(500)
    robot.keyToggle("up","down")
    sleep(500)
    robot.keyToggle("up","up")
    sleep(26000)
    2386,4460
    findAndClickBank();
}



function fillup(){
robot.moveMouse(758,94);
sleep(300)
robot.mouseClick();    
robot.moveMouse(inv_smallpouch.x,inv_smallpouch.y+26)
sleep(300)
robot.mouseClick();
robot.moveMouse(bank_essence.x,bank_essence.y)
sleep(1200)
robot.mouseClick();
robot.mouseClick()
sleep(1600)
robot.moveMouse(inv_smallpouch.x,inv_smallpouch.y);
robot.mouseClick();
sleep(1600)
robot.moveMouse(inv_medpouch.x,inv_medpouch.y);
robot.mouseClick();
sleep(1600)
robot.moveMouse(inv_largepouch.x,inv_largepouch.y);
robot.mouseClick();
sleep(1000)
robot.moveMouse(bank_essence.x,bank_essence.y)
sleep(1400)
robot.mouseClick();
robot.mouseClick()
robot.moveMouse(inv_xlargepouch.x,inv_xlargepouch.y)
sleep(400)
robot.mouseClick()
robot.mouseClick()
sleep(600)
robot.moveMouse(bank_essence.x,bank_essence.y)
sleep(600)
robot.mouseClick()
sleep(600)
robot.moveMouse(compass.x,compass.y)
robot.mouseClick();
}

function walkroute(){
    // robot.moveMouse(compass.x,compass.y)
    // sleep(100)
    // robot.mouseClick();
    // sleep(200);
    //  robot.moveMouse(first.x,first.y)  //2399,4438
    //  robot.mouseClick()
    //  sleep(9500)
    //  robot.moveMouse(second.x,second.y)  //2411,4408
    //  robot.mouseClick()
    //  sleep(17000)
    // if (!findAgi()) {
    //     console.log("No altar found. Exiting sequence.");
    //     return; // Exit if no altar was found
    // }
     
    // //   2409,4400(right next to agi shortcut)
    //  sleep(8000)  
    // GOOD
    //  robot.moveMouse(1556,156);
    //  sleep(1000)
    //  robot.mouseClick();  //2403,4376(right next to cosmic altar)
    //  sleep(8000)
    //  robot.moveMouse(cosmic_ruin.x,cosmic_ruin.y);
    //  sleep(300)
    //  robot.mouseClick();
    //  sleep(5000)
    //  2612,4833
    
    //  robot.moveMouse(compass.x,compass.y)
    //  sleep(1000)
    //  robot.mouseClick();
    //  sleep(1000)
    findCosmicAltar();
    // sleep(500)
    // robot.mouseClick();
    // sleep(7200)
    
    empty();   
}

function saveToClipboard(img, width, height) {
    const buffer = Buffer.alloc(width * height * 4); // Create a buffer for image data

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const color = img.colorAt(x, y);
            const r = parseInt(color.substring(0, 2), 16);
            const g = parseInt(color.substring(2, 4), 16);
            const b = parseInt(color.substring(4, 6), 16);
            const index = (y * width + x) * 4;

            buffer[index] = b; // BMP format uses BGR instead of RGB
            buffer[index + 1] = g;
            buffer[index + 2] = r;
            buffer[index + 3] = 255; // Alpha channel
        }
    }

    const tempFilePath = path.join(__dirname, 'screenshot.bmp'); // Temporary file for clipboard transfer
    const bmpHeader = createBmpHeader(width, height);

    fs.writeFileSync(tempFilePath, Buffer.concat([bmpHeader, buffer]));

    // Use Windows-compatible clipboard command
    execSync(`PowerShell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Clipboard]::SetImage([System.Drawing.Image]::FromFile('${tempFilePath}'))"`);
    console.log("Image copied to clipboard.");
}

function createBmpHeader(width, height) {
    const header = Buffer.alloc(54); // BMP header is always 54 bytes

    // BMP Header
    header.write("BM", 0); // Signature
    header.writeUInt32LE(54 + width * height * 4, 2); // File size
    header.writeUInt32LE(0, 6); // Reserved
    header.writeUInt32LE(54, 10); // Data offset

    // DIB Header
    header.writeUInt32LE(40, 14); // DIB header size
    header.writeInt32LE(width, 18); // Image width
    header.writeInt32LE(-height, 22); // Image height (negative for top-down bitmap)
    header.writeUInt16LE(1, 26); // Planes
    header.writeUInt16LE(32, 28); // Bits per pixel
    header.writeUInt32LE(0, 30); // Compression (none)
    header.writeUInt32LE(width * height * 4, 34); // Image size
    header.writeInt32LE(2835, 38); // Horizontal resolution (pixels per meter)
    header.writeInt32LE(2835, 42); // Vertical resolution (pixels per meter)
    header.writeUInt32LE(0, 46); // Colors in palette
    header.writeUInt32LE(0, 50); // Important colors

    return header;
}

// Function to find the specified colors in a given screenshot area, click once found, and save to clipboard
function findCosmicAltar() {
    const areas = [
        { x: 772, y: 429, width: 100, height: 100, colors: ["3D3835", "3C3733", "33302F", "4E4640", "49423C",] },
        { x: 1433, y: 484, width: 100, height: 100, colors: ["2B2723"] }

    ];

    for (const area of areas) {
        const { x, y, width, height, colors } = area;

        // Capture the specified area
        const img = robot.screen.capture(x, y, width, height);

        // Save the screenshot to clipboard
        saveToClipboard(img, width, height);

        // Loop through the captured area to find a matching color
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                try {
                    const sampleColor = img.colorAt(i, j).toUpperCase();

                    console.log(`Checking color at (${x + i}, ${y + j}): ${sampleColor}`);

                    if (colors.includes(sampleColor)) {
                        const screenX = x + i;
                        const screenY = y + j;
                        robot.moveMouse(screenX, screenY);
                        console.log(`Found cosmic altar color at (${screenX}, ${screenY}), clicking...`);
                        robot.mouseClick();
                        return true; // Stop after clicking the first match
                    }
                } catch (error) {
                    console.error(`Error retrieving color at (${i}, ${j}):`, error);
                }
            }
        }

        console.log(`No cosmic altar color detected in area starting at (${x}, ${y}).`);
    }

    return false; // Return false if no altar was found
}

function findAgi() {
    const areas = [
        { x: 751, y: 462, width: 200, height: 300 }, // First area
        
    ];

    // Define the target colors in hexadecimal format
    const targetColors = [
        
        "OB5B824","186D36"  // RGB(81, 72, 71)
    ];

    // Check each defined area
    for (const area of areas) {
        const { x, y, width, height } = area;

        // Capture the specified area
        const img = robot.screen.capture(x, y, width, height);

        // Save the screenshot to clipboard
        saveToClipboard(img, width, height);

        // Loop through the captured area to find a matching color
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                try {
                    const sampleColor = img.colorAt(i, j).toUpperCase(); // Convert to uppercase

                    console.log(`Checking color at (${x + i}, ${y + j}): ${sampleColor}`); // Debugging info

                    if (targetColors.includes(sampleColor)) {
                        const screenX = x + i;
                        const screenY = y + j;
                        robot.moveMouse(screenX, screenY);
                        console.log(`Found portal color at (${screenX}, ${screenY}), clicking...`);
                        robot.mouseClick();
                        return; // Stop after clicking the first match
                    }
                } catch (error) {
                    console.error(`Error retrieving color at (${i}, ${j}):`, error);
                }
            }
        }

        console.log(`No agi shortcut  detected in area starting at (${x}, ${y}).`);
    }
}
function findToolTip() {
    

    // Get current cursor position
    const mousePos = robot.getMousePos();

    // Define the tooltip area relative to the current cursor position
    const x = mousePos.x;
    const y = mousePos.y + 15; // 5 pixels below the cursor
    const width = 80;
    const height = 15;

    // Capture the specified area
    const img = robot.screen.capture(x, y, width, height);

    // Get the color at a specific pixel (e.g., 60px to the right and 30px below the top-left of capture)
    const color = robot.getPixelColor(x + 60, y + 30);

    // Save the screenshot to clipboard (ensure you have a `saveToClipboard` function defined elsewhere)
    saveToClipboard(img, width, height);

    // Log the details
    console.log(`Captured tooltip at (${x}, ${y}) with dimensions ${width}x${height}.`);
    console.log(`Color at pixel (${x + 60}, ${y + 30}): #${color}`);
}

function findPortal() {
    const areas = [
        { x: 174, y: 459, width: 30, height: 30 }, // First area
        
    ];

    // Define the target colors in hexadecimal format
    const targetColors = [
        
        "5B5150"  // RGB(81, 72, 71)
    ];

    // Check each defined area
    for (const area of areas) {
        const { x, y, width, height } = area;

        // Capture the specified area
        const img = robot.screen.capture(x, y, width, height);

        // Save the screenshot to clipboard
        saveToClipboard(img, width, height);

        // Loop through the captured area to find a matching color
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                try {
                    const sampleColor = img.colorAt(i, j).toUpperCase(); // Convert to uppercase

                    console.log(`Checking color at (${x + i}, ${y + j}): ${sampleColor}`); // Debugging info

                    if (targetColors.includes(sampleColor)) {
                        const screenX = x + i;
                        const screenY = y + j;
                        robot.moveMouse(screenX, screenY);
                        console.log(`Found portal color at (${screenX}, ${screenY}), clicking...`);
                        robot.mouseClick();
                        return; // Stop after clicking the first match
                    }
                } catch (error) {
                    console.error(`Error retrieving color at (${i}, ${j}):`, error);
                }
            }
        }

        console.log(`No portal color detected in area starting at (${x}, ${y}).`);
    }
}



function ScreenCap(){
    var img= robot.screen.capture(0,0,1920,1080);

    var pixel_color= img.colorAt(x,y);
    console.log(pixel_color);
}

function findAndClickBank() {
    // Define the scanning area (right half of the screen)
    const x = 595; // Start from the middle of a 1920x1080 screen
    const y = 488;
    const width = 200;
    const height = 200;

    // Capture the specified area
    const img = robot.screen.capture(x, y, width, height);
    saveToClipboard(img,width,height)

    // Define target bank colors
    const banks = ["0E0801","100A01","110A01","1C1605","150D01","2C0C02","060400","201404"];

    // Loop through the captured area to find a matching color
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const sampleColor = img.colorAt(i, j);

            if (banks.includes(sampleColor)) {
                const screenX = x + i;
                const screenY = y + j;
                robot.moveMouse(screenX, screenY);
                console.log(`Found bank color at (${screenX}, ${screenY}), clicking...`);
                robot.mouseClick();
                return; // Stop after clicking the first match
            }
        }
    }

    console.log("No bank color found in the scanned area.");
}


function main() {
    
    //64,936.. if at any point this color is detected, reclick the furnace and adjust the timer as this interrupts the smithing process
    // cannonballs();
    // sleep(2000)
    findToolTip();
//    robot.moveMouse(844,550)

    
}



main();


