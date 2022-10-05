function parseAndDisplayName(fullName) {
    let pos = fullName.lastIndexOf(" ");
    let first = fullName.substring(0, pos);
    let last = fullName.substring(pos + 1);
    
    if (pos === -1){
        let layout = (`Full Name: ${fullName}
Only Name: ${fullName}`);
        return layout;
    }
    else if (pos > 6){
        let pos2 = fullName.indexOf(" ");
        let first  = fullName.substring(0, pos2);
        let middleName = fullName.substring(pos2 + 1 , pos);
        

       let  thriceLayout = 
       (`Full Name: ${fullName}
First Name:${first}
Middle Name:${middleName}
Last Name:${last}`);
    
        return thriceLayout;
    }

let duxLayout = (`Full Name: ${fullName}
First Name:${first} 
Last Name: ${last}`);

return duxLayout;
 }

console.log(parseAndDisplayName("Cher"));
console.log("--------------------------------");
console.log(parseAndDisplayName("Brenda Kaye"));
console.log("--------------------------------");
console.log(parseAndDisplayName("Dana Lynn Wyatt"));