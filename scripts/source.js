//create the numbers variables -->
let array = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9]
const elements = {};

for (let i = 0; i < array.length; i++) {
  elements[array[i]] = document.getElementById(array[i]);
}

//declaring function variables -->
const clear = document.getElementById('clear');
const clearAC = document.querySelector(".clear");
const result = document.getElementById('operation');

//operations -->
const plus = document.getElementById('plus');
const subt = document.getElementById('subt');
const mult = document.getElementById('mult');
const divs = document.getElementById('divs');

const negt = document.getElementById('negt');
const perc = document.getElementById('perc');

const cmma = document.getElementById('cmma');
const eqls = document.getElementById('eqls');

//subfunction variables -->
let len = [];
let values = [];
let sign = [];

let getNum = 0;
let temp1Num = 0;
let temp2Num = 0;
let temp2Num$ = 1;
let numericResult = 0;
let cont = 0;

let formattedNumber = '';
let verifyComma = true;
let getComma = '';



//add comma -->
cmma.addEventListener("click", () => {
    if (!getComma.includes(',')) {
        len.splice(0);

        if(getComma.length == 0) {
            getComma += '0'
        }

        getComma += ','
        result.innerHTML = getComma;
        verifyComma = false;
    }
});



//get first num -->
for(let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", () => {
        plus.classList.remove('hovered')
        subt.classList.remove('hovered')
        mult.classList.remove('hovered')
        divs.classList.remove('hovered')

        if (len.length > 9) {
            return;
        }

        //monta o número -->
        clearAC.innerHTML = 'AC';
        len.push(i);
        cont++

        if (len[0] == 0 && !getComma.includes(',') && cont == 1) {
            len.splice(0)
            cont = 0
            return;
        } else {

            if (verifyComma) {
                clearAC.innerHTML = 'C';
                getNum = len.join('');
                formattedNumber = '';
    
                for(let j = 0; j < getNum.length; j++) {
                    if(j > 0 && (getNum.length - j) % 3 === 0) { 
                        formattedNumber += ".";
                    }
                    formattedNumber += getNum.charAt(j);
                }
                getComma = formattedNumber
                result.innerHTML = formattedNumber;
            } else {

                if (formattedNumber.length > 12) {
                    return;
                }
                clearAC.innerHTML = 'C';
                getNum = len.join('');
                formattedNumber = getComma + getNum;
                result.innerHTML = formattedNumber
            }                        
        }
    });
};



//= //= //= //= //= //= //= //= //= //= //= //= //=



//sum function -->
plus.addEventListener("click", () => {
    plus.classList.add('hovered');
    subt.classList.remove('hovered');
    mult.classList.remove('hovered');
    divs.classList.remove('hovered');

    sign.push('+');

    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    temp1Num = formattedNumber;
    temp1Num += temp2Num;
    temp2Num = temp1Num;
    numericResult = temp1Num;

    formattedNumber = numericResult.toLocaleString('pt-br')
    result.innerHTML = formattedNumber;

    len.splice(0);
    verifyComma = true;
});



//subtraction function -->
subt.addEventListener("click", () => {
    plus.classList.remove('hovered');
    subt.classList.add('hovered');
    mult.classList.remove('hovered');
    divs.classList.remove('hovered');

    sign.push('-');

    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    temp1Num = formattedNumber
    numericResult = temp1Num;
    values.push(temp1Num);

    numericResult = values.reduce((total, number) => total - number);
    firstNumber = 0

    formattedNumber = numericResult.toLocaleString('pt-br')
    result.innerHTML = formattedNumber;

    len.splice(0);
    verifyComma = true;
});



//multiply function -->
mult.addEventListener("click", () => {
    plus.classList.remove('hovered');
    subt.classList.remove('hovered');
    mult.classList.add('hovered');
    divs.classList.remove('hovered');

    sign.push('x');

    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    temp1Num = formattedNumber;
    temp1Num *= temp2Num$;
    temp2Num$ = temp1Num;
    numericResult = temp1Num;

    formattedNumber = numericResult.toLocaleString('pt-br')
    result.innerHTML = formattedNumber;

    len.splice(0);
    verifyComma = true;
});



