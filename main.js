
var name1 = 'en';
var name2 = 'ka';
var name3 = 'es';
var lang;

if(name1 = 'en'){
  lang = 'en';
}else if(name2 = 'ka'){
   lang = 'ka';
}else{
    lang = 'es';
}

console.log(lang);




var product = [
    parfume = {
        name : 'Name: ' + 'Versace',
        img : 'versace-eros_1.jpg',
        price : ' Old price: ' + '500$',
        newPrice : 'New price: ' + '400$',
        delivery : true,
        sale : true,
        gift : true,
    }
]

document.getElementById('name').innerHTML = parfume.name;
document.getElementById('img').src = parfume.img;
document.getElementById('price').innerHTML = parfume.price;
document.getElementById('newPrice').innerHTML = parfume.newPrice;

if (parfume.delivery === true){
    document.getElementById('Freedelivery').innerHTML = '✓Free Delivery';
}else {
    document.getElementById('Freedelivery').innerHTML = '';
}

if (parfume.sale === true){
    document.getElementById('Sale').innerHTML = '20% Sale';
}else {
    document.getElementById('Sale').innerHTML = '';
}

if (parfume.gift === true){
    document.getElementById('Gift').innerHTML = '+ Gift';
}else {
    document.getElementById('Gift').innerHTML = '';
}


function percentage(num, per)
{
  return (num/100)*per;
}
          
console.log(percentage(500, 20));