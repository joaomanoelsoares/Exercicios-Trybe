//Footer Container

document.getElementById("footer-container").style.color = "white";
document.getElementById("footer-container").style.backgroundColor = "green";
document.getElementById("footer-container").style.padding = "50px";


// Header Container

document.getElementById("header-container").style.backgroundColor = "green";
document.getElementById("header-container").style.top = "120px";

// Emergency Tasks class

let selEmerTasks = document.getElementsByClassName("emergency-tasks")

for(i = 0; i < selEmerTasks.length ; i+= 1){
    selEmerTasks[i].style.backgroundColor = "rgb(255, 185, 135)";
}

// No emergency Tasks class

let selNoEmerTasks = document.getElementsByClassName("no-emergency-tasks")
for(i = 0; i < selNoEmerTasks.length ; i+= 1){
    selNoEmerTasks[i].style.backgroundColor = "rgb(255, 193, 79)";
    
}


//H3 - Non emergency tasks - Non Urgent / Important
document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = "black";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.position = "relative";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.height = "30px";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.bottom = "9px";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.right = "10px";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.width = "380px";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.margin = "10px";

//H3 - Non emergency tasks - Non Urgent / Non Important
document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = "black";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.position = "relative";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.height = "30px";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.bottom = "9px";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.right = "10px";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.width = "380px";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.margin = "10px";

//H3 - Emergency tasks - Urgent / Important

document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = "purple";
document.querySelectorAll(".emergency-tasks h3")[0].style.position = "relative";
document.querySelectorAll(".emergency-tasks h3")[0].style.height = "30px";
document.querySelectorAll(".emergency-tasks h3")[0].style.bottom = "9px";
document.querySelectorAll(".emergency-tasks h3")[0].style.right = "10px";
document.querySelectorAll(".emergency-tasks h3")[0].style.width = "380px";
document.querySelectorAll(".emergency-tasks h3")[0].style.margin = "10px";

//H3 - Emergency tasks - Urgent / Non important
let UrgNonImportant = true;

if(UrgNonImportant === true){
document.querySelectorAll(".emergency-tasks h3")[1].style.backgroundColor = "purple";
document.querySelectorAll(".emergency-tasks h3")[1].style.position = "relative";
document.querySelectorAll(".emergency-tasks h3")[1].style.height = "30px";
document.querySelectorAll(".emergency-tasks h3")[1].style.bottom = "9px";
document.querySelectorAll(".emergency-tasks h3")[1].style.right = "10px";
document.querySelectorAll(".emergency-tasks h3")[1].style.width = "380px";
document.querySelectorAll(".emergency-tasks h3")[1].style.margin = "10px";
};
