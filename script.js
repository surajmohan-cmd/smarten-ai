function openTool(tool){

currentTool = tool;

let title = "";

if(tool === "reply") title = "WhatsApp Reply Generator";
if(tool === "love") title = "Love Message Generator";
if(tool === "apology") title = "Apology Message Generator";
if(tool === "birthday") title = "Birthday Wish Generator";
if(tool === "caption") title = "Instagram Caption Generator";
if(tool === "bio") title = "Bio Generator";
if(tool === "resume") title = "Resume Summary Generator";
if(tool === "leave") title = "Leave Application Generator";

document.getElementById("toolTitle").innerText = title;

document.getElementById("generator").scrollIntoView({behavior:"smooth"});

}
function copyResult(){
let text = document.getElementById("result").innerText;
navigator.clipboard.writeText(text);
alert("Copied!");
}