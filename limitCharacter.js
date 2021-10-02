let dataCircular = document.getElementById("dataCircular")

function limitCharacter(e,limit=3){
    let selectElem = e.target
    let valueElem = selectElem.value.length
    let dataset = selectElem.dataset.circle

    if((valueElem>(limit-1)) && (dataset==='start' || dataset==='final' || dataset === 'speed')){
        e.preventDefault()
    }
}
dataCircular.addEventListener("keypress",limitCharacter)