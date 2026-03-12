function degistir(){
    setTimeout(function(){
        document.getElementById("metin").innerText="2 saniye sonra değişti"
    }, 10000);
}


function baslat(){
    let sayi=0;

    let timer= setInterval(function(){

        sayi++;
        document.getElementById("sayac").innerText=sayi;
        
        if(sayi==10){
            clearInterval(timer);
        }
    },1000);

}


// JQuery örneği


$("#btn").click(function(){
    $("#yazi").text("JQuery ile değişti.")
});


$("#renkBtn").click(function(){
    $("#metin2").css("color","red");
});


$("#gizle").click(function(){
    $("#kutu").hide();
});

$("#goster").click(function(){
    $("#kutu").show();
});


let sayi=10;
let timer;

$("#baslat2").click(function(){
    timer=setInterval(function(){
        $("#ekran").text(sayi);
        sayi--;


        if(sayi<0){
            clearInterval(timer);

            setTimeout(function(){
                alert("süre bitti");
            },500);
        }
    },1000);
});

$("#durdur").click(function(){
    clearInterval(timer);

});

$("#renk").click(function(){
    $("#ekran").css("color","red");
});


function baslat2(){
    let renkler=["red","green","blue","purple","orange"];

    setInterval(function(){
        let rastgele=Math.floor(Math.random()*5);
        document.body.style.backgroundColor=renkler[rastgele];
    },2000);
}


$("#buyut").click(function(){
    $("#metin3").css("font-size","40px");
});


setInterval(function(){
    let zaman= new Date();

    document.getElementById("saat").innerHTML=zaman.toLocaleTimeString();

},1000);

$("#renk2").click(function(){
    $("body").css("background-color","lightblue");
});