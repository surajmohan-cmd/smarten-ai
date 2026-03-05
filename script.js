
let currentTool = "";

function openTool(tool){
currentTool = tool;
document.getElementById("generator").scrollIntoView({behavior:"smooth"});
}

function generate(){

let input = document.getElementById("userInput").value;

let output = "";

if(currentTool === "love"){
output = "Every moment with you feels magical. I’m grateful to have you in my life.";
}

else if(currentTool === "apology"){
output = "I truly apologize for what happened. It was never my intention to hurt you.";
}

else if(currentTool === "birthday"){
output = "Wishing you a wonderful birthday filled with happiness, love, and success!";
}

else if(currentTool === "caption"){
output = "Living this moment and loving every second of it.";
}

else if(currentTool === "bio"){
output = "Dream big | Work hard | Stay humble.";
}

else if(currentTool === "resume"){
output = "Motivated and detail‑oriented professional with strong communication and problem-solving skills.";
}

else if(currentTool === "leave"){
output = "Dear Sir/Madam, I kindly request leave due to personal reasons. Thank you for your understanding.";
}

else if(currentTool === "reply"){
output = "Sorry for the delay in replying. I was a bit busy but I'm here now.";
}

else{
output = "Your AI result will appear here.";
}

document.getElementById("result").innerText = output + "\n\nGenerated using SmarTen AI";
}
