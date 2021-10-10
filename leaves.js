//#################################################################
// C A N V A S   S E T U P
//#################################################################
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth
canvas2.height = window.innerHeight
canvas2.style.pointerEvents = "none"; // click through upper canvas

//#################################################################
// H E L P E R   F U N C T I O N S
//#################################################################

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//#################################################################
// G L O B A L   V A R I A B L E S   &   S E T T I N G S
//#################################################################
var counter = 1 // animation counter
var season = ""
var settingShowOptions = false

function settingsShowOptions() {
    
    if (settingShowOptions) {
        settingShowOptions = false
        document.getElementById("options").style.display = "none"
    } else {
        settingShowOptions = true
        document.getElementById("options").style.display = "block"
    }
}



//#################################################################
// I M A G E   D A T A
//#################################################################
//https://stackoverflow.com/questions/17411991/html5-canvas-rotate-image
// no need to use save and restore between calls as it sets the transform rather 
// than multiply it like ctx.rotate ctx.translate ctx.scale and ctx.transform
// Also combining the scale and origin into the one call makes it quicker
// x,y position of image center
// scale scale of image
// rotation in radians.
function drawImage(image, x, y, scale, rotation, theCanvas){
    theCanvas.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    theCanvas.rotate(rotation );
    theCanvas.drawImage(image, -image.height - 2.5, -image.width * 2.5);
} 

var images = [] 
function loadImages(data) {
    active_data = data
    images = []
    for (let i = 1; i < data.num; i++) {
        let imagePetal = new Image(60, 45);
        imagePetal.src = data.path + i + '.png';
        images.push(imagePetal)
    }
}


var active_data = {}
dataPetal = {
    "name": "Valentine's Day",
    "num": 7,
    "path": 'p/red_rose/p',
    "s": 1,
    "w": -1,
    "r": true,
}

dataFall = {
    "name": "Fall",
    "num": 13,
    "path": 'p/fall_leaves/p',
    "s":1,
    "w": -1,
    "r": true,
}

dataSnow = {
    "name": "Winter",
    "num": 11,
    "path": 'p/snow/p',
    "s":.5,
    "w": 0,
    "r": true,
}

dataLeaf = {
    "name": "Summer",
    "num": 20,
    "path": 'p/summer_leaves/p',
    "s": .8,
    "w": -1,
    "r": true,
}

dataSpring = {
    "name": "Spring",
    "num": 17,
    "path": 'p/spring_cherry/p',
    "s": .5,
    "w": -1,
    "r": true,
}

dataBinary = {
    "name": "Binary",
    "num": 3,
    "path": 'p/binary/p',
    "s": .3,
    "w": 0,
    "r": false,
}

dataPumpkin = {
    "name": "Halloween",
    "num": 18,
    "path": 'p/pumpkin/p',
    "s": .5,
    "w": 0,
    "r": true,
}

var data_options = [dataSpring, dataLeaf, dataFall, dataSnow, dataPetal, dataBinary, dataPumpkin]



//#################################################################
// O N L O A D
//#################################################################

function onload() {
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()
    document.getElementById("date").innerHTML = month + "/" + day + "/" + year
    
    // Set correct particles
    active_data = dataSnow
    if (month >= 3) { // SPRING March 3rd
        active_data = dataSpring
        season = "Spring"
    } 
    if (month >= 6) { // SUMMER June 20
        active_data = dataLeaf
        season = "Summer"
    } 
    if (month >= 9) { // FALL September 22
        active_data = dataFall
        season = "Fall"
    } 
    if (month >= 12) { // WINTER December 21
        active_data = dataSnow
        season = "Winter"
    }

    if (month == 2 && day == 14) {
        active_data = dataPetal
        season = "Valentine's Day"
    }

    if (month == 10 && day == 31) {
        active_data = dataPumpkin
        season = active_data.name
    }

    if (Math.random() < .2) {
        active_data = data_options[Math.floor(Math.random()*data_options.length)];
        season = "Random Selection:<br>" + active_data.name
    }

    // active_data = dataBinary
    // Manually change options
    let content = ""
    for (i in data_options) {
        content += '<div class="selection" onclick="regenParticles(' + i + ')"><img class="sel-image" src="' + data_options[i].path + '1.png"></div>'

    }
    document.getElementById("options").innerHTML = content;

    document.getElementById("season").innerHTML = season;
    document.getElementById("active").innerHTML = "<img class='sel-image' src='" + active_data.path + "1.png'>";
    // active_data = dataSpring
    loadImages(active_data)
    createParticles()
    console.log("Loaded Materials")
}

//#################################################################
// P A R T I C L E S
//#################################################################

function regenParticles(data){
    active_data = data_options[data]
    document.getElementById("season").innerHTML = active_data.name;
    document.getElementById("active").innerHTML = "<img class='sel-image' src='" + active_data.path + "1.png'>";
    loadImages(active_data)
    createParticles()
}

function createLeaf() {
    let leaf = {
        "x":Math.random() * window.innerWidth,
        "y": 0,
        "xSpeed": active_data.w,
        "ySpeed": - (Math.random() + .7),
        "seed": Math.random(),
        "img":Math.floor(Math.random() * (active_data.num - 1)),
        "canvas": getRandomInt(2)
    }
    return leaf
}

let leafs = []
function createParticles() {
    // Create Leafs
    leafs = []
    for (let i = 0; i < 100; i++) {
        leafs.push(createLeaf())
    }
}



//#################################################################
// D R A W
//#################################################################

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i in leafs) {
        // ctx.fillRect(leafs[i].x, leafs[i].y, 5, 5);
        let tempCanvas = null
        if (leafs[i].canvas == 0) {
            tempCanvas = ctx
        } else {
            tempCanvas = ctx2
        }
        let rotation = 0
        if (active_data.r) {
            rotation = leafs[i].x / 20 + leafs[i].y / 20
        }
        
        drawImage(images[leafs[i].img],leafs[i].x, leafs[i].y,((leafs[i].seed * .2) + .1) * active_data.s, rotation, tempCanvas)
    }
    ctx.setTransform(1,0,0,1,0,0);
    ctx2.setTransform(1,0,0,1,0,0);
   
}


//#################################################################
// U P D A T E
//#################################################################

function updateLeafs() {
    for (i in leafs) {
        s = leafs[i].seed
        if (active_data.r) {
            leafs[i].x += Math.cos(counter / (50 + s * 100) + (s * 50))
            leafs[i].y += Math.cos(counter / (50 + s * 100) + (s * 20))
        }
        
        leafs[i].x += leafs[i].xSpeed
        leafs[i].y -= leafs[i].ySpeed

        if (leafs[i].x > window.innerWidth || leafs[i].x < -20 || leafs[i].y > window.innerHeight + 50) {
            leafs[i].x = Math.random() * window.innerWidth
            leafs[i].y = -50
            leafs[i].seed = Math.random()
        }
    }
}

var d = new Date();
let oldDate = d.getTime();
let newDate = null
let totalFPS = 0
let fps = 60
function update() {
    
   
    if (counter % 20 == 0) {
        d = new Date();
        oldDate = newDate
        newDate = d.getTime();
        fps = (20000 / (newDate - oldDate)).toFixed(0)
        document.getElementById("fps").innerHTML = fps
        if (fps < 50 && leafs.length > 30) {
            for (let i = 0; i < 20; i++) {
                leafs.shift()
            }
            console.log("Removed Petal", leafs.length)
        }
        fps = 0
    }
    
    updateLeafs()
    draw()
    counter++;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

