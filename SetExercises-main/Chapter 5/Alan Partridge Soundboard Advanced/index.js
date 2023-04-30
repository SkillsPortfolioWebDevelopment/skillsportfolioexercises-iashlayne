

const mp3sPage1 = ['10 Past 5', 'Aboot 1', 'Aboot', 'Afraid so', 'Ah come on', 'Aye', 'Best Friends', 'Bollocks', 'Bugger']


var count = 0
mp3sPage1.forEach(mp3 => {
    const box = document.createElement('button')
    box.classList.add('box')

    box.innerHTML = String(count += 1) + ' <br> <h3>' + mp3 + '</h3> <br> '

    box.addEventListener('click', () => {
        document.getElementById(mp3).play()

    })

    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        box.innerHTML = box.innerHTML + String(min.duration)
    };

    document.getElementById('boxesContainer1').appendChild(box)

})



const mp3sPage2 = ['Ah-Ha', 'Dan', 'Back of the net', 'Bang out of order', 'Jurassic Park', 'Smell my cheese', 'Goal', 'Kiss my face', 'Hello Partridge']

var count = 9
mp3sPage2.forEach(mp3 => {
    const box = document.createElement('button')
    box.classList.add('box')

    box.innerHTML = String(count += 1) + ' <br> <h3>' + mp3 + '</h3> <br> '

    box.addEventListener('click', () => {
        document.getElementById(mp3).play()

    })

    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        box.innerHTML = box.innerHTML + String(min.duration)
    };


    document.getElementById('boxesContainer2').appendChild(box)

})

const mp3sPage3 = ['Cash Back', 'ConMan', 'Do you like Owls', 'First Class 1', 'First Class', 'Forget it', 'Get rid of it 1', 'Get rid of it', 'Hello']


var count = 18
mp3sPage3.forEach(mp3 => {
    const box = document.createElement('button')
    box.classList.add('box')

    box.innerHTML = String(count += 1) + ' <br> <h3>' + mp3 + '</h3> <br> '

    box.addEventListener('click', () => {
        document.getElementById(mp3).play()

    })

    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        box.innerHTML = box.innerHTML + String(min.duration)
    };


    document.getElementById('boxesContainer3').appendChild(box)

})

const mp3sPage4 = ['How old are you', 'Id Love To', 'Idiot', 'Mentalist', 'Nirvana', 'No', 'Ok', 'Striker', 'Third Time']


var count = 27
mp3sPage4.forEach(mp3 => {
    const box = document.createElement('button')
    box.classList.add('box')

    box.innerHTML = String(count += 1) + ' <br> <h3>' + mp3 + '</h3> <br> '

    box.addEventListener('click', () => {
        document.getElementById(mp3).play()

    })

    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        box.innerHTML = box.innerHTML + String(min.duration)
    };


    document.getElementById('boxesContainer4').appendChild(box)

})

const mp3sPage5 = ['Tough One', 'Um', 'What', 'Why', 'Yeah so do I']

var count = 36
mp3sPage5.forEach(mp3 => {
    const box = document.createElement('button')
    box.classList.add('box')

    box.innerHTML = String(count += 1) + ' <br> <h3>' + mp3 + '</h3> <br> '

    box.addEventListener('click', () => {
        document.getElementById(mp3).play()

    })

    var min = document.getElementById(mp3);
    min.onloadedmetadata = function () {
        box.innerHTML = box.innerHTML + String(min.duration)
    };


    document.getElementById('boxesContainer5').appendChild(box)

})





let sliderPanel = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    currentPage = 0;

// Clear all panels
function reset() {
    for (let i = 0; i < sliderPanel.length; i++) {
        sliderPanel[i].style.display = "none";
    }


}

// Init Panel
function startPanel() {
    reset();
    sliderPanel[0].style.display = "block";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "block";

}

// Show prev
function panelLeft() {
    reset();
    sliderPanel[currentPage - 1].style.display = "block";
    currentPage--;
    if (currentPage < sliderPanel.length - 1 && currentPage != 0) {
        //  block of code is executed if the condition is true
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
    } else if (currentPage === 0) {
        arrowLeft.style.display = "none";
        arrowRight.style.display = "block";
    }

}

// Show next
function panelRight() {
    reset();
    sliderPanel[currentPage + 1].style.display = "block";
    currentPage++;
    if (currentPage > 0 && currentPage < sliderPanel.length - 1) {
        //  block of code is executed if the condition is true
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
    } else {
        //  block of code to be executed if the first condition is false 
        arrowLeft.style.display = "block";
        arrowRight.style.display = "none";
    }

}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (currentPage === 0) {
        currentPage = sliderPanel.length;
    }
    panelLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (currentPage === sliderPanel.length - 1) {
        currentPage = -1;
    }
    panelRight();
});

startPanel();

var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.inputTextSpeech');
var voiceSelect = document.querySelector('select');


//you can use the below block of codes to add pitch and rate

/*var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');*/



var voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    for (i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function (event) {
    event.preventDefault();

    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    //utterThis.pitch = pitch.value;
    //utterThis.rate = rate.value;
    synth.speak(utterThis);

    inputTxt.blur();
}