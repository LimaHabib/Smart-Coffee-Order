//part 1: login
function showPrompt(){
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

let role ="";
let securitylevel ="";

if((username ==="admin" || username ==="user") && password ==="1234"){
    role = username;
    securitylevel = (username === "admin") ? "high" : "low"
}
else{
    alert(`Invalid username or password. Access denied.`);
    throw new Error("Login Falled");
}
//part 2: Calculator
let CustomerName = prompt("What's your name? ");
let CustomerAge = parseInt(prompt("How old are you?"));
let CustomerCoffee = prompt("What type of coffee do you want? (espresso, latte, cappuccino");
let quantity = parseInt(prompt("How many cups would you like?"));
let pricePerCup = 0;
switch(CustomerCoffee){
    case "espresso":
        pricePerCup = 2.5;
        break;
    case "latte":
        pricePerCup = 3.5;
        break;
    case "cappuccino":
        pricePerCup = 4.0;
        break;
    default:
        alert(`Invalid coffee type`);
        throw new Error("Invalid coffee typy");           
}

let orginalTotal = pricePerCup * quantity;
let discount = 0;
if(CustomerAge < 18 || CustomerAge > 60){
    discount = orginalTotal * 0.10;
}
let finalTotal = orginalTotal - discount;

//part 3: Bill Splitter with tip
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("How tip percentage? (0, 5, 10, or 15)"));

let tipAmount = (tipPercent/100) * finalTotal;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / splitCount;

//Output
alert(`Hello ${CustomerName} !
    You ordered ${quantity} cups of ${CustomerCoffee}
    Original total: $${orginalTotal.toFixed(2)}
    Discount: $${discount.toFixed(2)}
    Tip: $${tipAmount.toFixed(2)}
    Total with Tip: $${totalWithTip.toFixed(2)}
    Split between ${splitCount} people: $${amountPerPerson.toFixed(2)} each
    `)
};
