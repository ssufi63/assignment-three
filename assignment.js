// feetToMile Converter

// 1 mile = 5280 ft.
function feetToMile(feetValue){
    var mile = feetValue;
    if(feetValue >= 0){
        var mile = feetValue / 5280;
        mile = mile.toFixed(2);
    }
    else{
        mile = 'Negative Value not acceptable!';
    }
    return mile;
}

// woodCalculator

function woodCalculator(chair, table, bed){
    var totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;
}


// brickCalculator


const tenToTwenty = 150000;
const aboveTwenty = 270000;
var totalBricks = 0;

function brickCalculator(storiedBuilding){
    if(storiedBuilding >=0 && storiedBuilding <=10){
        totalBricks = storiedBuilding * 15000;
    }

    else if(storiedBuilding >10 && storiedBuilding <=20){
        buildingLevel = storiedBuilding - 10;
        bricks1 = buildingLevel * 12000;
        totalBricks = tenToTwenty + bricks1;
    } 
    else if(storiedBuilding > 20){
        buildingLevel = storiedBuilding - 20;
        bricks1 = buildingLevel * 10000;
        totalBricks = aboveTwenty + bricks1;

    }
    else{
        totalBricks = `can't be a negative storied building!`;
    }
    return totalBricks;
}


// tinyFriend

function tinyFriend(names){
    var smallNames = names[0];
    for(var i = 0; i < names.length; i++ ){
        var currentNames = names[i];
        if (currentNames.length < smallNames.length){
            smallNames = currentNames;
        }
    }
    return smallNames;
}
