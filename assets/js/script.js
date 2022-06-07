let hourContainer = $(`.container`);

let hoursArray = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

function addTimes() {
    for(let i=0; i<hoursArray.length; i++) {
        let rowEl = $(`<div>`).addClass(`row`);
        let timeEl = $(`<div>`).addClass(`col-1 hour`).text(hoursArray[i]);
        let textAreaEl = $(`<textarea>`).addClass(`col-10`);
        let buttonEl = $(`<button>`).addClass(`col-1 btn save-button saveBtn`);
        let saveIcon = $(`<i>`).addClass(`fas fa-save`);
        buttonEl.append(saveIcon);
        rowEl.append(timeEl);
        rowEl.append(textAreaEl);
        rowEl.append(buttonEl);
        hourContainer.append(rowEl);
    }
}

hourContainer.on('click', function(event) {
    let el = event.element;
    let parEl = el.closest('div');
    console.log(parEl);
});

addTimes();