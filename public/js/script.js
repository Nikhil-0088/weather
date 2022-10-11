const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const icon=document.getElementById('ic');
const middle_layer=document.querySelector('.middle_layer')
const sup=document.getElementById('sup');
const cel=document.getElementById('cel');
const e=document.getElementById('date');
const getInfo=async (event)=>{
    event.preventDefault();
    let city=cityName.value;
   if(city===""){
    city_name.innerText="Please type the name of the city before searching"
    sup.innerText="";
    cel.innerText="";
    temp.innerText="";
    e.innerText="";
    icon.classList.remove(icon.classList[1]);
   }
   else{
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9f40a9fd95d6e7a260059391cb5fb287`
        const response= await fetch(url);
        const data=await response.json();
        const arrData=[data];
        temp.innerText=arrData[0].main.temp;
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        // temp_status.innerText=arrData[0].weather[0].main;
        //to check clear cloudy or rain
        // data.classList.remove("data_hide")
        const tempMood=arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            icon.classList.remove(icon.classList[1]);
            icon.classList.add("fa-sun");
        }
        else if(tempMood=="Rain"){
            icon.classList.remove(icon.classList[1]);
            icon.classList.add("fa-cloud-rain");
        }
        else if(tempMood=="Clouds"){
            icon.classList.remove(icon.classList[1]);
            icon.classList.add("fa-cloud");
        }
        else{
            icon.classList.remove(icon.classList[1]);
            icon.classList.add("fa-cloud");
        }
        sup.innerText="o";
        cel.innerText="C"
        let today =new Date();
today=today.toString()
today=today.slice(0,10);
e.innerText=today;
    } catch (error) {
        city_name.innerText="Please Enter a valid city name"
        sup.innerText="";
        cel.innerText="";
        e.innerText="";
        console.log(error)
    }
    
   }
}
submitBtn.addEventListener('click',getInfo);