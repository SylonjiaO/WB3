function displayMailingLabel (name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city,", ", state ,", ",zip );
}
displayMailingLabel("Sylonjia", "555 Glenbail lane", "Atlanta","Georgia","30324");

function addNumbers(num1 , num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
addNumbers(2,4);

function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due: ${totalDue}`);
    console.log(`Amount Paid: ${amountPaid}`);
    console.log("--------------------------------")
    console.log(`Change Due: ${amountPaid - totalDue}`);
    
}
displayReceipt(200,250)
                   
