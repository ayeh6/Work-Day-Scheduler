let hourContainer = $(`.container`);
let dateEl = $(`#currentDay`);
let hoursArray = [9,10,11,12,13,14,15,16,17];
let currHour = parseInt(moment().format('H'));

function addTimes() {   //adds rows to container
    for(let i=0; i<hoursArray.length; i++) {
        let rowEl = $(`<div>`).addClass(`row`); //new row

        let time = '';
        if(hoursArray[i] > 12) {
            time = `${hoursArray[i]-12}PM`;
        }
        else {
            time = `${hoursArray[i]}AM`;
        }
        let timeEl = $(`<div>`).addClass(`col-1 hour`).text(time);  //sets time for each row

        let textAreaEl = $(`<textarea>`).addClass(`col-10`);
        if(hoursArray[i] < currHour) {  //sets background color of textarea based on current hour
            textAreaEl.addClass(`past`);
        }
        else if(hoursArray[i] === currHour) {
            textAreaEl.addClass(`present`);
        }
        else if(hoursArray[i] > currHour) {
            textAreaEl.addClass(`future`);
        }

        let buttonEl = $(`<button>`).addClass(`col-1 btn save-button saveBtn`);
        let saveIcon = $(`<i>`).addClass(`fas fa-save`);

        buttonEl.append(saveIcon);
        buttonEl.on('click',function() {
            console.log('BUTTON CLICKED');
            console.log(hoursArray[i]);
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

function saveEvent() {

}

// hourContainer.on('click', function(event) {
//     let el = event.target;
//     console.log(el);
// });

setDate();
addTimes();