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
        5: "Wanderer_above_the_sea_of_fog__Caspar_David_Friedrich.png",
        6: "Howls_Moving_Castle_Calcifer,__Studio_Ghibli.png",
        7: "Howls_Moving_Castle,__Studio_Ghibli.png",
        8: "Howls_Moving_Castle,_Turnip_Head__Studio_Ghibli.png",
    }
    let images = [
        {u: "Howl_sMovingCastleCalcifer,Hokusai_FINAL.png", id:6},
        {u: "Howl_sMovingCastleCalcifer,ChenHongshou_FINAL.png", id:6},
        {u: "Howl_sMovingCastleCalcifer,VanGogh_FINAL.png", id:6},
        {u: "Howl_sMovingCastleCalcifer,VasilyKandinsky_FINAL.png", id:6},

        {u: "Howl_sMovingCastle,TurnipHeadClaudeMonet_FINAL.png", id:8},
        {u: "Howl_sMovingCastle,TurnipHeadDisney_FINAL.png", id:8},
        {u: "Howl_sMovingCastle,TurnipHeadPeterMax_FINAL.png", id:8},
        {u: "Howl_sMovingCastle,TurnipHeadRaphael_FINAL.png", id:8},

        {u: "Howl_sMovingCastle,IrishMonastery_FINAL.png", id:7},
        {u: "Howl_sMovingCastle,PeterMax_FINAL.png", id:7},
        {u: "Howl_sMovingCastle,RobertDelaunay_FINAL.png", id:7},

        {u: "WandererabovetheseaoffogAndySmith_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogHarelBoren_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogHenriMatisse_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogIrishMonastery_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogJeanMetzinger_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogKre8_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogPeterMax_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogSesshuToyo_FINAL.png", id:5},
        {u: "WandererabovetheseaoffogVanGogh_FINAL.png", id:5},

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