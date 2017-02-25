
var id = 5815135;
var start = 1369728000;
var cnt = 5; //One per hour
// var url = 'http://history.openweathermap.org/data/2.5/history/city?id=' + id +"&type=hour&start="+start+"&cnt="cnt+"&APPID="+mykey;
var url = "http://api.openweathermap.org/data/2.5/weather?q=Washington&mode=json&appid="+mykey;
// var jsonW = JSON.parse(getJSON(url));
temp = 'bar';

$.getJSON(url, function(data) {
    //data is the JSON string
    console.log('hooray');
    console.log(data.weather);
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
//type: 'bar',
type: temp,
data: {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    label: 'apples',
    data: [12, 19, 3, 17, 6, 3, 7],
    backgroundColor: "rgba(153,255,51,0.4)"
  }, {
    label: 'oranges',
    data: [2, 29, 5, 5, 2, 3, 10],
    backgroundColor: "rgba(255,153,0,0.4)"
}]},
options: {
  title :{
    display:true,
    text: "Washington DC's (5815135) Weather"
  }
}
});
