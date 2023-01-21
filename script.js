function convert(){
	let num=document.getElementById("roman").value;

        let normal=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
        let roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
        let res="";
        for(let i=0;i<13;i++){
            while(num>=normal[i]){
                res=res+roman[i];
                num=num-normal[i];
            }
        }
	let romanRes=document.getElementById("letter");
	romanRes.innerHTML=res;
	
	// convertToRoman(num);
}

function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

//   //your code here

// }
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
}