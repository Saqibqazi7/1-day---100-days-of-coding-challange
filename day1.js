///let Name = "Saqib";
//console.log('Hello', Name, 'would you like to learn some typescript today?'); 
var Name = "Saqib";
console.log("lowercase:", Name.toLowerCase());
console.log("uppercase:", Name.toUpperCase());
console.log("Titlecase:", Name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
