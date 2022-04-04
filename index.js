M.AutoInit();

data = {
    p: [
        {
            title: "DNN Style Transfer",
            desc: "View a gallary of DNN style transfer images. Visit my Youtube for more.",
            link: "s/styletransfer/index.html",
            linkText: "Visit Site",
            img: "res/styletransfer400x225.png",
            tags: ["featured"],
            mobile: true,
            desktop: true,
            color: "white"
        },
        {
            title: "Jedi Fighter",
            desc: "Use the ASWD keys to controll a small jedi.",
            link: "s/jedifighter/index.html",
            linkText: "Visit Site",
            img: "res/jedi_fighter400x225.png",
            tags: ["featured", "game", "unfinished"],
            mobile: false,
            desktop: true,
            color: "black"
        },
        {
            title: "Bug Swarm",
            desc: "Control a swarm of bugs.",
            link: "https://bugs.andyhsmith.com",
            linkText: "Visit Site",
            img: "res/bugs/bugs400x225.png",
            tags: ["simulation"],
            mobile: true,
            desktop: true,
            color: "black"
        },
        {
            title: "MenuSmith",
            dontShowTitle: true,
            desc: "MenuSmith suggests recipes you can cook using the ingredients in your pantry.",
            link: "https://menusmith.com",
            linkText: "Visit Site",
            img: "res/menusmith/menusmith400x225.png",
            tags: ["featured", "tools"],
            mobile: true,
            desktop: true
        },
        {
            title: "Tree Simulator",
            desc: "Simulate a tree.",
            link: "https://ideas.andyhsmith.com/stickman",
            linkText: "Visit Site",
            img: "res/treesim/treeSim400x225.png",
            tags: ["featured", "artsy", "simulation"],
            color: "white",
            mobile: true,
            desktop: true
        },
        {
            title: "World Gen",
            desc: "Scroll through a procedurally generated map.",
            link: "https://ideas.andyhsmith.com/map",
            linkText: "Visit Site",
            img: "res/map/map400x225.png",
            tags: ["featured", "artsy", "simulation"],
            color: "white",
            mobile: true,
            desktop: true
        },
        
        {
            title: "Name Generator",
            desc: "Procedurally generates hundreds of unique names instantly.",
            link: "https://ideas.andyhsmith.com/name-generator",
            linkText: "Visit Site",
            img: "res/name/name400x225.png",
            tags: ["tools"],
            mobile: true,
            desktop: true
        },
        {
            title: "Sierpinski's Triangle",
            desc: "Recursively draw the Sierpinski Triangle fractal.",
            link: "https://fractals.andyhsmith.com",
            linkText: "Visit Site",
            img: "res/sierpinski/sierpinski400x225.png",
            tags: ["artsy", "simulation"],
            mobile: true,
            desktop: true
        },
        
        {
            title: "Mandelbrot Set",
            desc: "A JavaScript Mandelbrot Set explorer and animator.",
            link: "https://mandelbrot.andyhsmith.com",
            linkText: "Visit Site",
            img: "res/mandelbrot/mandelbrot400x225.png",
            tags: ["artsy"],
            mobile: true,
            desktop: true
        },
        
        {
            title: "3D Wireframe",
            desc: "A custom 3D wireframe rendering using no external libraries.",
            link: "https://ideas.andyhsmith.com/custom/",
            linkText: "Visit Site",
            img: "res/wireframe/wireframe400x225.png",
            tags: ["simulation"],
            mobile: false,
            desktop: true
        },
        {
            title: "Swarm Survivor",
            desc: "Survive waves of alien enemies from the game StarCraft. How long can you last?",
            link: "https://unit.andyhsmith.com",
            linkText: "Play Game",
            img: "res/unit/unit384x216.png",
            tags: ["game"],
            mobile: true,
            desktop: true
        },
        
        {
            title: "Random TD",
            desc: "A tower defense game that is different every time you play.",
            link: "https://towerdefense.andyhsmith.com",
            linkText: "Play Game",
            img: "res/td/td628x353.png",
            tags: ["unfinished"],
            mobile: false,
            desktop: true
        },
        {
            title: "Binary Rain",
            desc: "A fun graphical project that rains 1s and 0s.",
            link: "https://binaryrain.andyhsmith.com",
            linkText: "Visit Site",
            img: "res/binary/binary850x478.png",
            tags: ["simulation"],
            mobile: true,
            desktop: true,
            color: "black",
        },
        {
            title: "Musical Neural Networks",
            desc: "Music generated by deep learning recurrent neural networks.",
            link: "https://www.youtube.com/playlist?list=PLeF-gZY4hkmN39-8_eXJ6ikvRPSGrEb4J",
            linkText: "Visit YouTube",
            dontShowTitle: true,
            img: "res/neurak/neurak2-2560x1440.png",
            tags: ["artsy"],
            mobile: true,
            desktop: true
        },
        {
            title: "Rock Paper Scissors",
            desc: "A game that tries to learn from your choices.",
            link: "https://rps.andyhsmith.com",
            linkText: "Play Game",
            img: "res/rps/rps400x225.png",
            tags: ["game"],
            color: "black",
            mobile: true,
            desktop: true
        },
        
        {
            title: "Voxel World",
            desc: "Move and build in a 3D voxel world.",
            link: "https://voxel.andyhsmith.com",
            linkText: "Play Game",
            img: "res/voxel/voxel1920x1080.png",
            tags: ["unfinished"],
            mobile: false,
            desktop: true
        },
        
        // {
        //     title: "Translator",
        //     desc: "Read a book that replaces english words with words from a language you are learning.",
        //     link: "https://ideas.andyhsmith.com/translate",
        //     linkText: "Visit Site",
        //     img: "res/white400x225.png",
        //     tags: ["unfinished"],
        //     color: "black",
        //     mobile: true,
        //     desktop: true
        // },
        
    ]
}


