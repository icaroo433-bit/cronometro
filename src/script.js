const timerEl =document.getElementById('timer');
const markslist =document.getElementById('marks-list');
let intervalid = 0;
let timer = 0;
let marks = [];

const formattime = (time) => {
const hours = Math.floor(time / 360000);
const minutes = Math.floor((time % 360000) / 6000);
const seconds = Math.floor((time % 6000) / 100);
const hundreths = time % 100;

return  `${hours.toString().padStart(2,  '0')}:${minutes.toString().padStart(2,  '0')}:${seconds.toString().padStart(2,  '0')}:${hundreths.toString().padStart(2,  '0')}`;



}

 
const toggletimer = () =>{

    const button = document.getElementById ('power');
    const action = button.getAttribute('action');

    clearInterval( intervalid);

    if(action === 'start' || action === 'continue') {
        intervalid = setInterval(() => {
            timer += 10;
            settimer(timer)
            
         
        }, 10);

        button.setAttribute('action' , 'pause');
        button.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';

    } else if (action === 'pause') {
        button.setAttribute('action' , 'continue');
        button.innerHTML = '<ion-icon name="play-outline"></ion-icon>';

    }


};

const settimer = (time) => {
    timerEl.innerText = formattime(time);
};


document.getElementById('power').addEventListener('click' , toggletimer);

