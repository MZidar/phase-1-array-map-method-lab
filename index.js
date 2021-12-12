const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let x, j;

function cap(title) {
  for (let i = 0; i < title.length; i++) {
    if (i === 0) {
      j = title[i].toUpperCase(); x = j;} else if (title[i-1] === ' ') {
      j = title[i].toUpperCase(); x = x + j;} else {
      x = x + (title[i]);} } 
  return x;
}
  
  

const titleCased = () => {
   return tutorials.map(cap) 
}
