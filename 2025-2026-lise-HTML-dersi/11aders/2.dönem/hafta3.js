function ehliyetKontrol(){

    let yas= document.getElementById("yas").value;

    if(yas>=18){
        document.getElementById("ehliyetSonuc").innerHTML="Ehliyet alabilrsin."
    }
}


function kontrol(){
    let not= document.getElementById("not").value;

    if(not>=50){
        document.getElementById("notSonuc").innerHTML="Geçti";

    }else{
        document.getElementById("notSonuc").innerHTML="KAldı";
    }
}



function harfNotuBul(){

    let not =document.getElementById("HarfNotu").value;

    if(not>=85){
        document.getElementById("harfnot").innerHTML="AA";
    }
    else if(not>=70){
        document.getElementById("harfnot").innerHTML="BB";
    }
    else if (not>=50){
        document.getElementById("harfnot").innerHTML="CC";
    }
    else{
        document.getElementById("harfnot").innerHTML="FF";
    }
}


function goster(){
    let secilmisGun=document.getElementById("gun").value;

    switch(secilmisGun){
        case "1":
            document.getElementById("secilenGun").innerHTML="Pazartesi";
            break;
        case "2":
            document.getElementById("secilenGun").innerHTML="Salı";
            break;
        case "3":
            document.getElementById("secilenGun").innerHTML="Çarşamba";
            break;
        case "4":
            document.getElementById("secilenGun").innerHTML="Perşembe";
            break;
        case "5":
            document.getElementById("secilenGun").innerHTML="Cuma";
            break;
        case "6":
            document.getElementById("secilenGun").innerHTML="Cumartesi";
            break;
        case "7":
            document.getElementById("secilenGun").innerHTML="Pazar";
            break;
        default:
            document.getElementById("secilenGun").innerHTML="Geçersiz değer";
        
    }
}



function sayiKontrol(){
    

    let sayi= document.getElementById("sayi").value;

    if(sayi>0){
        document.getElementById("sayiSonuc").innerText="Pozitif Sayı"

    }
    else if(sayi<0){
        document.getElementById("sayiSonuc").innerText="Negatif Sayı"

    }
    else{
        document.getElementById("sayiSonuc").innerText="Sıfır Girdiniz."
    }
}


function stokKontrol(){
    
    let stok= Number(document.getElementById("stok").value);


    if(stok>0){
        document.getElementById("stokSonuc").innerText="Ürün Stokta mevcuttur."
    }
    else{
        document.getElementById("stokSonuc").innerText="Ürün Tükenmiştir."
    }


}




function havaDurumuYorumla(){

    let derece= document.getElementById("derece").value;

    if(derece>=30){
        document.getElementById("havaSonuc").innerText="Hava çok sıcak";

    }
    else if (derece>=20){
        document.getElementById("havaSonuc").innerText="Hava ılık";

    }
    else if (derece>=10){
        document.getElementById("havaSonuc").innerText="Hava serin";
    }
    else{
        document.getElementById("havaSonuc").innerText="Hava çok soğuk";

    }
}

function islemHesapla(){
    let sayi1=Number(document.getElementById("sayi1").value);
    let sayi2=Number(document.getElementById("sayi2").value);
    let islem= document.getElementById("islem").value;
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
            sonuc="Geçersiz bir işlem"

    }
    document.getElementById("hesapSonuc").innerText="Sonuc :"+ sonuc



}