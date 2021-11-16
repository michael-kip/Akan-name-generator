let namesOfFemales = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
let namesOfMales = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];

function akanGenerator (event){
    event.preventDefault()
    let date = document.getElementById("date").value;

    let gender = document.getElementById("gender").value;

    let dayValue = new Date(date).getDay()