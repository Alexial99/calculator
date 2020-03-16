"use strict";
function sayNyan(){
	alert("nyan");
}


let obj = { 
numOne : "" ,
sign : "" ,
numTwo : "" ,
memory :""
}; 


function operations(id){
	if (obj.sign === "" ){
		let signId = id.getAttribute('value');
		obj.sign = signId;
		document.getElementById("vvod").innerHTML = obj.sign;
		obj.numTwo = obj.numOne;
		obj.numOne = "";
		if (obj.sign == "%"){
			obj.sign = "/ 100 *" ;
			document.getElementById('vivod').innerHTML = Number(obj.numTwo) / 100;
		}
	}
	else {
		let signId = id.getAttribute('value');
		obj.sign = signId;
		document.getElementById("vvod").innerHTML = obj.sign;
		
	}
}

function number(id){ 
	let valueId = id.getAttribute('value'); 
	if(obj.numOne.length<16){	
		if((obj.numOne.substring(0,1) == 0)&&(obj.numOne.substring(1,2) != '.')&&(Number(valueId) > 0)){
			obj.numOne = valueId; 
			document.getElementById("vvod").innerHTML = obj.numOne;
		}
		else{
			obj.numOne = obj.numOne + valueId;  
			document.getElementById("vvod").innerHTML = obj.numOne;
			}
			
	}
		else{
			obj.numOne = obj.numOne.substring(0,15) + valueId;
			document.getElementById("vvod").innerHTML = obj.numOne;
			
		}
	
}
function zero(){
 
	let arrNum=[]; 
	arrNum = obj.numOne.split('');
	
	
	if (obj.numOne == ""|| arrNum[0] > 0 || ((arrNum[0]== '0') && (arrNum [1]== '.'))){
		obj.numOne = obj.numOne + 0;  
		document.getElementById("vvod").innerHTML = obj.numOne;
	}
	
	else { 
		document.getElementById("vvod").innerHTML = obj.numOne;
	}
		
}
function clearOne(){
	
	let arrNum=[];
	arrNum = obj.numOne.split('');
	
	let delite= arrNum.pop();
	obj.numOne = arrNum.join('');
	document.getElementById("vvod").innerHTML = obj.numOne;

}
function clearAll(){
	obj.numOne = '';
	obj.sign = '';
	obj.numTwo = '';
	document.getElementById("vvod").innerHTML ="ввод:";
	document.getElementById("vivod").innerHTML ="вывод:";
}

function inverse(){
	
	let arrNum=[];
	arrNum = obj.numOne.split('');
	
	if (arrNum [0] =='-'){
		let delite= arrNum.shift();
		obj.numOne = arrNum.join('');
	}
	else {
		obj.numOne= '-' + obj.numOne;
	}

document.getElementById("vvod").innerHTML = obj.numOne;

}

function fraction(){
	let otvet = 1/obj.numOne;
	document.getElementById("vvod").innerHTML = "1" + "/" + obj.numOne;
	document.getElementById("vivod").innerHTML = otvet;
	obj.numOne = "";
}

function sqrt(){
	if ( obj.numOne.substring(0, 1) != "-"){ 
		let otvet = Math.sqrt(obj.numOne);
		document.getElementById("vvod").innerHTML = obj.numOne +"^1/2";
		document.getElementById("vivod").innerHTML = otvet;
		obj.numOne = "";
	} 
	else{ 
		alert("Введены неверные данные"); 
		obj.numOne = "";
	}
		
}

function calcAnswer(){

	if (obj.numOne == ""){
		document.getElementById("vvod").innerHTML ="ввод:";
		document.getElementById("vivod").innerHTML ="вывод:";
	
	}
	else if(obj.sign == "^"){
		let otvet = Math.pow(obj.numTwo,obj.numOne);
		document.getElementById("vvod").innerHTML = obj.numTwo +  obj.sign + obj.numOne;
		document.getElementById("vivod").innerHTML = otvet;
		
	}
	else if (obj.sign == "/ 100 *" ){
		document.getElementById("vvod").innerHTML = obj.numTwo + "<br>"+ "%" +"<br>"+  obj.numOne;
		document.getElementById("vivod").innerHTML =  window.eval(obj.numTwo + obj.sign + obj.numOne);
	}
	
	else {
		let otvet = obj.numTwo + obj.sign + obj.numOne;
		document.getElementById("vvod").innerHTML = obj.numTwo +"<br>"+ obj.sign + "<br>"+ obj.numOne;
		document.getElementById("vivod").innerHTML =  window.eval(otvet);
	}
	obj.numTwo = "";
	obj.sign = "";
	obj.numOne = "";
}

function mPlus(){
	obj.memory= Number(obj.memory) + Number(obj.numOne);
	obj.numOne = '';
	
}
function mMinus(){
	obj.memory= Number(obj.memory) - Number(obj.numOne);
	obj.numOne = '';
	
	}
function mSave(){
	
	obj.memory = obj.numOne;
	obj.numOne = '';
	
}
function mRemember(){
	obj.numOne = obj.memory;
	document.getElementById("vvod").innerHTML = obj.numOne ;
	document.getElementById("vivod").innerHTML = 'vivod';
}
function mClear(){
	obj.memory = "" ;
}
