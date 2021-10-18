let name = prompt("Adınız: ");
let myName = document.querySelector("#myName");
myName.innerHTML = name;

var tarih = new Date();
var gunler = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();
var gun=gunler[tarih.getDay()];
console.log(tarih.getDay());
let myClock = document.querySelector("#myClock");
myClock.innerHTML = `${saat} : ${dakika} : ${saniye} ${gun} `
