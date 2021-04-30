
data = {
    "projects": [
        {
            "title":"Online Mandelbrot Set",
            "imgSRC":"./p/mandelbrot/img.jpg",
            "description":"A mandelbrot set generator that will let you zoom in and out with a mouse click. You can download your image. You can also download a set of automatically generated images that when stiched together create an animation.",
            "link":"./p/mandelbrot/index.html",
            "date": "7/2020",
            "tags": ["Mobile","Downloadable PNG","Animated"],
            "location":"nav2"
        },
        {
            "title":"Random Tower Defense",
            "imgSRC":"./p/td/img.png",
            "description":"A tower defense game where everthing is randomized. Right now it is a huge work in progress but because of school it is being benched. ",
            "link":"./p/td/index.html",
            "date": "10/2020",
            "tags": ["Game","Tower Defense"],
            "location": "nav4"
        },
        {
            "title":"Unit",
            "imgSRC":"./p/units/img.png",
            "description":"Move and control a soldier around a field. The soldier is a sprite from the game Starcraft.",
            "link":"./p/units/index.html",
            "date": "10/2020",
            "tags": ["Game","Dev"],
            "location": "nav4"
        },
        {
            "title":"ChapterChalk",
            "imgSRC":"./res/proj/logo.png",
            "description":"A business idea that would allow authors to publish and presell the first few chapters of books they are writing.",
            "link":"www.chapterchalk.com",
            "date": "10/2020",
            "tags": ["Full Stack","Business Idea", "Books"],
            "location": "nav4"
        },
        {
            "title":"Bug Controller",
            "imgSRC":"./p/bugs/img.jpg",
            "description":"Lets you create and control a bunch of bugs around a field.",
            "link":"./p/bugs/index.html",
            "date": "10/2020",
            "tags": ["Full Stack","Business Idea"],
            "location": "nav3"
        },
        {
            "title":"Binary Rain",
            "imgSRC":"./p/binary_rain/img.png",
            "description":"Creates an animated binary rain. I want to turn this into a game when I have time.",
            "link":"./p/binary_rain/index.html",
            "date": "10/2020",
            "tags": ["Random"],
            "location": "nav3"
        },
        {
            "title":"Hallway",
            "imgSRC":"./p/hallway/img.png",
            "description":"I will probably remove this.",
            "link":"./p/hallway/hallway.html",
            "date": "4/2019",
            "tags": ["Old"],
            "location": "nav3"
        },
        {
            "title":"Location",
            "imgSRC":"./p/location/img.png",
            "description":"Move a person around.",
            "link":"./p/location/index.html",
            "date": "10/2020",
            "tags": ["Random"],
            "location": "nav3"
        },
        {
            "title":"Three.js",
            "imgSRC":"./p/three/img.jpg",
            "description":"A bad version of minecraft programemd using three.js. TODO: Add controll instructions.",
            "link":"./p/three/index.html",
            "date": "10/2020",
            "tags": ["Game","Computer Only"],
            "location": "nav3"
        },
    ]
}




for (let i = 0; i < data.projects.length; i++) {
    // build tag list
    let builtTags = "";
    for (let j = 0; j < data.projects[i].tags.length; j++) {
        builtTags += `<div class='project-tag'>` + data.projects[i].tags[j] + `</div>`
    }

    var div = document.getElementById(data.projects[i].location);

    div.innerHTML += 
    `<div class='project-container'>
        <div class='project-img-container'>
            <a href="` + data.projects[i].link + `"><img class='project-image' src='` + data.projects[i].imgSRC + `'></a>
        </div>
        
        <div class='project-text-container'>
            <div class='project-title-container'>
                <a href="` + data.projects[i].link + `"><h2>` + data.projects[i].title + `</h2></a>
            </div>
            <p>` + data.projects[i].description + `</p>
            <div class='project-tag-container'>`
                + builtTags +
            `</div>
        </div>
                
        <div class='project-data-container'>
            <p>` + data.projects[i].date + `</p>
        </div>
    </div>
    <hr style='height:2px; width: 90%; border-width:0;background-color:gray'></hr>`
}