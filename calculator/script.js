var input=document.getElementById('input');
var expression='';


function btn(num){
    expression+=num;
    input.value=expression;
}

function equals(){
    input.value=eval(expression);
    expression='';
}

function clearvalue(){
    expression='';
    input.value=expression;
}
