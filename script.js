
//gets the current date and time
function currentTime() {
  var today = dayjs().format('MMM DD, YYYY [at] hh:mm');
  document.getElementById("currentDay").innerText = today;
  let t = setTimeout(function () {
  currentTime()
}, 1000);
}
currentTime();


//gets my time slots
var timeSlot = document.getElementById("timeSlots");

var timeBlock = [
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm"
]

generateTimeSlots();
function generateTimeSlots() {
  timeSlot.innerhtml = "";

  for (let i = 0; i < timeBlock.length; i++) {
    var hourRow = timeBlock[i];

    var row = document.createElement('div');
    row.classList.add('row' , 'time-block');
    timeSlot.appendChild(row);

    var hour = document.createElement('div');
    hour.innerHTML = hourRow;
    hour.className= "col-2 col-md-1 hour text-center py-3";
    row.appendChild(hour);

    var textarea = document.createElement('textarea');
    textarea.placeholder = "text";
    textarea.setAttribute('class', 'col-8 col-md-10 description');
    textarea.setAttribute('id', i);
    row.appendChild(textarea);


    var saveBtn = document.createElement('button');
    saveBtn.textContent = 'save';
    saveBtn.className= 'btn saveBtn col-2 col-md-1';
    saveBtn.setAttribute('value' , i);
    row.appendChild(saveBtn);
  }
}

// save button 
$(document).on('click', '.saveBtn' , function(){
  var saveBtnValue = saveBtnValue.val();
  var description = document ('.saveBtnValue').value;
  localStorage.setItem(saveBtnValue, description);
});

//changes the timeslots colors based off of the hour
function coloredTimeslots(){
  var getCurrentTime = dayjs().format('h a');
  var currentTime = dayjs(getCurrentTime, 'h a');
  var description = document.getElementsByClassName('description');

  for( var i = 0; i < description.length; i++){
    var currentTimeBlock = (timeBlock[i], 'h a');

    if(currentTime.isSame(currentTimeBlock) === true){
      description[i].classList.remove('past')
      description[i].classList.add('present')
      description[i].classList.remove('future')
    } else if(currentTime.isBefore(currentTimeBlock) === true){
      description[i].classList.remove('past')
      description[i].classList.remove('present')
      description[i].classList.add('future')
    }else if(currentTime.isBefore(currentTimeBlock) === false){
      description[i].classList.add('past')
      description[i].classList.remove('present')
      description[i].classList.remove('future')

    }
  }
  }
  coloredTimeslots();
  setInterval(coloredTimeslots, 1000);
