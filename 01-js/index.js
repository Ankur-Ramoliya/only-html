let input1 = document.querySelector('.input-element-js-fname');
let input2 = document.querySelector('.input-element-js-lname');
let btn = document.querySelector('.btn-js');

    

function clicTObtn() {

    let fname = input1.value;
    let lname = input2.value;
        
    if (fname === "" || lname === "") {
        document.querySelector('.para-element-js').innerHTML = "Enter your name";
    } else {
        document.querySelector('.para-element-js').innerHTML =  `Your Name: ` + fname + ' ' + lname;
        
        input1.value = "";
        input2.value = "";
        console.log(fname);
        console.log(lname);
    }

}; 

function loveCalculator() {
    let inputBoy = document.querySelector('.inpute-boy-name-js');
    let inputGirl = document.querySelector('.inpute-girl-name-js');
    let btnCal = document.querySelector('.btn-js-cal');

    btnCal.addEventListener("click", function() {
        let boyName = inputBoy.value.toLowerCase();
        let girlName = inputGirl.value.toLowerCase();
        let loveNumber = Math.floor(Math.random() * 100) + 1;

        if (boyName === "" || girlName === "") {
            document.querySelector('.para-result').innerHTML = "Enter both name";
        } else {
            document.querySelector('.para-result').innerHTML =  `Love between ${boyName} and ${girlName} is ${loveNumber}%`;
        
            inputBoy.value = "";
            inputGirl.value = "";
            console.log(boyName);
            console.log(girlName);
        }

    });
}


