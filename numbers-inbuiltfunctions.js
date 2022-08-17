// to convert number to string - .tostring
var num=10;
console.log(typeof(num));
console.log(num.toString);
console.log(typeof(num.toString));

// to precision
var x=9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));

// .tofixed
var x= 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));

// .toexponential
var x=9.656;
x.toExponential();
x.toExponential(2);
console.log(x.toExponential(2));

// parseint()
var str='10';
console.log(typeof(str));
console.log(parseInt(str));
console.log(typeof(parseInt(str)));