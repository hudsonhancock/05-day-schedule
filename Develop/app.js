//MOMENT JS for #currentDay

//TODO: IF past THEN grey, IF present THEN red, IF future THEN green

//TODO: Create function that location input's direct child and finds inner text. Local storage identifier. Each index needs a time and a description.

// TODO: .setItem to save, .getItem('') to insert info IF it exist. Parse and Stringify.

$( document ).ready(function() {

let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');

currentDay = moment().format('dddd');
currentDate = moment().format("MMM Do YY");
currentTime = moment().format('h:mm a');

compTime = Math.floor(moment().format('h'));

$('#currentDay').text(currentDay);
$('#currentDate').text(currentDate);

function getCurrentTime(){
    $('#currentTime').text(currentTime);

}

    var dataArray = [
       {
        hour: '9AM',
        description: ''
    }, {
        hour: '10AM',
        description: ''
    }, {
        hour: '11AM',
        description: ''
    }, {
        hour: '12PM',
        description: ''
    }, {
        hour: '1PM',
        description: ''
    }, {
        hour: '2PM',
        description: ''
    }, {
        hour: '3PM',
        description: ''
    }, {
        hour: '4PM',
        description: ''
    }, {
        hour: '5PM',
        description: ''
    }, 
]

const savedData = JSON.parse(localStorage.getItem('Calendar Data')) || [];

    function loadData(data){
        for(i=0;i<dataArray.length;i++){
            $('main').children().eq(i).children().eq(0).children('input').val(data[i].description);
        }
    }

    function saveContent(){
        
        for(i=0;i<dataArray.length;i++){
            var descriptionText = $('main').children().eq(i).children().eq(0).children('input').val();
            dataArray[i].description = descriptionText;
            console.log(descriptionText);
            localStorage.setItem('Calendar Data', JSON.stringify(dataArray));
        }
        alert('content saved');
    }
    

    setInterval(getCurrentTime, 1000);
    loadData(savedData);
    setColors();
    $('.saveBtn').click(saveContent);
    var blockTime = $('main').children().eq(i).children().eq(1).children('p').text();
    
function setColors(){
    for(i=0;i<dataArray.length;i++){
        var background = $('main').children().eq(i).children().eq(0);
        var hourTime = $('main').children().eq(i).children().eq(0).attr('id');
        console.log(hourTime);

        if(hourTime > nowHour24){
            background.css({"background-color": "green"});
        } else if(hourTime == nowHour24){
            background.css({"background-color": "red"});
        } else{
            background.css({"background-color": "lightgrey"});
        }
    }

}


    
    

    
});
