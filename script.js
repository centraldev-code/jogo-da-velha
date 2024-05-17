let play = true;
let list_paly = []
let list_play_red = []
let list_play_blue = []
const dados_vitory = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9],[1,5,9], [3,5,7]]

function clickButton(params) {

    if (!list_paly.includes(params)) {    
        const element = document.getElementById("item"+params)
        if (play) {
            element.style.backgroundColor = "red"
            list_play_red.push(params)
            validate("red")
        } else {
            element.style.backgroundColor = "blue"
            list_play_blue.push(params)
            validate("blue")
        }
        list_paly.push(params);
        play = !play;
    }
}

function validate(player) {

    if (player == "red") {
        if (list_play_red.length >= 3) {
            console.log(list_play_red)
        }
        
    } else {
        if (list_play_blue.length >= 3) {
            console.log(list_play_blue)
        }
    }
    for (let i = 0; i < dados_vitory.length; i++) {
        
        const list = dados_vitory[i];
        let value = 0; 
        for (let i = 0; i < list.length; i++) {
            
            if (list_play_red.includes(list[i])) {
                value += 1
            }
            
        }
        if(value == 3) {
            console.log("Vitoria!!!")
            console.log("numeros vencedor " + list)
            for (let i = 0; i < list.length; i++) {
                const element = document.getElementById("item"+list[i])
                element.style.backgroundColor = "green"
                //Abrir Modal
                
            }
        }

        
    }
}


const name = "Marcelo";

const list = new Array(); // [1,2,3...]

list.push("Marcelo")
list.push("Rodrigo")
list.push("Vinicious")


console.log(list[2])
