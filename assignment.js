// https://github.com/Owahed/Assignment-js


// kilometerToMeter

function kilometerToMeter(num){
    if(num >= 0){
     var convert = num * 1000;
    }
     return convert;
 }
 var num = 33;
 var result = kilometerToMeter(num);
 console.log(result);
 
//  budgetCalculator

 function budgetCalculator(clock,mobile,laptop){
    if(clock>=0 && mobile>=0 && laptop>=0){
    var convert1 = clock * 50 ;
    var convert2 = mobile * 100 ;
    var convert3 = laptop * 500 ;

    var convert = (convert1 + convert2 + convert3);
    }
    

    return convert;
}
var clock = 40;
var mobile = 20;
var laptop = 4;


var result = budgetCalculator(clock,mobile,laptop);
console.log(result);

// hotelCost

function hotelCost(num){
    if(num >= 0 && num <= 10){
        var cost1 = num * 100;
        var result =  cost1;
    }
     if (num>10 && num <=20){

         num = num - 10;
        var cost2 = (num * 80) + 1000;
        var result =  cost2;
    }
     else if (num >= 21){
         num = num - 20;
        var cost3 = (num * 50) + 1800;
        var result =  cost3;
    }
 
  
   
    return result;
}

var num = 112;
var allCost =hotelCost(num);
console.log(allCost);

// megaFriend


function megaFriend(friendName){
    for(var i = 0; i < friendName.length; i++){
        var element = friendName[i];
        if(element.length > max.length){
            max = element;
         } 
    }
    return max;
}

var friendName = ["Karim", "Rumman", "Roky", "Nahidul","sajedul","Mahmudul","Owahed","Rakib","bijoy","Adi"];

    var max = friendName[0];
    var bigName = megaFriend(friendName);

console.log(bigName);