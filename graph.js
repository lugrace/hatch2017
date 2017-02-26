
var id = 5815135;
// var start = 1451606400; //Jan 1, 2016
// var end = 1459468800; //April 1, 2016
var day = 86400 //One day in unix time
// var url = 'http://history.openweathermap.org/data/2.5/history/city?id=' + id +"&type=hour&start="+start+"&cnt="cnt+"&APPID="+mykey;

// var jsonW = JSON.parse(getJSON(url));
var temps = [];
var labels = [];
var arr = [];
// for(var i = start; i < end; i+=day){
  // var url = "https://api.openweathermap.org/data/2.5/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
  //var url = "http://api.openweathermap.org/data/2.5/history/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5815135&mode=json&units=imperial&appid='+mykey;
$.getJSON(url, function(data) {
    //data is the JSON string
    // console.log('hooray');
    console.log
    arr = data.list
    for(var i = 0; i < arr.length; i++){
      labels.push(arr[i].dt);
      temps.push(arr[i].main.temp);
      console.log(arr[i]);
    }
  //temps.push(data.main.temp);
  // labels.push(i);
  });
// }
console.log(temps);
console.log(labels);
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
//type: 'bar',
type: 'line',
data: {
  labels: labels, //['M', 'T', 'W', 'T', 'F', 'S', 'S']
  datasets: [{
    label: 'temperatures',
    data: temps, //[12, 19, 3, 17, 6, 3, 7]
    backgroundColor: "rgba(153,255,51,0.4)"
  }]},
options: {
  title :{
    display:true,
    text: "Washington DC's (5815135) Weather"
  }
}
});
