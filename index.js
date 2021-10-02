
let progressBar = document.querySelector(".circular")
let valueContainer = document.querySelector('.value-container')
const btnStart = document.getElementById('btnStart')

/* OBJECT WITH ALL INFO ABOUT CIRCULAR PROGREES BAR */
function dataCircleProgressObj(start=0,final=100,speed=15){

    /* FORBIDDING VALUES OF CIRCULAR PROGREES BAR */
    if(start>=final || start<0 || final<0 || speed<=0){
        start=0;
        final=100
        speed=15
    }

    this.startvalue = start
    this.progressValue = this.startvalue
    this.progressEndValue = final,
    this.speed = speed
}

function circleProgressBar (){ 
    /* GET VALUES OF CIRCULAR PROGREES BAR */
    let dataStartValue = Number(document.getElementById('dataStartValue').value)? Number(document.getElementById('dataStartValue').value) : undefined
    let dataFinalValue = Number(document.getElementById('dataFinalValue').value)? Number(document.getElementById('dataFinalValue').value) : undefined
    let dataSpeedValue = Number(document.getElementById('dataSpeed').value)? Number(document.getElementById('dataSpeed').value) : undefined

    /* CREATING AN OBJECT WITH ALL INFO ABOUT CIRCULAR PROGREES BAR */
    let dataCircleProgress = new dataCircleProgressObj(dataStartValue,dataFinalValue,dataSpeedValue);
    
    /* MAIN BEHAVIOR OF CIRCULAR PROGREES BAR */
    let  progress = setInterval(() => {
    dataCircleProgress.progressValue++
    valueContainer.textContent = `${dataCircleProgress.progressValue}%`
    progressBar.style = `background: conic-gradient(
        from ${dataCircleProgress.startvalue * 3.6}deg,
        #4d5bf9 ${dataCircleProgress.progressValue * 3.6}deg,
        #cadcff ${dataCircleProgress.progressValue * 3.6}deg
    )`
    if(dataCircleProgress.progressValue === dataCircleProgress.progressEndValue){
        clearInterval(progress)
    }
    }, dataCircleProgress.speed);
}

hotkeys('enter', function(event, handler){
    // Prevent the default refresh event under WINDOWS system
    event.preventDefault() 
    circleProgressBar();
});
btnStart.addEventListener('click',circleProgressBar)
