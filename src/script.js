const timerEl =document.getElementById('timer');
const markslist =document.getElementById('marks-list');
let intervalid = 0;
let timer = 0;
let marks = [];

const formattime = (time) => {
const hours = Math.floor(time / 3600000);
const minutes = Math.floor((time % 3600000) / 60000);
const seconds = Math.floor((time % 60000) / 1000);
const hundreths = Math.floor((time % 1000) / 10);

return  `${hours.toString().padStart(2,  '0')}:${minutes.toString().padStart(2,  '0')}:${seconds.toString().padStart(2,  '0')}:${hundreths.toString().padStart(2,  '0')}`;



}

const addmarktolist = (markindex, marktime) => {
    const p = document.createElement('p');
    p.textContent = `Marca ${markindex}: ${formattime(marktime)}`;
    markslist.appendChild(p);
};


const marktime = () => {
    marks.push(timer);
    addmarktolist(marks.length ,marks[marks.length - 1]);

}
 
const toggletimer = () =>{

    const button = document.getElementById ('power');
    const action = button.getAttribute('action');


    if(action === 'start' || action === 'continue') {
        intervalid = setInterval(() => {
            timer += 10;
            settimer(timer)
            
         
        }, 10);

        button.setAttribute('action' , 'pause');
        button.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';

    } else if (action === 'pause') {
        clearInterval(intervalid);
        button.setAttribute('action' , 'continue');
        button.innerHTML = '<ion-icon name="play-outline"></ion-icon>';

    }


};

const settimer = (time) => {
    timerEl.innerText = formattime(time);
};


document.getElementById('power').addEventListener('click' , toggletimer);
document.getElementById('mark').addEventListener('click' , marktime);

 
