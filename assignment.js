// feetToMile Converter

// 1 mile = 5280 ft.

function feetToMile(feetValue){
        var mile = feetValue / 5280;
        mile = mile.toFixed(2);
        return mile;
        
}


var mileResult = feetToMile(3000);
console.log('Exact Miles is: ' + mileResult + ' mile!');


var mileResult = feetToMile(80000);
console.log('Exact Miles is: ' + mileResult + ' mile!');


// woodCalculator

function woodCalculator(chair, table, bed){
    var totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;
}

var sum = woodCalculator(20, 5, 3);
console.log('Total wood need: '+ sum + 'units.');


// brickCalculator

