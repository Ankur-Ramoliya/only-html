let input1 = document.querySelector('.input-element-js-fname');
let input2 = document.querySelector('.input-element-js-lname');
let btn = document.querySelector('.btn-js');

    

function clicTObtn() {

    let fname = input1.value;
    let lname = input2.value;
        
    if (fname === "", lname === "") {
    
        document.querySelector('.para-element-js').innerHTML =  `Your Name: ` + fname + ' ' + lname;
        
        input1.value = "";
        input2.value = "";
        console.log(fname);
        console.log(lname);
    } else {
        document.querySelector(".para-element-js").innerHTML = alert(`Input field is blank`);
    }
        
}; 
