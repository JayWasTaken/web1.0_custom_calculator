const turtwig = {
    name: "Turtwig",
    hp: 55,
    attack: 68,
    defense: 64
}
const chimchar = {
    name: "Chimchar",
    hp: 44,
    attack: 58,
    defense: 44
}
const piplup = {
    name: "Piplup",
    hp: 53,
    attack: 51,
    defense: 53
}
const shinx = {
    name: "Shinx",
    hp: 45,
    attack: 65,
    defense: 34
}
// can put these in a separate js file called data.js, once there you can export
// 
const moveSet = {
    "turtwig": {
        // tackle, normal
        "tackle": 35,
        // razor leaf, grass
        "razor leaf": 55,
        //100% against shinx
        //"giga drain": 40,
    },
    "piplup": {
        // pound, normal
        "pound": 40,
        // peck, flying
        "peck": 35,
        //100% against shinx
    },
    "chimchar": {
        // scratch, normal
        "scratch": 40,
        // ember, fire
        "ember": 40,
        //100% against shinx
    },
    // "shinx": {
    //     "scratch": 40,
    //     "bite": 60,
    // },
}
const shinxMoves = {
    //this one isnt a choice, just noting down options
    //bite, dark
    //attack: 60
    // 200% strength to piplup
    // 50% strength to turtwig
    // 100% strength to chimchar
}

// console.log(moveSet["turtwig"])
const pokemonSelect = document.querySelector("#pokemon-select")
const moveSelect = document.querySelector("#move-choice")

pokemonSelect.addEventListener('change', foo)


function foo() {
    // console.log(pokemonSelect.value)
    const s = pokemonSelect.value
    const moves = moveSet[s]
    let options = ""
    for (const move in moves) {
        console.log(move)
        options += `<option value="${move}">${move}</option>`
    }
    moveSelect.innerHTML = options
    const moveOptions = moveSelect.querySelectorAll("option")
    console.log(options)
    console.log(moveOptions)
    //add event listener to each move option
}
foo()//makes it log before selecting stuff

//3 inputs:
//dropdown to choose pokemon
//type in current health of pokemon
//choose which move to use

//math
//moveSet - pokemonSelected.moveSelected.damage



// function battle()
// // switch statement to go off user's pokemon choice
// switch(pokemonChoice) {
//     case "Turtwig":
//         outputValue = ;
//         break;
//     case "Chimchar":
//         break;
//     case "Piplup":
//         break;
// }

