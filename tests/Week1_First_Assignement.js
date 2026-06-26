const browser = "Chrome";

function getbroweser() {
    if (browser === "Chrome") {
        let browser = "Edge";
        console.log(browser)
    }

    console.log(browser);
}

getbroweser();

//global variable
let genderType="female"

function printGender(){
    let colur = "brown"
        if(genderType === "female"){
            var age=30
            let colur = "pink"
            console.log(colur)
        }
         console.log(age)
    }

printGender()
console.log(genderType)

genderType = "Male"
printGender()
console.log(genderType)