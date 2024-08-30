//opparetions
var n1 = 10;
var n2 = 7;
var n3 = n1 < n2;

console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)

// 1. Template Literals (`...`):
// The backticks (`) indicate a template literal, which is a feature in JavaScript that allows for embedding expressions inside a string.
// Template literals allow for multi-line strings and interpolation of variables or expressions.
// 2. Interpolation (${...}):
// The ${...} syntax inside the template literal is used for string interpolation. It allows you to insert the value of a JavaScript expression directly into the string.
// In this case, ${n1}, ${n2}, and ${n3} are placeholders that will be replaced by the values of the variables n1, n2, and n3 respectively.