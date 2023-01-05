// 2023 01 05

Result = document.getElementById("result");

function Main(Element){
    if(Element.id == ""){
        Num = Math.floor(Math.random() * 6) + 1;
        Element.src = ("imgs/" + Num + ".png");
        Element.alt = Num;
        Element.id = "used";
        Win();
    }
}

function Win(){
    Elements = document.querySelectorAll('[id=used]');
    if(Elements.length == 2){
        if(Elements[0].alt > Elements[1].alt){
            Result.innerHTML = "Player 1 Won";
        }
        else if(Elements[0].alt < Elements[1].alt){
            Result.innerHTML = "Player 2 Won";
        }
        else {
            Result.innerHTML = "Tie";
        }
        document.getElementById("restart").style.display = "block";
    }
}

function Clear(){
    for(I = 0; I < Elements.length; I++){
        if(I == 0){
            Elements[I].src = ("imgs/default_1.png");
        }
        else{
            Elements[I].src = ("imgs/default_2.png");
        }
        Elements[I].alt = "";
        Elements[I].id = "";
    }
    Result.innerHTML = null;
    document.getElementById("restart").style.display = "none";
}