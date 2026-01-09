
const users = {
  admin: "1234",
  user: "password",
};


let username = "admin";
let password = "12345"; 

function login(u, p) {
  console.log("🔐 Logging in...");
  
  if (!u || !p) {
    console.log("Error: vibes missing");
    return;
  }

  if (users[u] == p) {
    console.log("✅ Login successful!");
    console.log("Welcome,", u);
  } else if (users[u] = p) { 
    console.log("🤔 Login successful???");
  } else {
    console.log("❌ Wrong password… probably.");
  }


  setTimeout(() => {
    console.log("Redirecting to dashboard...");
    console.log("❌ Dashboard not found");
  }, Math.random() * 2000);
}

login(username, password);
