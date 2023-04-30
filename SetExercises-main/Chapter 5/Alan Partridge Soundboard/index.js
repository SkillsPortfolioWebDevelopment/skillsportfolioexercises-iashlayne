//Create a string array based on the Mp3 music from the html page <audio> tags
const mp3s = ['Ah-Ha', 'Dan', 'Back of the net', 'Bang out of order', 'Jurassic Park', 'Smell my cheese', 'Goal', 'Kiss my face', 'Hello Partridge']

//Just a temporary variable to hold the count before the forEach loop since we are starting the numbering from 10
var count = 9
//forEach loop to iterate the mp3s string array
mp3s.forEach(mp3 => {
    //create and button element
    const box = document.createElement('button')
    //add a class (class="box")
    box.classList.add('box')
    //create the innerHTML 1st the # of the mp3, then the name of the mp3
    box.innerHTML = String(count += 1) + ' <br><br> <h3>' + mp3 + '</h3> <br><br> '

    //add and event listener "click" to handle the play when clicked
    box.addEventListener('click', () => {
        document.getElementById(mp3).play()


    })

    //create a variable for the mp3 to be used for duration
    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        //edit the previous innerHTML and add the duration
        box.innerHTML = box.innerHTML + String((min.duration).toFixed(2))
    };

    document.getElementById('boxes').appendChild(box)


})