//division function -->
divs.addEventListener("click", () => {
    plus.classList.remove('hovered');
    subt.classList.remove('hovered');
    mult.classList.remove('hovered');
    divs.classList.add('hovered');

    sign.push('d');

    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    temp1Num = formattedNumber
    numericResult = temp1Num;
    values.push(temp1Num);

    numericResult = values.reduce((total, number) => total / number);
    firstNumber = 1

    formattedNumber = numericResult.toLocaleString('pt-br')
    result.innerHTML = formattedNumber;

    len.splice(0);
    verifyComma = true;
});



//= //= //= //= //= //= //= //= //= //= //= //= //=



//get neg/pos -->
negt.addEventListener("click", () => {
    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    formattedNumber = formattedNumber*-1;
    formattedNumber = formattedNumber.toLocaleString('pt-br');
    result.innerHTML = formattedNumber;
    verifyComma = true;
});



//perc function -->
perc.addEventListener("click", () => {
    formattedNumber = formattedNumber.replace(/\./g, "");
    formattedNumber = formattedNumber.replace(",", ".");
    formattedNumber = Number(formattedNumber);

    formattedNumber = formattedNumber/100;
    formattedNumber = formattedNumber.toLocaleString('pt-br');
    result.innerHTML = formattedNumber;
    verifyComma = true;
});



eqls.addEventListener("click", () => {
    if(sign[sign.length - 1] == '+') {
        formattedNumber = formattedNumber.replace(/\./g, "");
        formattedNumber = formattedNumber.replace(",", ".");
        formattedNumber = Number(formattedNumber);

        temp1Num = formattedNumber;
        temp1Num += temp2Num;
        temp2Num = temp1Num;
        numericResult = temp1Num;

        formattedNumber = numericResult.toLocaleString('pt-br')
        result.innerHTML = formattedNumber;
        len.splice(0);
        verifyComma = true;
        temp2Num = 0;
    }
    if(sign[sign.length - 1] == '-') {
        formattedNumber = formattedNumber.replace(/\./g, "");
        formattedNumber = formattedNumber.replace(",", ".");
        formattedNumber = Number(formattedNumber);

        temp1Num = formattedNumber
        numericResult = temp1Num;
        values.push(temp1Num);

        numericResult = values.reduce((total, number) => total - number);
        firstNumber = 0

        formattedNumber = numericResult.toLocaleString('pt-br')
        result.innerHTML = formattedNumber;

        len.splice(0);
        values.splice(0);
        verifyComma = true;
    }
    if(sign[sign.length - 1] == 'x') {
        formattedNumber = formattedNumber.replace(/\./g, "");
        formattedNumber = formattedNumber.replace(",", ".");
        formattedNumber = Number(formattedNumber);

        temp1Num = formattedNumber;
        temp1Num *= temp2Num$;
        temp2Num$ = temp1Num;
        numericResult = temp1Num;

        formattedNumber = numericResult.toLocaleString('pt-br')
        result.innerHTML = formattedNumber;

        len.splice(0);
        verifyComma = true;
        temp2Num$ = 1
    }
    if(sign[sign.length - 1] == 'd') {
        formattedNumber = formattedNumber.replace(/\./g, "");
        formattedNumber = formattedNumber.replace(",", ".");
        formattedNumber = Number(formattedNumber);

        temp1Num = formattedNumber
        numericResult = temp1Num;
        values.push(temp1Num);

        numericResult = values.reduce((total, number) => total / number);
        firstNumber = 1

        formattedNumber = numericResult.toLocaleString('pt-br')
        result.innerHTML = formattedNumber;

        len.splice(0);
        values.splice(0);
        verifyComma = true;
    }
});






//clear -->
clear.addEventListener("click", () => {
    clearAC.innerHTML = 'AC';
    result.innerHTML = '0';
    formattedNumber = '';
    getComma = '';
    verifyComma = true

    len.splice(0);
    values.splice(0);
    sign.splice(0);

    getNum = 0;
    temp1Num = 0;
    temp2Num = 0;
    temp2Num$ = 1;
    numericResult = 0;
    cont = 0;
    
    plus.classList.remove('hovered');
    subt.classList.remove('hovered');
    mult.classList.remove('hovered');
    divs.classList.remove('hovered');
});
