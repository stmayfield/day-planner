$(document).ready(function () {


    function update() {
        datetime.html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };
    // ---
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
    // ---
    for (let i = 8; i < 18; i++) {
        var hour = moment().hour(i).format('hh:00 a');
        newPar = $("<p>");
        newPar.text(hour).addClass("hours" + i);
        $("#hour").append(newPar);
    }
    //---

    var numHours = document.querySelector("#hour").childElementCount;
    for (let i = 0; i < numHours; i++) {
        var breakLine = $("<br>");
        var userText = $("<input>");
        userText.attr({
            class: 'textarea',
            type: 'text',
            id: 'form' + i
        });
        $("#event").append(breakLine);
        $("#event").append(userText);
        saveData(JSON.stringify(i));
        var hourBlock = i + 8;
        console.log(hourBlock);
    };
    //---

    for (let i = 0; i < numHours; i++) {
        var button = $("<br><button>")
        button.attr({
            class: "saveBtn",
            id: "save" + i
        });
        button.text("Save");
        $("#save").append(button);
        saveData(JSON.stringify(i));

    }

    //---


    function saveData(line) {
        $("#save" + line + ".saveBtn").click(function () {
            var namePerson = $("#form" + line).val();
            localStorage.setItem('name' + line, JSON.stringify(namePerson));
        });
        var retrieveName = localStorage.getItem("name" + line);
        $("#form" + line).val(JSON.parse(retrieveName));
    }


    //---

    //assign time to id = i; if certain time, 


    /*
    .past = gray
    .present = red
    .future = green
    */


    var hour = 21
    var now = moment().hour();

    console.log(hour);
    console.log(now);

    /*
        var currentTime = moment()
        var eightTime = JSON.parse(moment("8", "hh")._i);
        if (17 < currentTime) {
            $("#form1").css("background-color", "red")
        }
    
    */


    console.log(hour === now);







})