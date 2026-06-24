/*function browser(data){
    
    if(data ==="Chrome"){
        return console.log("Chrome is Lanuched")
    }else{
        return console.log("Other Browser")
    }
}

browser("Google")*/

/*function getBrowser(browser){
    switch (browser){
        case "Chrome":
        console.log("Chrome is the browser")
        break

         case "eDGE":
        console.log("Edge is the browser")
        break

        default:
            console.log("No Browser")
        break;
    }
}*/

//getBrowser("Chromes")


function checkNumber(num) {
 
    if (num > 0) {
        result = "Positive Number";
    } else if (num < 0) {
        result = "Negative Number";
    } else {
        result = "Zero";
    }
 
    return result;
}


console.log(checkNumber(10));   // Positive Number
console.log(checkNumber(-5));   // Negative Number
console.log(checkNumber(0));    // Zero

