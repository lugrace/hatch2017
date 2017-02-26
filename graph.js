
var id = 5815135;
// var start = 1451606400; //Jan 1, 2016
// var end = 1459468800; //April 1, 2016
var day = 86400 //One day in unix time
// var url = 'http://history.openweathermap.org/data/2.5/history/city?id=' + id +"&type=hour&start="+start+"&cnt="cnt+"&APPID="+mykey;

// var jsonW = JSON.parse(getJSON(url));
var temps = [];
var labels = [];
var arr = [];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // var url = "https://api.openweathermap.org/data/2.5/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
  //var url = "http://api.openweathermap.org/data/2.5/history/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5815135&mode=json&units=imperial&appid='+mykey;
$.getJSON(url, function(data) {
    //data is the JSON string
    arr = data.list;
    for(var i = 0; i < arr.length; i++){
      uni = arr[i].dt;
      var myDate = new Date(uni*1000);
      var s = (myDate.toLocaleString());
      labels.push(s);
      temps.push(arr[i].main.temp);
    };
  });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
//type: 'bar',
type: 'line',
data: {
  labels: labels,
  datasets: [{
    label: 'temperatures',
    data: temps,
    backgroundColor: "rgba(153,255,51,0.4)"
  }]},
options: {
  title :{
    display:true,
    text: "Washington DC's (5815135) Weather"
  }
}
});
