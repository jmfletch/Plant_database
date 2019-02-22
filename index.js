$(document).ready(function() {

	console.log("Hello!")

var template = $('#plantlisttemplate').html();

var data = {
	"plants":[
 {
    "name": "Snake plant",
    "img_src": "https://images.homedepot-static.com/productImages/4a05359d-8a60-4ff1-838f-560926305e3d/svn/house-plants-22693-64_400_compressed.jpg",
    "watering_instructions": [
      "When to water: 2 weeks",
      "Light: Indirect"
    ]
 },
 {
    "name": "Marbled Pothos",
    "img_src": "https://i.pinimg.com/originals/2e/a9/39/2ea939fe9dae4e874b4fa1196144bba4.jpg",
    "watering_instructions": [
      "When to water: Weekly",
      "Light: Indirect"
    ]
 },
  {
    "name": "Bird of Paradise",
    "img_src": "https://i2.wp.com/greenfreshflorals.com/wp-content/uploads/2018/05/BIRD12_WHT_G_7478.jpg?fit=1000%2C1000&ssl=1",
    "watering_instructions": [
      "When to water: Weekly",
      "Light: Direct"
    ]
 },
  {
    "name": "Hoya Heart",
    "img_src": "https://www.plantsguru.com//image/cache/catalog/cacti%20and%20succulents/pg-hoya-kerrii-green-800x800.jpg",
    "watering_instructions": [
      "When to water: Weekly",
      "Light: Direct"
    ]
 },
]
}

var result = Mustache.render(template,data);

var output = $("#plantlist");
output.html(result);

console.log(result);
console.log(output);

})