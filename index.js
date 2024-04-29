// Vérifier que le document html est fini de charger
document.addEventListener('DOMContentLoaded', function(event){

    const result = document.getElementById('result');
    const caracteresToAdd = document.getElementsByClassName("caracterToAdd")
    const resetButton = document.getElementById('reset');
    const send = document.getElementById('send');
    const deleteButton = document.getElementById('delete');
    let reg = new RegExp("^[\\d\\W]+$");
    
    Array.prototype.forEach.call(caracteresToAdd, caracter => {
        caracter.addEventListener('click', element =>{
            addCaracter(caracter.innerHTML);
        })
    })
    deleteButton.addEventListener ('click', element=>{
        deleleLastCaracter();
    })
    resetButton.addEventListener('click', element =>{
        reset();
    })
    
    send.addEventListener('click', element => {
        calculate();
    })

    document.addEventListener('keyup', key=>{
        switch (key.key)   {
            case "Enter":
                calculate();
                break;
            case "Delete":
                reset();
                break;
            case "Backspace":
                deleleLastCaracter();
            default:
                if(reg.test(key.key)) {
                    addCaracter(key.key);
                }
                break;
    }
})

    function addCaracter(newCaracter){
        // result.value = result.value + newCaracter;
        result.value += newCaracter;
    }
    function reset() {
        result.value = "";
    }

    function calculate() {
        result.value = eval(result.value);
    }
    function deleleLastCaracter(){
        result.value = result.value.slice(0, -1)
    }
})


