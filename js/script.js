
function akanGenerator (){
    let date = document.getElementById("date").value;

    let gender = document.getElementById("gender").value;

    let dayValue = new Date(date).getDay()

    let namesOfFemales = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
    let namesOfMales = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
    
    let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];

    if(date==""||gender==""){
        alert("Error! Invalid date and gender" )
    }
    else if(gender=="female"){
        alert("You were born on" +  daysOfWeek [dayValue] + "," + "your Akan name is" + ","+ namesOfFemales [dayValue])
        date.value=""; gender.value="";
    }
    else{
        alert("You were born on" + daysOfWeek [dayValue] + "," + "your Akan name is" +"" + namesOfMales [dayValue])
        date.value=""; gender.value="";
    } 
 
}

