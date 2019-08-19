//Daniel Kenny 19/08/19
//Example of how to reverse numbers in JS


function reverseInt1(int){
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int); //Math.sign used to maintain any negative input
}



console.log(reverseInt1(-1234))