function goster(){

    let  meyveler=["Elma","Armut","Muz","Kiraz"];

    document.getElementById("sonuc").innerText=meyveler[0]+" - "+meyveler[2];
}

function yaz(){

    let metin="";

    for(let i =1; i<=10; i++){
        metin += i+" ";
    }

    document.getElementById("sonuc2").innerText=metin;

}


function listele(){
    let ogrenciler=["Ali","Veli","Ahmet","Ayşe","Zeynep"];
    let sonuc="";


    for(let i=0; i<ogrenciler.length;i++){
        sonuc += ogrenciler[i]+ "<br>";
    }

    document.getElementById("sonuc3").innerHTML=sonuc;




}




function baslat(){
    
let i = 1;
let metin="";

    while(i <=5){
        metin += i+ " ";
        i++;
    }
    document.getElementById("sonuc4").innerText=metin
}


function calistir(){

    let i=1;
    let metin="";

    do{
        metin += i+" ";
        i++;
    }while(i<=5);

    document.getElementById("sonuc5").innerText;

}




function hesapla(){
    let n =Number(document.getElementById("sayi").value);
    let toplam=0; 

    for (let i=1; i<=n;i++){
        toplam += i;
    }

    document.getElementById("toplamSonuc").innerText= "Toplam: "+toplam;
}



function bul(){
    let sayilar= [12,52,600,7,84,13,22];

    let enBuyuk= sayilar[0];

    for(let i =1; i<sayilar.length;i++){
        if(sayilar[i]>enBuyuk){
            enBuyuk=sayilar[i];
        }
    }
    document.getElementById("enBuyukSonuc").innerText="En büyük: "+enBuyuk;
}



function basla(){
    let sayi=0;

    while(sayi<100){
        sayi+=10;
    }

    document.getElementById("yuzSonuc").innerText="Son Değer: "+ sayi;
}


function sifreKontrol(){
    let sifre="";

    while(sifre !== "1234"){
        sifre=prompt("şifeyi giriniz:");
    }

    alert ("doğru şifre");
}

function geriSay(){
    let i=5;
    let metin="";

    do{
        metin += i+ " ";
        i--;
    }while(i>=1);


    document.getElementById("geriSonuc").innerText=metin;
}


function ciftleriBul(){
    let sayilar=[12,121,11,523,64,73,7530];
    let metin="";
    let sayac=0;


    for(let i =0;i<=sayilar.length;i++){

        if(sayilar[i]%2==0){
            metin += sayilar[i]+ " ";
            sayac++;
        }
    }

    document.getElementById("ciftSonuc").innerText="Çift Sayılar: "+metin+
    "| Toplam Çift Sayısı:"+sayac;



}


function sıfırGireneKadarTopla(){

    let toplam=0;
    let sayi;

    while(true){
        sayi=prompt("Sayı giriniz (çıkmak için 0 a basınız):");

        if(sayi==0){
            break;
        }


        toplam += Number(sayi);
    }

    document.getElementById("sıfırSonuc").innerText="Toplam Değer:"+toplam;
}