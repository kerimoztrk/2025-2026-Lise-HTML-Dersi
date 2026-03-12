function goster(){

    document.getElementById("mesaj").innerHTML="İşlem Başarılı";

setTimeout(function(){

    document.getElementById("mesaj").innerHTML="";
    
}, 4000);


}



let mesajlar=["Merhaba","Javascript","Öğreniyorum","Bugun ders var"];

let i=0;

setInterval(function(){
    document.getElementById("metin").innerHTML=mesajlar[i];
    i++;

    if(i==mesajlar.length){
        i=0;
    }
},2000);



$("#btn").click(function(){
    let isim=$("#ad").val();

    $("#sonuc").text("Merhaba  "+isim);
})

$("#ekle").click(function(){
    $("#liste").append("<li>Yeni Ürün</li>");
});


let resimler=["fotograflar/resim1.jpg","fotograflar/resim2.jpg","fotograflar/resim3.jpg"];

let sayac=0;

setInterval(function(){
    document.getElementById("slayt").src=resimler[sayac];

    sayac++;

    if(sayac==resimler.length){
        sayac=0;
    }
},2000);