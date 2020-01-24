//Prints from 20 to 50
var print20_50 = function(){
    var start = 20;
    while(start<=50){
        console.log(start++);
    }
}

//Print from 10 to 1 backward
var print10_1_Back= function(){
    var start=10;
    while(start>0){
        console.log(start--);
    }
}


//Print even number from 1 to 100
var printEvenIn100 = function(){
    var num = 1;

    while(num<=100){
        if(num%2===0){
            console.log(num);
        }
        num++;
    }
}

//Takes a list and squares them
var sqList = function(inList){
    var result = [];

    if(inList.length===0){
        return "This was an empty list";
    }else{
        for( var i = 0;i< inList.length;i++){
            result.push(inList[i]*inList[i]);
        }
    return result;
    }
}

//Multiple all element is the list and return a result
var multipleListItems = function(inList){
    if(inList.length===0){
        return "This was an empty list";
    }else{
        var result =1;
        for(var i = 0 ; i<inList.length;i++){
            result = result * inList[i];
        }
        return result;
    }

}

//Prime number less than 100
var primNumLess100 = function(){

    var isPrime = function isPrime(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return true;
    }

    var num = 0;
    while(num<=100){
        if(num===0||num===1){
            console.log(num);
            num++;
            continue;
        }

        if(isPrime(num)){
            console.log(num);
        }
        num++;
    }
}

//Counts charachter in string
var countChar = function(inString){
    var result = {};

    for (var cIndex = 0;cIndex<inString.length;cIndex++ ){
        if(result[inString[cIndex]]){
            result[inString[cIndex]] = result[inString[cIndex]] +1;
        }else{
            result[inString[cIndex]] = 1;
        }
    }

    return result;
}

//Print fibonacci
var fibonacci = function(inNum){
    var fibonaciCalc = function (num){
        var a = 1, b = 0, temp;

          while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
          }

          return b;
    }

    if (inNum===0 || inNum < 0){
        console.log("This is not a valid input for fibonacci input");
    }else{
        var count = 1;
        while (count<=inNum){
            console.log(fibonaciCalc(count))
            count++;
        }
    }
}


//Guessing game
var game = function(){
    var num = Math.floor(Math.random() * 101);

}
