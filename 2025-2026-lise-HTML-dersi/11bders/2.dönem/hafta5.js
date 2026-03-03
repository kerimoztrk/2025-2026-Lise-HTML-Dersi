//ZAMANLAYICILAR (SETİNTERVAL,SETTİMEOUT)

function degistir(){

    setTimeout(function(){
    document.getElementById("metin").innerText= "2 saniye sonra değişti"        
    }, 10000);


}

function baslat(){

    let sayi=0;

    let timer=setInterval(function(){

        sayi++;
        document.getElementById("sayac").innerText=sayi;

        if(sayi==10){
            clearInterval(timer);
        }
    },1000);
}




$("#btn").click(function(){
    $("#yazi").text("JQuery ile değişti");
});


$("#renkbtn").click(function(){
    $("#metin2").css("color","red");
});


$("#gizle").click(function(){
    $("#kutu").hide();
});

$("#goster").click(function(){
    $("#kutu").show();
});