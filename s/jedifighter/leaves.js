//#################################################################
// C A N V A S   S E T U P
//#################################################################
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.imageSmoothingEnabled = false;
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
function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        return true
    } else {
        return false
    }
};

//#################################################################
// G L O B A L   V A R I A B L E S   &   S E T T I N G S
//#################################################################
var counter = 1 // animation counter

class Jedi {
    constructor() {
        this.x = window.innerWidth / 2
        this.y = 0
        this.w = 32
        this.h = 32
        this.xSpeed = 0
        this.ySpeed = 0
        this.movingLeft = false
        this.movingRight = false
        this.onGround = false
        this.jumpReleased = false
        this.crouching = false
        this.blockLeft = false
        this.jumps = 0
    }

    get hitBox(){
        return {x:this.x + this.w / 3, y:this.y, w:this.w / 3, h: this.h}
    }

    get bottom() {
        return this.y + this.h
    }
}

let p = new Jedi()

//#################################################################
// P L A T F O R M S
//#################################################################
let platforms = []
for (let i = 0; i < 20; i++) {
    let rect1 = {x: Math.random() * window.innerWidth, y:  Math.random() * window.innerHeight - 50, w:100, h:10}
    platforms.push(rect1)
}




//#################################################################
// A N I M A T I O N S
//#################################################################

let running_right_animation = {"f": 5, "s": 5, "x": 0, "y": 19}
let running_left_animation = {"f": 5, "s": 5, "x": 0, "y": 18}
let standing_animation_left = {"f": 1, "s": 10, "x": 0, "y": 1}
let standing_animation_right = {"f": 1, "s": 10, "x": 1, "y": 1}
let jump_animation = {"f": 1, "s": 10, "x":0, "y": 2}
let jump_left_animation = {"f": 1, "s": 10, "x":3, "y": 2}
let jump_right_animation = {"f": 1, "s": 10, "x":2, "y": 2}
let jump_right_double_animation = {"f": 4, "s": 5, "x": 0, "y": 17}
let jump_left_double_animation = {"f": 4, "s": 5, "x": 0, "y": 16,}
let jump_normal_double_animation = {"f": 4, "s": 5, "x": 0, "y": 15}
let crouch_animation = {"f": 1, "s": 5, "x": 2, "y": 1}
let block_left_animation = {"f": 4, "s": 3, "x": 0, "y": 3}



//#################################################################
// D R A W
//#################################################################

let GRAVITY = .2
let FRICTION = .8




let image = new Image(60, 45);
image.src = "sprite.png"

let a = jump_right_double_animation

let imageCounter = 0
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i in platforms) {
        ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h);
    }

    if (counter % a.s == 0) {
        imageCounter += 1
    }
    
    imageCounter = imageCounter % a.f

    
    // ctx.drawImage(image, 0, 0);
    let sx = 16 * (imageCounter + a.x)
    let sy = 16 * a.y
    void ctx.drawImage(image, sx, sy, 16, 16, p.x, p.y, p.w, p.h); 
}





//#################################################################
// K E Y   P R E S S 
//#################################################################

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
  
    var handled = false;
    if (event.keyCode == 68) {
        p.movingRight = true
    } 
    else if (event.keyCode == 65) {
        p.movingLeft = true
    } 
    else if (event.keyCode == 83) {
        p.crouching = true
    } 
    else if (event.keyCode == 37) {
        p.blockLeft = true
    } 
    else if (event.keyCode == 87 && p.jumps < 2 && p.jumpReleased) {
        p.ySpeed += -5
        p.jumps += 1
        p.onGround = false
        p.jumpReleased = false
    } 
    // else if (event.keyCode !== undefined) {
    //   // Handle the event with KeyboardEvent.keyCode and set handled true.
    // }
  
    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  }, true);

  window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
  
    var handled = false;
    if (event.keyCode == 68) {
        p.movingRight = false
    } 
    else if (event.keyCode == 65) {
        p.movingLeft = false
    } 
    else if (event.keyCode == 83) {
        p.crouching = false
    } 
    else if (event.keyCode == 37) {
        p.blockLeft = false
    } 
    else if (event.keyCode == 87 ) {
        p.jumpReleased = true
    } 
    // else if (event.keyCode !== undefined) {
    //   // Handle the event with KeyboardEvent.keyCode and set handled true.
    // }
  
    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  }, true);


//#################################################################
// U P D A T E
//#################################################################


var d = new Date();
let oldDate = d.getTime();
let newDate = null
let totalFPS = 0
let fps = 60
function update() {
    // p.x += a.dx
    // p.y += a.
    p.x += p.xSpeed
    p.y += p.ySpeed
    p.ySpeed += GRAVITY
    p.xSpeed *= FRICTION

    // Colide with ground
    if (p.y + p.h > window.innerHeight) {
        p.ySpeed = 0
        p.y = window.innerHeight - p.h
        p.jumps = 0
        p.onGround = true
    }

    // check platform collisions
    for (i in platforms) {
        if (!p.crouching && collision(p.hitBox, platforms[i]) && p.ySpeed >= 0 && p.bottom <= platforms[i].y + platforms[i].h) {
            p.ySpeed = 0
            p.y = platforms[i].y - p.h
            p.onGround = true
            p.jumps = 0
        }
    }

   

    // Move Left and Right
    if (p.movingLeft) {
        p.xSpeed -= 1
    } else if (p.movingRight) {
        p.xSpeed += 1
    }

    // Set animations
    
    if (p.movingLeft && (p.jumps == 2)) {
        a = jump_left_double_animation
    }
    else if (p.blockLeft) {
        a = block_left_animation
    }
    
    else if (p.movingRight && (p.jumps == 2)) {
        a = jump_right_double_animation
    }
    else if (!p.onGround && (p.jumps == 2)) {
        a = jump_normal_double_animation
    }
    else if (p.movingLeft && !p.onGround) {
        a = jump_left_animation
    }
    
    else if (p.movingRight && !p.onGround) {
        a = jump_right_animation
    }
    else if (p.movingLeft) {
        a = running_left_animation
    } 
    else if (p.movingRight) {
        a = running_right_animation
    }
    else if (p.crouching) {
        a = crouch_animation
    }
    else {
        a = standing_animation_left
    }

   
    if (counter % 20 == 0) {
        d = new Date();
        oldDate = newDate
        newDate = d.getTime();
        fps = (20000 / (newDate - oldDate)).toFixed(0)
        document.getElementById("fps").innerHTML = fps
        fps = 0
    }
    
    draw()
    counter++;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);


