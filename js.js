

//task1 // 
const bankCompanyBalance = 800;
const phone = 20;
const accessory = 5;
const tax = 2;


var amount = 0;
// общ стоимость покупки телефона
amount = phone + accessory;
console.log( amount );

// кол-во которое может купить компания 

amount = bankCompanyBalance / (phone + accessory);
console.log( amount );

// для налога
function forTax(amount) {
return amount * tax;
}

function forPrice(amount) {
return "$" + amount.toFixed( 2 );
}

// цикл
while (amount < bankCompanyBalance) {
amount = amount + phone;

//аксессуар
if (amount < bankCompanyBalance) {
amount = amount + accessory;
}
}


