let play = true;
let list_paly = []
let list_play_1 = []
let list_play_2 = []
var Modal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  });
const dados_vitory = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9],[1,5,9], [3,5,7]]

function clickButton(params) {

    if (!list_paly.includes(params)) {    
        const element = document.getElementById("item"+params)
        if (play) {
            element.style.backgroundImage = "url(img/O.png)"
            list_play_1.push(params)
            validate(1)
        } else {
            element.style.backgroundImage = "url(img/X.png)"
            list_play_2.push(params)
            validate(2)
        }
        list_paly.push(params);
        play = !play;
    }
}

function validate(player) {

    if (player == 1) {
        if (list_play_1.length >= 3) {
            console.log(list_play_1)
        }
        
    } else {
        if (list_play_2.length >= 3) {
            console.log(list_play_2)
        }
    }
    for (let i = 0; i < dados_vitory.length; i++) {
        
        const list = dados_vitory[i];
        let value = 0; 
        for (let i = 0; i < list.length; i++) {
            
            if (list_play_1.includes(list[i])) {
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
                list_paly = [1,2,3,4,5,6,7,8,9];

                  Modal.show();
                
            }
        }

        
    }
}

function closed() {
    Modal.hide();
}


const name = "Marcelo";

const list = new Array(); // [1,2,3...]

list.push("Marcelo")
list.push("Rodrigo")
list.push("Vinicious")


console.log(list[2])
