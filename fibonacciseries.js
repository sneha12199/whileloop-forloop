var a=0,b=1,next,i;
var num=10;
for(i=1;i<=num;i++){
    console.log(a);
    next=a+b;
    a=b;
    b=next;
}