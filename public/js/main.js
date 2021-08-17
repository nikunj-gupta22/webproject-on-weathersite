const search=document.getElementById('search');
let city_name=document.getElementById('city_name');
let inpCity=document.getElementById('inpcity');
let date=document.getElementById('date');
let temp=document.getElementById('temp');
let day=document.getElementById("day");
const datahide=document.querySelector('.data_hide');
let temp_status=document.getElementById('temp_status');
const d=new Date();
var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
const daynow= weekdays[d.getDay()];
const datenow=d.getDate();
const monthnow=d.getMonth();
const yearnow=d.getUTCFullYear();
day.innerText=daynow;
date.innerText=datenow +"/"+monthnow+"/"+yearnow;

const  getinfo=async (e)=>{
    e.preventDefault();
  
  



  
    if(inpCity.value==""){
city_name.innerText="Please Enter  City Name";
datahide.classList.add('data_hide');
}
else{
    try{
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${inpCity.value}&units=metric&appid=b81583e9e5c58dc6561bd2095b18d115`;
    const d = new Date();
   
    const response=await fetch(url);
    const data=await response.json();
    let arr=[data];
    console.log(arr);
    temp.innerHTML=`${arr[0].main.temp}<span><sup>o</sup>C</span>`;
    city_name.innerText=`${inpCity.value},${arr[0].sys.country}`;
    let weatherDescription=arr[0].weather[0].description;
    const tempMood=arr[0].weather[0].main;


//condition for checking weather

if(tempMood=='Clear'){
    temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
}
else if(tempMood=='Clouds'){
    temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
}
else if(tempMood=='Rain'){
    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
}
else{
    temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;'></i>";
}

datahide.classList.remove('data_hide');



}catch(e){
console.log(e);
city_name.innerText="Please enter valid City"
datahide.classList.add('data_hide');
    }


}


}

search.addEventListener("click",getinfo);
//key -b81583e9e5c58dc6561bd2095b18d115