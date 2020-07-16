// feetToMile Converter

// 1 mile = 5280 ft.

function feetToMile(feetValue){
        var mile = feetValue / 5280;
        return mile;
        
}


var mileResult = feetToMile(3000);
    mileResult = mileResult.toFixed(2);
console.log('Exact Miles is: ' + mileResult + ' mile!');


var mileResult = feetToMile(80000);
    mileResult = mileResult.toFixed(2);
console.log('Exact Miles is: ' + mileResult + ' mile!');
