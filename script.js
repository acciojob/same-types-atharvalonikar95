function isSameType(value1, value2) {
  //your js code here
	if(isNaN(parseInt(value1)) && isNaN(parseInt(value2)) ){
		return true
		
	}
	else if(  parseInt(value1) ===  parseInt(value2)){
		return true;
	};
	else{
		return typeof value1 === typeof value2
	}
} ;   

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
