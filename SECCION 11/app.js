const ceviche = ['Pescado','Mariscos','Cebolla'];
ceviche.splice(1,0,'liomn');
console.log(ceviche);

ceviche.forEach(function(){
    console.log('Test');
});