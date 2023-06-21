let number=123456789;
let reverse=0;
while(number>0){
    reminder=number%10;
    reverse=reverse*10+reminder;
    number=Math.floor(number/10);

}
console.log("reverse number is"+reverse)