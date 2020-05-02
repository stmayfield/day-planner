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

    var numHours = (document.querySelector("#hour").childElementCount) - 1;
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

    let hourBlock = 8
    var now = moment().hour();
    for (let a = 0; a < numHours; a++) {
        if (hourBlock === now) {
            $("#form" + a).addClass("present")
        } else if (hourBlock < now) {
            $("#form" + a).addClass("past")
        } else {
            $("#form" + a).addClass("future")
        }
        hourBlock++;
    }

    // ---

    /*
    var resetLabel = $("<label>");
    var resetInput = $("<input>");
    resetInput.attr({
        type: "checkbox",
        id: "toggle-reset"
    })
    resetLabel.text("Enable Midnight Reset")
    var resetEl = resetLabel.append(resetInput);
    var div2 = $("#save").append($("<div>"))
    div2.attr("id", "div2");
    div2.addClass("Row");
    div2.append(resetEl)

    // ---

        var toggle = 'enable';
        resetEl.click(function () {
            if (toggle === 'disable') {
                toggle = 'enable';
            } else {
                toggle = 'disable';
                if (now == 0) {
                    localStorage.clear();
                }
            }
        });
    */














})