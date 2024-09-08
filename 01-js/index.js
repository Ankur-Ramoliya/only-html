let input1 = document.querySelector('.input-element-js-fname');
let input2 = document.querySelector('.input-element-js-lname');
let btn = document.querySelector('.btn-js');

btn.addEventListener('click', function(){
    document.querySelector('.para-element-js').innetHTML = input1.value + ' ' + input2.value;
}); 
