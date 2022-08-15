
//planed button selected
const moonBtn = document.getElementById("moon");
const marsBtn = document.getElementById("mars");
const europaBtn = document.getElementById("europa");
const titanBtn = document.getElementById("titan");
//planed information selected
let planedName = document.querySelector('.planed-name');
let planedImage = document.getElementById('planed-image');
let planedInformation = document.querySelector('.planed-information');
let planedDistance = document.querySelector('.distance');
let planedTravelTime = document.getElementById('time');

//moon button function call
moonBtn.addEventListener('click',getData);
//mars button function call
marsBtn.addEventListener('click', getData);

europaBtn.addEventListener('click', getData);

titanBtn.addEventListener('click', getData);

//fetch call function
function getData(e){
    fetch("data.json")
    .then((res) => res.json())
    .then((data)=>{
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case "MOON":
                planedName.textContent = data.destinations[0].name;
                planedImage.src = data.destinations[0].images;
                planedInformation.textContent = data.destinations[0].description;
                planedDistance.textContent = data.destinations[0].distance;
                planedTravelTime.innerText = data.destinations[0].travel;
                moonBtn.classList.add('btn-active');
                marsBtn.classList.remove('btn-active');
                europaBtn.classList.remove('btn-active');
                titanBtn.classList.remove('btn-active');
                break;
                case "MARS":
                    planedName.textContent = data.destinations[1].name;
                    planedImage.src = data.destinations[1].images;
                    planedInformation.textContent = data.destinations[1].description;
                    planedDistance.textContent = data.destinations[1].distance;
                    planedTravelTime.innerText = data.destinations[1].travel;
                    moonBtn.classList.remove('btn-active');
                    marsBtn.classList.add('btn-active');
                    europaBtn.classList.remove('btn-active');
                    titanBtn.classList.remove('btn-active');
                    break;
                    case "EUROPA":
                        planedName.textContent = data.destinations[2].name;
                        planedImage.src = data.destinations[2].images;
                        planedInformation.textContent = data.destinations[2].description;
                        planedDistance.textContent = data.destinations[2].distance;
                        planedTravelTime.innerText = data.destinations[2].travel;
                            moonBtn.classList.remove('btn-active');
                            marsBtn.classList.remove('btn-active');
                            europaBtn.classList.add('btn-active');
                            titanBtn.classList.remove('btn-active');
                        break;
                        case "TITAN":
                            planedName.textContent = data.destinations[3].name;
                            planedImage.src = data.destinations[3].images;
                            planedInformation.textContent = data.destinations[3].description;
                            planedDistance.textContent = data.destinations[3].distance;
                            planedTravelTime.innerText = data.destinations[3].travel;
                            moonBtn.classList.remove('btn-active');
                            marsBtn.classList.remove('btn-active');
                            europaBtn.classList.remove('btn-active');
                            titanBtn.classList.add('btn-active');
                            break;
                            default:
                                break;

        }
    //    console.log(data);

    })
    .catch((err)=> console.log(err))
    
};


//gsap animation 
let timeLine = gsap.timeline();
timeLine.from(".destination-image",{duration:2,opacity:0,scale:3, ease:"bounce",});
timeLine.from(".destination-head-text",{duration:0.8,opacity:0,x:-100,stagger:0.50});

timeLine.from("#moon",{duration:0.4,opacity:0,x:100,stagger:0.20});
timeLine.from("#mars",{duration:0.4,opacity:0,x:100,stagger:0.20});
timeLine.from("#europa",{duration:0.4,opacity:0,x:100,stagger:0.20});
timeLine.from("#titan",{duration:0.4,opacity:0,x:100,stagger:0.20});

timeLine.from(".planed-name",{duration:1.3,opacity:0, x:-200,stagger:0.20});

timeLine.from(".planed-information",{duration:1,opacity:0,x:-100,stagger:0.20});
timeLine.from(".bottom-hr",{duration:1.5,opacity:0,x:200, ease:"elastic"});

timeLine.from(".distance-container",{duration:0.4,opacity:0,y:100,stagger:0.20});

timeLine.from(".travel-time-container",{duration:0.4,opacity:0,y:100,stagger:0.20});
ease:"bounce"