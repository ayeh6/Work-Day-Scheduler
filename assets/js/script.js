let hourContainer = $(`.container`);
let dateEl = $(`#currentDay`);
let storageConfirmEl = $(`#localStorageConfirm`);

let hoursArray = [9,10,11,12,13,14,15,16,17];
let currHour = parseInt(moment().format('H'));

function addTimes() {   //adds rows to container
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if(schedule === null) {
        schedule = [];
        for(let i=0; i<hoursArray.length; i++) {
            let event = {hour: hoursArray[i], event: ""};
            schedule.push(event);
        }
    }
    for(let i=0; i<hoursArray.length; i++) {
        let rowEl = $(`<div>`).addClass(`row`); //new row

        let time = '';      //sets time for each row
        if(hoursArray[i] > 12) {
            time = `${hoursArray[i]-12}PM`;
        }
        else {
            time = `${hoursArray[i]}AM`;
        }
        let timeEl = $(`<div>`).addClass(`col-1 hour`).text(time);

        let textAreaEl = $(`<textarea>`).addClass(`col-10`);    //sets background color of textarea based on current hour
        if(hoursArray[i] < currHour) {
            textAreaEl.addClass(`past`);
        }
        else if(hoursArray[i] === currHour) {
            textAreaEl.addClass(`present`);
        }
        else if(hoursArray[i] > currHour) {
            textAreaEl.addClass(`future`);
        }
        if(schedule !== null) {     //if there are locally stored events, set the val
            textAreaEl.val(schedule[i].event);
        }

        let buttonEl = $(`<button>`).addClass(`col-1 btn save-button saveBtn`); //create button
        let saveIcon = $(`<i>`).addClass(`fas fa-save`);
        buttonEl.append(saveIcon);
        buttonEl.on('click',function() {    //button on click will save event to local storage
            saveEvent(i,textAreaEl.val());
        });

        rowEl.append(timeEl);
        rowEl.append(textAreaEl);
        rowEl.append(buttonEl);
        hourContainer.append(rowEl);
    }
}

function setDate() {
    dateEl.text(moment().format('dddd, MMMM do'));  //sets date on screen
}

function saveEvent(hourIndex, details) {
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if(schedule === null) {
        schedule = [];
        for(let i=0; i<hoursArray.length; i++) {
            let event = {hour: hoursArray[i], event: ""};
            schedule.push(event);
        }
    }
    schedule[hourIndex].event = details;
    storageConfirmEl.css({'display': 'block'});
    storageConfirmEl.fadeOut(1200);
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

setDate();
addTimes();