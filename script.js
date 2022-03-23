function generateFibonacci() {
    let cicles = document.getElementById("cicles").value;

    console.log(cicles);

    let penultimo=0;
    let ultimo=1;
    let numero;

    if(cicles<=2) {
        numero = cicles-1;
    } else{
        count=3;
        while(count<=cicles){
            numero= ultimo + penultimo;
            penultimo = ultimo;
            ultimo=numero;
            console.log(numero)

            count++;
        }
    }
}

let names = [];

function add() {
    let name = document.getElementById('name').value;
    names.push(name);
}

function list(){
    for(i = 0; i < names.length; i++){

        let newDiv = document.createElement(`div`);
        let contentDiv = document.createTextNode(`${names[i]}`);

        newDiv.appendChild(contentDiv);

        let activeDiv = document.getElementById(`div[${i}]`)
        document.body.insertBefore(newDiv, activeDiv)
    }
}

