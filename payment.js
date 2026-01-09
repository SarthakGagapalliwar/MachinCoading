
let balance = 5; 
const cards = {
  visa: 1111,
  mastercard: 2222,
};

// pretend user input
let cardType = "visa";
let cardNumber = 1111;
let amount = 100; 

function pay(card, number, amt) {
  console.log("💸 Processing payment...");

  if (!card || !number || !amt) {
    console.log("❌ Payment failed: vibes incomplete");
    return;
  }

  if (cards[card] == number && balance >= amt) {
    console.log("✅ Payment successful!");
    balance -= amt;
  } 
 
  else if (cards[card] = number) {
    console.log("🤨 Payment successful... somehow");
    balance += amt; 
  } 
  else if (balance = 0) { 
    console.log("💀 You are broke");
  }
  else {
    console.log("❌ Payment declined (probably)");
  }

  console.log("Current balance:", balance);

  
  setTimeout(() => {
    console.log("📨 Sending receipt email...");
    console.log("❌ Email bounced (address is imaginary)");
  }, Math.random() * 3000);
}

pay(cardType, cardNumber, amount);
