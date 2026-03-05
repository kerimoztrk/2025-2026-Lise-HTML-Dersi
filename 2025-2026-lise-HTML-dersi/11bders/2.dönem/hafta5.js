//ZAMANLAYICILAR (SETİNTERVAL,SETTİMEOUT)

// function degistir(){

//     setTimeout(function(){
//     document.getElementById("metin").innerText= "2 saniye sonra değişti"        
//     }, 10000);


// }

// function baslat(){

//     let sayi=0;

//     let timer=setInterval(function(){

//         sayi++;
//         document.getElementById("sayac").innerText=sayi;

//         if(sayi==10){
//             clearInterval(timer);
//         }
//     },1000);
// }




// $("#btn").click(function(){
//     $("#yazi").text("JQuery ile değişti");
// });


// $("#renkbtn").click(function(){
//     $("#metin2").css("color","red");
// });


// $("#gizle").click(function(){
//     $("#kutu").hide();
// });

// $("#goster").click(function(){
//     $("#kutu").show();
// });



// let sayi = 10;
// let timer;

// $("#baslat").click(function(){

//     timer = setInterval(function(){

//         $("#ekran").text(sayi);
//         sayi--;

//         if(sayi < 0){
//             clearInterval(timer);

//             setTimeout(function(){
//                 alert("Süre Bitti!");
//             },500);

//         }

//     },1000);

// });





// function aBaslat(){
//  let renkler=["red","blue","green","orange","purple"];
//  setInterval(function(){
//     let rastgeleSayi=Math.floor(Math.random()*renkler.length);
//     document.body.style.backgroundColor=renkler[rastgeleSayi];
//  },1000);
// }



// $("#buyut").click(function(){
//     $("#metin3").css("font-size","50px");
// });


// $("#degistir").click(function(){
//     $("#resim").attr("src","fotograflar/resim2.jpg");

// });



setInterval(function(){
    let zaman= new Date();

    document.getElementById("saat").innerHTML=zaman.toLocaleTimeString();

},1000);
