//Enabling the game
function play(){
    if(document.getElementById("rock").checked == false &&
    document.getElementById("scissors").checked == false &&
    document.getElementById("paper").checked == false){
        alert("Select an option!");
    } else {
        //Main block
        var pickacard = Math.floor(Math.random()*3);
        switch(pickacard){
            case 0:
                document.getElementById("iaplayer").innerHTML="IA selected Rock!";
                break;
            case 1:
                document.getElementById("iaplayer").innerHTML="IA selected Scissorss!";
                break;
            case 2:
                document.getElementById("iaplayer").innerHTML="IA selected Paper!";
                break;
        }
        //Checking the winner
        if ((document.getElementById("rock").checked == true && pickacard == 0) || 
        (document.getElementById("scissors").checked == true && pickacard == 1) || 
        (document.getElementById("paper").checked == true && pickacard == 2)){
            document.getElementById("iawin").innerHTML="";
            document.getElementById("score").innerHTML="Draw!";
        } else if ((document.getElementById("rock").checked == true && pickacard == 1) || 
        (document.getElementById("scissors").checked == true && pickacard == 2) || 
        (document.getElementById("paper").checked == true && pickacard == 0)){
            document.getElementById("iawin").innerHTML="";
            document.getElementById("score").innerHTML="You Win!";
        } else {
            document.getElementById("score").innerHTML="";
            document.getElementById("iawin").innerHTML="You Lose!";
        }
    }
}


//Cleaning options
function reset(){
    document.getElementById("iaplayer").innerHTML="IA Player";
    document.getElementById("iawin").innerHTML="";
    document.getElementById("score").innerHTML="";
}