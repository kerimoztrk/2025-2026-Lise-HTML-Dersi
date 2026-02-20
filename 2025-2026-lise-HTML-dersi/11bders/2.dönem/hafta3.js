function kontrol(){
    let yas= document.getElementById("yas").value;

    if(yas >=18){
        document.getElementById("sonuc").innerHTML="Yaşın 18 den büyük ehliyet alabilrsin."
    }
}


function notKontrol(){
    let not=document.getElementById("not").value;

    if(not>=50){
        document.getElementById("notSonuc").innerHTML="Geçti";
    }else{
        document.getElementById("notSonuc").innerHTML="Kaldı";
    }
}


function hesapla(){
    let not=document.getElementById("not").value;

    if(not>=85){
        document.getElementById("harfNot").innerHTML="AA";
    }
    else if(not>=70){
        document.getElementById("harfNot").innerHTML="BB";
    }
    else if(not>=50){
        document.getElementById("harfNot").innerHTML="CC";
    }
    else{
        document.getElementById("harfNot").innerHTML="FF";
    }

}




function goster(){
    let gun= document.getElementById("gun").value;

    switch(gun){
            case "1":
            document.getElementById("gunSonuc").innerHTML="Pazartesi";
            break;
             case "2":
            document.getElementById("gunSonuc").innerHTML="Salı";
            break;
             case "3":
            document.getElementById("gunSonuc").innerHTML="Çarşamba";
            break;
             case "4":
            document.getElementById("gunSonuc").innerHTML="Perşembe";
            break;
             case "5":
            document.getElementById("gunSonuc").innerHTML="Cuma";
            break;
             case "6":
            document.getElementById("gunSonuc").innerHTML="Cumartesi";
            break;
             case "7":
            document.getElementById("gunSonuc").innerHTML="Pazar";
            break;
    }
}



function sayiKontrol(){

    let sayi=Number(document.getElementById("sayi").value)

    if(sayi>0){
        document.getElementById("sayiSonuc").innerHTML="Pozitif Sayı";
    }
    else if(sayi<0){
        document.getElementById("sayiSonuc").innerHTML="Negatif Sayı";
    }
    else{
        document.getElementById("sayiSonuc").innerHTML="Sıfır Girdiniz."
    }
}


function stokKontrol(){

    let stok= Number(document.getElementById("stok").value)

    if(stok>0){
        document.getElementById("stokSonuc").innerHTML="ÜRün stokta Mevcuttur";
    }else{
        document.getElementById("stokSonuc").innerHTML="Ürün tükenmiştir."
    }

}


function yorumla(){

    let derece=Number(document.getElementById("derece").value);

    if(derece >=30){
        document.getElementById("havaSonuc").innerHTML="Hava çok sıcak";

    }
    else if(derece >=20){
        document.getElementById("havaSonuc").innerHTML="Hava ılık";
    }
    else if ( derece >=10){
        document.getElementById("havaSonuc").innerHTML="Hava Serin";
    
    }
    else{
        document.getElementById("havaSonuc").innerHTML="Hava Soğuk";
    }
}



function hesapBul(){
    
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    let islem = document.getElementById("islem").value;
    let sonuc;

    switch (islem){
        case "+":
            sonuc=sayi1+sayi2;
            break;
        case "-":
            sonuc=sayi1-sayi2;
            break;
        case "*":
            sonuc=sayi1*sayi2;
            break;
        case "/":
            sonuc=sayi1/sayi2;
            break;
        default:
            sonuc="Geçersiz işlem";
    }

    document.getElementById("hesapSonuc").innerText="Sonuc "+ sonuc;



}


function sifreKontrol(){
let sifre=document.getElementById("sifre").value;

if(sifre.length<6){
    document.getElementById("mesaj").innerText="Şifre çok kısa";
}
else{
     document.getElementById("mesaj").innerText="Şifre kabul edildi";

}




}