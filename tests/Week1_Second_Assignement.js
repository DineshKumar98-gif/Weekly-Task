 //Strings in JS 
   function username(role){
  let reverstring =""
 for(let i=role.length; i>=0; i--){
    reverstring += role.charAt(i)
 }
 return reverstring
}

function isPalindrome(roles){
    if(username(roles) === roles){
        console.log("This is Palindrome")
    }
    else{
        console.log("This is not a Palindrome")
    }
}

let name = "madam"
isPalindrome(name)


//To find the Positive, Negative and Zero
function tochecknumber(num){
if(num>0){
    console.log("This is Positive Number")
}else if(num<0){
    console.log("This is a Negative Number")
}else{
    console.log("This number is a zero")
}
}

tochecknumber(56)
tochecknumber(-56)
tochecknumber(0)

//To identify the browser launch
function launchBrowser(browser){
    if(browser === "Edge"){
        console.log("Launched browser is Edge")
    }else if(browser === "Chrome") {
        console.log("Launched browser is Chrome")
    } else{
        console.log("Launched some other browser")
    }
}
launchBrowser("Chrome")


//To Identify the test type
function runTest(testtype){
    switch(testtype){
    case "Smoke":
        console.log("Smoke Testing is in Progress")
        break;
    case "Sanity":
        console.log("Sanity Testing is in Progress")
        break;
    case "Regression":
        console.log("Sanity Testing is in Progress")
        break;
    default:
        console.log("No Testing is running")
        break;

}}
runTest("Sanity")

//To identify the Students Grade 
function studentlist(grade){
    switch(true){
        case(grade >= 80):
        console.log("A")
        break;
        case(grade >= 70):
        console.log("B")
        break;
        case(grade >= 60):
        console.log("C")
        break;
        case(grade >= 50):
        console.log("D")
        break;
        default:
        console.log("No grade")
    }
}
studentlist(69)


//Find Odd Number 
function printOddnumbers(){
    for(var i=1 ; i<=25; i++){
        if(i%2 !== 0){
         console.log(`${i} is an Odd Number`);
        }
        }
    }
printOddnumbers()