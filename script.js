let marks=45;
marks>=90?console.log("A"):marks>=75 && marks<90?console.log('B'):marks>=50 && marks<75?console.log('C'):console.log('D');
var number=12345;
var temp=0;
var digit=0;
while(number!=0){
    digit=number%10;
    temp=(temp*10)+digit;
    number=Math.floor(number/10);
}
console.log(temp);


var number1=5;
var power=3;
var ans=1;
for(var i=1;i<=power;i++){
    ans*=number1;
}
console.log(ans);


var str="ankush";
var n=str.length;
 answer=true;
for(let i=0;i<n;i++){
    if(str[i]!=str[n-i-1]){
        answer=false
        break;
    }else{
        answer=true;   
    }
}
console.log(answer);

var vowels="ananaya"
var cnt=0;
for(var i=0;i<vowels.length;i++){
    if(vowels[i]=='a' || vowels[i]=='e' || vowels[i]=='i' || vowels[i]=='o' || vowels[i]=='u'){
        cnt++;
    }
}
console.log(cnt);
for(var i=5;i<=50;i+=5){
    console.log(i);
    
}
var even=0;
var odd=0;
let arr=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<10;i++){
    if(i%2==0){
        odd+=arr[i];
    }else{
        even+=arr[i];
    }
}
let result={
    even:even,
    odd:odd
}
console.log(result);

var fizz=10;
var buzz=20;
var fizbuzz=250;
for(var i=fizz;i<=fizz*10;i+=fizz){
    console.log(i);   
}
for(var i=buzz;i<=buzz*10;i+=buzz){
    console.log(i);
}
if(fizbuzz%fizz==0 && fizbuzz%buzz==0)console.log(true);
    else console.log(false);

var arr1=[1,2,2,3,3,3,3]
var one=0;
var two=0;
var three=0;
for(var i=0;i<arr1.length-1;i++){
   if(arr1[i]==1)one++;
   else if(arr1[i]==2)two++;
   else if(arr1[i]==3)three++;
}
console.log(`{"1":${one},"2":${two},"3":${three}}`);
var year=400;
(year%4==0 && (year%100!=0 || year%400==0))?console.log(true):console.log(false);








