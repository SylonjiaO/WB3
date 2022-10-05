
 
function parseAndDisplayName(fullName) {
    let pos = fullName.indexOf(" ");
    let first = fullName.substring(0, pos);
    let last = fullName.substring(pos + 1);

let entireLayout = (`Full Name: ${fullName}
First Name:${first} 
Last Name: ${last}`);

return entireLayout;
 }
console.log(parseAndDisplayName("Brenda Kaye"));
console.log("--------------------------------");
console.log (parseAndDisplayName("Ian Auston"));
console.log("--------------------------------");
console.log(parseAndDisplayName("Siddalee Grace"));

