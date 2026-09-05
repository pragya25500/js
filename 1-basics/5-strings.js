
const name="rin"
const repoCount=50

//console.log(name+repoCount+"val");

console.log('hello my name is ${} and my repo count is ${repoCount}');

const gamename=new String('pragya-rin')

console.log(gamename[0]);

//console.log(gamename.__proto__);

//console.log(gamename.length);

//console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const newstring=gamename.substring(0,2)
console.log(newstring);

const anotherstring=gamename.slice(-2,2)
console.log(anotherstring);

const newstr=" pragya  "
console.log(newstr);
console.log(newstr.trim());

const url="http://rin.com/rin%15rin"

console.log(url.replace('%15','-'));

console.log(url.includes('rin'));

console.log(gamename.split('-'));






