// Foto Galerie mit wechselnden Bildern
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/havana-kuba.jpg') {
      myImage.setAttribute ('src','images/havana-malecon-kuba.jpg');
    } else {
      myImage.setAttribute ('src','images/havana-kuba.jpg');
    }
}


//Formular absenden Meldung
//var sendForm=document.querySelector('img')
//document.querySelector('html').onclick = function() {
//    alert('Danke für dein Interesse. Ich melde mich bald bei dir!');
//}