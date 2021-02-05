function correctAnswers() {
    let correct = 0;

/////////////////////////////////////////////////////////////////////////////////////////////

    if (document.getElementsByName("resp_0")[0].value=="Nate River") {
        correct++;
        document.getElementsByName("resp_0")[0].style.color="green";
        document.getElementById("correctanswer0").style.color="green";
        document.getElementById("correctanswer0").innerHTML="Você acertou!";
    }
    else {
        document.getElementsByName("resp_0")[0].style.color="red";
        document.getElementById("correctanswer0").style.color="red";
        document.getElementById("correctanswer0").innerHTML="Errado... A resposta correta é: Nate River";
    }

////////////////////////////////////////////////////////////////////////////////////////

    if (document.getElementsByName("resp_1_0")[0].checked==true && document.getElementsByName("resp_1_1")[0].checked==true && document.getElementsByName("resp_1_2")[0].checked==false && document.getElementsByName("resp_1_3")[0].checked==false && document.getElementsByName("resp_1_4")[0].checked==false) {
        correct++;
        document.getElementById("correctanswer1").style.color="green";
        document.getElementById("correctanswer1").innerHTML="Você acertou!";
    }
    else {
        document.getElementById("correctanswer1").style.color="red";
        document.getElementById("correctanswer1").innerHTML="Errado... As alternativas corretas eram: 1 e 2";
    }

    document.getElementsByClassName("zero")[0].style.color="green";
    document.getElementsByClassName("zero")[1].style.color="green";
    document.getElementsByClassName("one")[0].style.color="red";
    document.getElementsByClassName("one")[1].style.color="red";
    document.getElementsByClassName("one")[2].style.color="red";

///////////////////////////////////////////////////////////////////////////////////////////

    if (document.getElementsByName("resp_2")[0].value==100) {
        correct++;
        document.getElementsByName("resp_2")[0].style.color="green";
        document.getElementById("correctanswer2").style.color="green";
        document.getElementById("correctanswer2").innerHTML="Você acertou!";
    }
    else {
        document.getElementsByName("resp_2")[0].style.color="red";
        document.getElementById("correctanswer2").style.color="red";
        document.getElementById("correctanswer2").innerHTML="Errado... A resposta correta é: 100";
    }


////////////////////////////////////////////////////////////////////////////////////////////


    if (document.getElementsByName("resp_3")[0].value=="1998-01-26") {
        correct++;
        document.getElementsByName("resp_3")[0].style.color="green";
        document.getElementById("correctanswer3").style.color="green";
        document.getElementById("correctanswer3").innerHTML="Você acertou!";
    }
    else {
        document.getElementsByName("resp_3")[0].style.color="red";
        document.getElementById("correctanswer3").style.color="red";
        document.getElementById("correctanswer3").innerHTML="Errado... A resposta correta é: 26/01/1998";
    }


////////////////////////////////////////////////////////////////////////////////////////////


    if (document.getElementsByName("resp_4")[0].value=="1985-09") {
        correct++;
        document.getElementsByName("resp_4")[0].style.color="green";
        document.getElementById("correctanswer4").style.color="green";
        document.getElementById("correctanswer4").innerHTML="Você acertou!";
    }
    else {
        document.getElementsByName("resp_4")[0].style.color="red";
        document.getElementById("correctanswer4").style.color="red";
        document.getElementById("correctanswer4").innerHTML="Errado... A resposta correta é: Setembro de 1985";
    }

////////////////////////////////////////////////////////////////////////////////////////////


    if (correct==5) {
        document.getElementById("totalcorrect").style.color="green";
        document.getElementById("totalcorrect").innerHTML="Você acertou todas as questões!!! Parabéns!!!";
    }
    else {
        if (correct==0) {
            document.getElementById("totalcorrect").style.color="red";
            document.getElementById("totalcorrect").innerHTML="Você não acertou nenhuma questão :(";

        }
        else {
            document.getElementById("totalcorrect").style.color="black";
            document.getElementById("totalcorrect").innerHTML=`Você acertou <span style="color:orange">${correct}</span> questões`;
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////

}