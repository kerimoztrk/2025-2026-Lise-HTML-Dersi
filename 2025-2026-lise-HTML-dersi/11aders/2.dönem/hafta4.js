function goster(){

    let meyveler= ["Elma","Armut","Muz","Kiraz"];
    document.getElementById("sonuc").innerText= meyveler[0]+ " - "+meyveler[2];
}


function yaz(){
    let metin = "";

    for(let i=1; i<=10;i++){
        metin += i + " ";
    }

    document.getElementById("sonuc2").innerText=metin;
}


function listele(){
    let ogrenciler=["Ali","Ayşe","Mehmet","Zeynep"];

    let sonuc="";

    for(let i=0;i<ogrenciler.length;i++){
        sonuc += ogrenciler[i]+"<br>";
    }

    document.getElementById("liste").innerHTML=sonuc

}


function baslat(){
    let i =1;
    let metin="";

    while(i<=5){
        metin += i+" ";
        i++;
    }

document.getElementById("sonuc3").innerText=metin;


}


function calistir(){
    let i=1;
    let metin="";

    do{
        metin +=i+" ";
        i++;
    }while(i<=5);

    document.getElementById("sonuc4").innerText=metin
}



function hesapla(){
    
    let n = Number(document.getElementById("sayi").value);
    let toplam=0;


    for(let i = 1; i<=n ;i++){
        toplam +=i;
    }

    document.getElementById("hesapSonuc").innerText="toplam: "+toplam;
}

function bul(){
    
    let sayilar=[12,412,12,11211,16,547,45,34];
    let enBuyuk=sayilar[0];

    
    for (let i =1; i <=sayilar.length;i++)

        if(sayilar[i]>enBuyuk){
            enBuyuk=sayilar[i];
        }


    document.getElementById("enBuyukSonuc").innerText="En büyük: "+enBuyuk;
}


function kontrolEt(){
    let sifre="";

    while(sifre!="1234"){
        sifre=prompt("Şifreni Gir");

    }

    alert("Doğru Şifre")
}


function geriSay(){
    let i = 5;

    let metin="";

    do{
        metin+=i+" ";
        i--;
    }while(i>=0);

    document.getElementById("geriSonuc").innerText=metin
}


function ciftSayiYaz(){

    let sayilar=[3,9,11,14,20,9];
    let metin="";
    let sayac=0;

    for(let i=0; i<sayilar.length;i++){
        
        if(sayilar[i]%2==0){
            metin += sayilar[i]+" ";
            sayac++;
        }
    }
    document.getElementById("ciftSonuc").innerText="Çift SAyılar:"+metin+ " | Toplam Çift sayısı= "+sayac;
}