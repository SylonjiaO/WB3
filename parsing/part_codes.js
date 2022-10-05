
function getSupplier(code){
// that returns all characters before the :

for (var i = 0; i < code.length; i++) {
    var c = code.charAt(i);
    if (c == ":") {
        continue;
    }
} 

return code.substring(0, i);
}
console.log(getSupplier("ACME:123-L"));
console.log("--------------------------------");
console.log(getSupplier("DI:12345-M"));
console.log("--------------------------------");
console.log(getSupplier("ACE:1-12"));
//function getProductNumber(code){
// that returns all characters between the : and -
//}
//function getSize(code){
    // that returns all characters after the -
//}
//ACME:123-L the large (L) part 123 is supplied by ACME
//DI:12345-M the medium (M) part 12345 is supplied by DI
//ACE:1-12   the size 12 part 1 is supplied by ACE
