let exerciseOneArr = [1, 2, 3,4, 5, 6,9]
var x=0
const getNonCensecutiveNumber = (exerciseOneArr,x) => {
    for ( a of exerciseOneArr){
        if(a + 1 === exerciseOneArr[1+x]) {
            x++;
        }else{
            console.log(a);
            x++;
            break;
        }
    };
};
getNonCensecutiveNumber(exerciseOneArr,0);
let exerciseOneArr2 = [2,3,4,5,7]
let bb = 1
console.log(exerciseOneArr2.findIndex(x => x + 1 !== exerciseOneArr2[bb++]))

Input= [10, 12, -9, 3, -1, 0, 15] ;
Input2= [3, 5, 7, 9, -10, 2, -22, -1];
const loopPostitive = (Input) => {
let awnser = Input.filter(x => x > 0).reduce((x,y) => x +y);
console.log(awnser)
};
loopPostitive(Input);
console.log(Input2.filter(x => x > 0).reduce((x,y) => x +y));