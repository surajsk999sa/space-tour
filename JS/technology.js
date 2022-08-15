//button selected 
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');

//image container selection
let landImage = document.getElementById('landscape-image');
let portImage = document.getElementById('portrait-image');
//information section 
let lunchVehicle = document.querySelector('.vehicle-name');
let vehicleInformation = document.querySelector('.information-of-vehicle');

//one button function call
oneBtn.addEventListener('click',getData);
//two button function call
twoBtn.addEventListener('click', getData);
//three button function call
threeBtn.addEventListener('click', getData);

//fetch call function
function getData(e){
    fetch("data.json")
    .then((res) => res.json())
    .then((data)=>{
         console.log(e.target.id);
        switch(e.target.id){
            case "one":
                lunchVehicle.textContent = data.technology[0].name;
                landImage.src = data.technology[0].images.landscape;
                portImage.src = data.technology[0].images.portrait;
                vehicleInformation.textContent = data.technology[0].description;
                oneBtn.classList.add('btn-active');
                twoBtn.classList.remove('btn-active');
                threeBtn.classList.remove('btn-active');
                break;
                  case "two":
                       lunchVehicle.innerHTML= data.technology[1].name;
                    landImage.src = data.technology[1].images.landscape;
                    portImage.src = data.technology[1].images.portrait;
                    vehicleInformation.innerHTML = data.technology[1].description;
                    oneBtn.classList.remove('btn-active');
                    twoBtn.classList.add('btn-active');
                    threeBtn.classList.remove('btn-active');
                    break;
                    case "three":
                        lunchVehicle.textContent = data.technology[2].name;
                        landImage.src = data.technology[2].images.landscape;
                        portImage.src = data.technology[2].images.portrait;
                        vehicleInformation.textContent = data.technology[2].description;
                        oneBtn.classList.remove('btn-active');
                        twoBtn.classList.remove('btn-active');
                        threeBtn.classList.add('btn-active');;
                        break;
                            default:
                                break;

        }
       console.log(data);

    })
    .catch((err)=> console.log(err))
    
};



//gsap animation 
let timeLines = gsap.timeline();
timeLines.from(".head-text",{duration:0.8,opacity:0,x:-100,stagger:0.20})
timeLines.from(".tec-button-container",{duration:1,opacity:0,x:-200,stagger:0.20});

timeLines.from(".information-text-container",{duration:1.8,opacity:0,x:-100,stagger:0.50});

timeLines.from(".vehicle-image-container",{duration:0.5,opacity:0,x:100,stagger:0.20});

// timeLines.from("#moon",{duration:0.4,opacity:0,x:100,stagger:0.20});
// timeLines.from("#mars",{duration:0.4,opacity:0,x:100,stagger:0.20});
// timeLines.from("#europa",{duration:0.4,opacity:0,x:100,stagger:0.20});
// timeLines.from("#titan",{duration:0.4,opacity:0,x:100,stagger:0.20});

// timeLines.from(".planed-name",{duration:1.3,opacity:0, x:-200,stagger:0.20});

// timeLine.from(".planed-information",{duration:1,opacity:0,x:-100,stagger:0.20});
// timeLine.from(".bottom-hr",{duration:1.5,opacity:0,x:200, ease:"elastic"});

// timeLine.from(".distance-container",{duration:0.4,opacity:0,y:100,stagger:0.20});

// timeLine.from(".travel-time-container",{duration:0.4,opacity:0,y:100,stagger:0.20});