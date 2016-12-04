function validateForm(){
    var result =0;
    var a1 = document.getElementById("question1.4").checked;
    var a2 = document.getElementById("question2.3").checked;
    var a3 = document.getElementById("question3.2").checked;
    var a4_1 = document.getElementById("question4.1").checked; 
    var a4_2 = document.getElementById("question4.2").checked;
    var a5 = document.getElementById("question5.1").checked;
    
    if(a1 == true){
        result++;}
    if(a2 == true){
        result++;}
    if(a3 == true){
        result++;}
    if(a4_1 == true && a4_2 == true){
        result++;}
    if(a5 == true){
        result++;}
        
    if(result == 5){
        document.getElementById("contentquiz").innerHTML = "<br><h2>Your result: " + result + "/5</h2>Congrats! You got a perfect score.";
    }
    else if(result == 0){
        document.getElementById("contentquiz").innerHTML = "<br><h2>Your result: " + result + "/5</h2>Maybe you should study a little bit more!";
    }
    else{
        document.getElementById("contentquiz").innerHTML = "<br><h2>Your result: " + result + "/5</h2>Good Job!";
    }
    
    document.getElementById("footer").style.position = 'absolute';
        
   return false;
    
}