function generateCard(obj) {
    let color = "#f9f9f9"
    if (obj.color) {
        color = obj.color
    }

    let content = ""
    content += '<div class="card">'
    content +=      '<div class="card-image waves-effect waves-block waves-light">'
    if (!obj.dontShowTitle) {
        content +=      '<div style="position:absolute; color:' + color + ';bottom:0px;padding: 10px; font-size: 20px; font-weight:bold;font-family: \'Righteous\', cursive;">' + obj.title + '</div>'
    }
    content +=          '<img class="activator" src="' + obj.img + '">'
    content +=      '</div>'
    // content +=      '<div class="card-content">'
    // content +=          '<span class="card-title activator grey-text text-darken-4">' + obj.title + '<i class="material-icons right">more_vert</i></span>'
    // content +=      '</div>'
    content +=       '<div class="card-reveal"> <div class ="card-title" style=" width:100%; height: 75%; position:absolute;z-index: 1;"></div>' 
    content +=          '<span class="card-title grey-text text-darken-4">' + obj.title + '</span>'
    content +=          '<span>' + obj.desc + '</span>'
    content +=           '<br>'

    content +=           '<div style="position:absolute;left: 0px;bottom:0px;padding-left: 10px;background-color:rgba(249,249,249,.5);width: 100%;box-shadow: 0px 0px 10px 10px rgba(249, 249, 249, .5);"><a href="' + obj.link + '" class="sel">' + obj.linkText + '</a>'
    if (obj.mobile) {
        content +=      '<i class="fas fa-mobile"></i>'   
    }
    if (obj.desktop) {
        content +=      '<i class="fas fa-desktop"></i>' 
    }
    content +=      '</div></div>'
    content += '</div>'
    return content
}

function updateDOM() {
    let content = ""
    document.getElementById("featured-projects").innerHTML = ""
    document.getElementById("featured-projects-h").style.display = "none"
    if (tFeatured) {
        for (let i in data.p) {
            if (data.p[i].tags.includes("featured")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("featured-projects-h").style.display = "block"
        document.getElementById("featured-projects").innerHTML = content

    }
    
    document.getElementById("tools-projects").innerHTML = ""
    document.getElementById("tools-projects-h").style.display = "none"
    if (tTools) {
        content = ""
        for (let i in data.p) {
            if (data.p[i].tags.includes("tools")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("tools-projects-h").style.display = "block"
        document.getElementById("tools-projects").innerHTML = content
    }
    
    document.getElementById("artsy-projects").innerHTML = ""
    document.getElementById("artsy-projects-h").style.display = "none"
    if (tArtsy) {
        content = ""
        for (let i in data.p) {
            if (data.p[i].tags.includes("artsy")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("artsy-projects-h").style.display = "block"
        document.getElementById("artsy-projects").innerHTML = content
    }
    
    document.getElementById("game-projects").innerHTML = ""
    document.getElementById("game-projects-h").style.display = "none"
    if (tGames) {
        content = ""
        for (let i in data.p) {
            if (data.p[i].tags.includes("game")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("game-projects-h").style.display = "block"
        document.getElementById("game-projects").innerHTML = content
    }
    
    document.getElementById("simulation-projects").innerHTML = ""
    document.getElementById("simulation-projects-h").style.display = "none"
    if (tSim) {
        content = ""
        for (let i in data.p) {
            if (data.p[i].tags.includes("simulation")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("simulation-projects").innerHTML = content
        document.getElementById("simulation-projects-h").style.display = "block"
    }
    
    document.getElementById("unfinished-projects").innerHTML = ""
    document.getElementById("unfinished-projects-h").style.display = "none"
    if (tUnfinished) {
        content = ""
        for (let i in data.p) {
            if (data.p[i].tags.includes("unfinished")) {
                content += generateCard(data.p[i])
            }
        }
        document.getElementById("unfinished-projects").innerHTML = content
        document.getElementById("unfinished-projects-h").style.display = "block"
    }
}




var tFeatured = true
var tTools = true
var tArtsy = true
var tGames = true
var tSim = true
var tUnfinished = true
updateDOM()
function showAll() {
    console.log("all")
    tFeatured = true
    tTools = true
    tArtsy = true
    tGames = true
    tSim = true
    tUnfinished = true
    updateDOM()
}

function untoggle() {
    tFeatured = false
    tTools = false
    tArtsy = false
    tGames = false
    tSim = false
    tUnfinished = false
}

function show(id) {
    untoggle()
    if (id == 1) {
        tFeatured = true
    } else if (id == 2) {
        tTools = true
    } else if (id == 3) {
        tArtsy = true
    } else if (id == 4) {
        tGames = true
    } else if (id == 5) {
        tSim = true
    } else if (id == 6) {
        tUnfinished = true
    }

    updateDOM()
}


