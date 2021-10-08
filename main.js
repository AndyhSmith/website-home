const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth
canvas2.height = window.innerHeight
canvas2.style.pointerEvents = "none";

// Settings
var showLeaves = true;
var settingAnimation = true
var settingTreeDepth = 10
var settingTrunkThickness = true;
var settingsConnectedTrunk = true;
var treeColor = '#4b4a33'

var settingsFall = false
var settingsSpring = true


// Constents
var BRANCH_LENGTH = (window.innerHeight / (.00001 * Math.pow(settingTreeDepth, 10))) //.4
var LEAF_SIZE = 25
var FLEXIBILITY = 200


// Animation Counter
var counter = 1


var images = []
var active_data = {}

function loadImages(data) {
    active_data = data
    images = []
    for (let i = 1; i < data.num; i++) {
        let imagePetal = new Image(60, 45);
        imagePetal.src = data.path + i + '.png';
        images.push(imagePetal)
    }
}

petalData = {
    "num": 6,
    "path": 'res/red_rose/p',
}

fallData = {
    "num": 12,
    "path": 'res/fall_leaves/p',
}

loadImages(petalData)


// Helper Functions
function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Onload function
function onload() {
    console.log("Loaded Materials")
}


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

function createLeaf() {
    let leaf = {
        "x":Math.random() * window.innerWidth,
        "y": 0,
        "xSpeed": -1,
        "ySpeed": - (Math.random() + .7),
        "seed": Math.random(),
        "img":Math.floor(Math.random() * (active_data.num - 1)),
        "canvas": getRandomInt(2)
    }
    return leaf
}

// Create Leafs
let leafs = []
for (let i = 0; i < 200; i++) {
    leafs.push(createLeaf())
}

function updateLeafs() {
    for (i in leafs) {
        s = leafs[i].seed
        leafs[i].x += Math.cos(counter / (50 + s * 100) + (s * 50))
        leafs[i].y += Math.cos(counter / (50 + s * 100) + (s * 20))
        leafs[i].x += leafs[i].xSpeed
        leafs[i].y -= leafs[i].ySpeed

        if (leafs[i].x > window.innerWidth || leafs[i].x < -20 || leafs[i].y > window.innerHeight + 50) {
            leafs[i].x = Math.random() * window.innerWidth
            leafs[i].y = -50
            leafs[i].seed = Math.random()
        }
    }
}

// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
// grd.addColorStop(1, "red");
// grd.addColorStop(0, "white");

var grd = ctx.createRadialGradient(window.innerWidth,0,100, window.innerWidth,0,window.innerWidth);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");


ctx.fillStyle = grd;
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
        drawImage(images[leafs[i].img],leafs[i].x, leafs[i].y,(leafs[i].seed * .2) + .1,leafs[i].x / 20 + leafs[i].y / 20, tempCanvas)
    }
    ctx.setTransform(1,0,0,1,0,0);
    ctx2.setTransform(1,0,0,1,0,0);
   
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
        if (fps < 55) {
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

