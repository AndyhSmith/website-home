let activeID = 0
    function enlarge(id) {
        activeID = id
        let content = "<img src='img/" + images[id].u + "' id='actualImage'>"
        document.getElementById("largeImage").innerHTML = content;

        content = "<img src='img/" + ids[images[id].id] + "' id='actualImage2'>"
        document.getElementById("largeImage2").innerHTML = content;
        document.getElementById("largeView").style.display = "block"
    }

    function hide() {
        document.getElementById("largeView").style.display = "none"
    }

    function next() {
        let newID = activeID += 1
        if (newID >= images.length) {
            newID = 0
        }
        enlarge(newID)
    }

    function previous() {
        let newID = activeID -= 1
        if (newID == -1) {
            newID = images.length - 1
        }
        enlarge(newID)
    }


    let ids = {
        1: "Moon_Knight__Disney.png",
        2: "The_Persistence_of_Memory__Salvador_Dali.png",
        3: "Albuquerque_at_Night__advancedsolar.com.png",
        4: "Mr_Incredible__Pixar.png",
    }
    let images = [

        {u: "MrIncrediblePabloPicassoFINAL.png", id:4},
        {u: "MrIncrediblePeterMaxFINAL.png", id:4},
        {u: "MrIncredibleTangoTekHermitCraftFINAL.png", id:4},
        {u: "MrIncredibleVasilyKandinskyFINAL.png", id:4},

        {u: "MoonKnightClaudeMonetFINAL.png", id:1},
        {u: "MoonKnightDanielWallFINAL.png", id:1},
        {u: "MoonKnightDisneyFINAL.png", id:1},
        {u: "MoonKnightEdvardMunchFINAL.png", id:1},
        {u: "MoonKnightGeorgeHoltonFINAL.png", id:1},
        {u: "MoonKnightHokusaiFINAL.png", id:1},
        {u: "MoonKnightJacksonPollockFINAL.png", id:1},
        {u: "MoonKnightMattBeyrerFINAL.png", id:1},
        {u: "MoonKnightPabloPicassoFINAL.png", id:1},
        {u: "MoonKnightPeterMaxFINAL.png", id:1},
        {u: "MoonKnightRaphaelFINAL.png", id:1},
        {u: "MoonKnightVasilyKandinskyFINAL.png", id:1},

        {u: "ThePersistenceofMemoryClaudeMonetFINAL.png", id:2},
        {u: "ThePersistenceofMemoryDanielWallFINAL.png", id:2},
        {u: "ThePersistenceofMemoryEdvardMunchFINAL.png", id:2},
        {u: "ThePersistenceofMemoryGeorgeHoltonFINAL.png", id:2},
        {u: "ThePersistenceofMemoryJacksonPollockFINAL.png", id:2},
        {u: "ThePersistenceofMemoryMattBeyrerFINAL.png", id:2},
        {u: "ThePersistenceofMemoryPeterMaxFINAL.png", id:2},
        {u: "ThePersistenceofMemoryRaphaelFINAL.png", id:2},
        {u: "ThePersistenceofMemoryVasilyKandinskyFINAL.png", id:2},

        {u: "AlbuquerqueatNightGeorgeHoltonOutput.png", id:3},
        {u: "AlbuquerqueatNightPeterMaxOutput.png", id:3},
        {u: "AlbuquerqueatNightQianXuanOutput.png", id:3},
        {u: "AlbuquerqueatNightRaphaelOutput.png", id:3},

        
    ]

    let content = "";
    for (let i = 0; i < images.length; i++) {
        content += "<img class='image' onclick='enlarge(" + i + ")' src='img/" + images[i].u + "'>"
    }


    document.getElementById("content").innerHTML = content;