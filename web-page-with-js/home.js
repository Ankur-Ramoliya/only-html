// document.getElementsByClassName("btn-element-js")[0].addEventListener("click", function(){
//     document.getElementsByClassName("para-element-js")[0].innerHTML = document.getElementsByClassName("input-element-js")[0].value
// })

// document.getElementsByClassName("btn-element-js")[0].addEventListener("click", function(){
//     document.getElementsByClassName("para-element-js")[0].innerHTML = document.getElementsByClassName("input-element-1-js")[0].value =+ document.getElementsByClassName("input-element-js")[0].value
// });

let input1 = document.getElementsByClassName("input-element-js")[0];
let input2 = document.getElementsByClassName("input-element-1-js")[0];
let btn = document.getElementsByClassName("btn-element-js")[0];
let para = document.getElementsByClassName("para-element-js")[0];
    
    btn.addEventListener("click", function(){
        
        if ( Number.isInteger(Number(input1.value)) && Number.isInteger(Number(input2.value)) ) {
            const total = Number(input1.value) + Number(input2.value);
            document.getElementsByClassName("para-element-js")[0].innerHTML = `total = ${total}`;
            console.log(total);
        }  else {
            document.getElementsByClassName("para-element-js")[0].innerHTML = "Please enter a number";
        }
    });

    
