// First Assignment

const fizzBuzz = (number)=> {
  let resultArr=[];

  for(let i=1;i<=number;i++){

    if(i%3===0 && i%5=== 0){
      resultArr.push("FizzBuzz");
 }

    else if(i%3===0){
      resultArr.push('Fizz');
    }

    else if(i%5===0){
          resultArr.push("Buzz")    
    }

    else{
          resultArr.push(i.toString());
    }
  }
  console.log(resultArr);
}

fizzBuzz(60);



//Second Assignment

let inputArr=[];
const result={};
const arr = (inputArr) =>{
   inputArr.forEach(element => {
    result[element] = (result[element] || 0) + 1;
   });
}
arr([1,2,'Sushil',1,2,'Sushil','Sushil'])
console.log(result) ; 


