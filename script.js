var app = angular.module('foodlog2lite', []);
    

function getTop(timeStr){
  
  var dateMin = new Date(2000, 0, 1,  8, 0);
  var time = new Date(2000, 0, 1, timeStr.split(":")[0], timeStr.split(":")[1]); 
  
var diff = time - dateMin;
var msec = diff;
var mm = Math.floor(msec / 1000 / 60);
msec -= mm * 1000 * 60;

      return (mm * 2.3)+"px";
}
app.controller('myCtrl', function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Ddoe";

  console.log("localStorage.getItem(actual): " + localStorage.getItem("actual"));
  $scope.actual = JSON.parse(localStorage.getItem("actual"));
    if(!$scope.actual){
      $scope.actual = [];
    }

  
$scope.checkDayForm = function(){
  if($scope.userDay >31){
    $scope.userDay = 1;
  }
  if($scope.userDay <1){
    $scope.userDay = 31;
  }
}  
$scope.getMaxHeight = function(){
  return {height:getTop("24:00")};
}
  
$scope.getCurrTime = function(){
  return new Date().getHours() + ":" + new Date().getMinutes();
}
  $scope.getCurrDay = function(){
  return new Date().getDate();
}
  $scope.onFilterActualMeals = function(value, index, array){
    return value.day == $scope.userDay;
  };
  
  
  $scope.addMeal = function(base){
    $scope.showForm = false;
  

    
    var meal = JSON.parse(JSON.stringify(base));
    
    const g = 255 * (base.score/10);
    const r = 255 * ((10-base.score)/10);
    
    meal.style = {
        "position": "absolute",
        "top": getTop(base.time),
        "z-index": "10", 
        "flagstyle": {"background": "rgb("+r+","+g+",0)"}
      }
    
    $scope.actual.push(meal);
     localStorage.setItem("actual", JSON.stringify($scope.actual));
  };
  $scope.plan = 
        [
          {
            "name":"cafe da manha",
            "time":"09:00",
            "food":["Fruta (2 unidades, fatias ou polpas) ou Suco de uva integral e orgânico (200 ml)","Aveia (2 colheres de sopa)","Granola (2 colheres de sopa)","Whey Protein Vegano (3 colheres de sopa ou 1 scoop)"],
          "style":{"top": getTop("09:00")}
      },{
            "name":"Pre Treino ",
            "time":"11:00",
            "food":["Castanha do Pará (3 unidades) ou Castanha de caju (6 unidades)","Fruta (1 unidade ou fatia) ou Bananadinha (1 unidade)"],
         "style":{"top": getTop("11:00")}
          },{
            "name":"Pos treino",
            "time":"13:30",
            "food":["Proteina Vegana (2 colheres)"],
         "style":{"top": getTop("13:30")}
          },{
            "name":"Almoco",
            "time":"14:30",
            "food":["Vegetal A: à vontade, no mínimo 1 prato de sobremesa, temperado com pouco sal, vinagre a gosto e 1 colher de sobremesa de azeite ou Tabule (1 colher de arroz cheia, comer somente metade do arroz)","Vegetal B (3 colheres de sopa)","Arroz integral, Batata doce, Aipim, Cará, Inhame, Macarrão integral (2 colheres de servir ou 4 colheres de sopa)","Feijão ou Leguminosas (2 conchas ou 6 colheres de sopa)","Tofu (100g) ou Cogumelo (2 colheres de servir) ou Whey Protein Vegano (1 scoop)"],
         "style":{"top": getTop("14:30")}
          },{
            "name":"Lanche",
            "time":"17:30",
            "food":["Castanha do Pará, Nozes (4 unidades) ou Castanha de caju, Amendoas, Baru (8 unidades), Salada de frutas (1 caneca), Whey Protein Vegano (2 colheres de sopa), Aveia, Granola (2 colheres de sopa) OU", "Açaí (500 ml), Whey Protein Vegano (2 colheres de sopa), Aveia, Granola (2 colheres de sopa) OU","Bolo Vegano (2 fatias M), Fruta (1 unidade ou fatia) ou Suco de fruta (1 copo – 200 ml)"],
         "style":{"top": getTop("17:30")}
          },{
            "name":"Jantar",
            "time":"20:00",
            "food":["Sopa de legumes (2 potes), Tofu (100g) ou Cogumelo (2 colheres de arroz) ou Whey Protein Vegano (1 scoop) ou Feijão ou Leguminosas (2 conchas ou 6 colheres de sopa), Semente de girassol, Abóbora, gergelim (1 colher de sopa) OU" , "lanche das 15:00"],
         "style":{"top": getTop("20:00")}
          },{
            "name":"Ceia",
            "time":"22:30",
            "food":["Whey protein Vegano (3 colheres de sopa ou 1 scoop), Fruta (1 unidade ou fatia) ou Suco (1 copo ou 1 polpa), Aveia (1 colher de sopa) ou Granola"],
         "style":{"top": getTop("22:30")}
          }
        ]
  
  /*$scope.actual = [
          {
            "id":"plan1",
            "name":"cafe da manha",
            "time":"09:00",
            "food":["Fruta (2 unidades, fatias ou polpas) ou Suco de uva integral e orgânico (200 ml)","Aveia (2 colheres de sopa)","Granola (2 colheres de sopa)","Whey Protein Vegano (3 colheres de sopa ou 1 scoop)"],
          "style":{"top": getTop("09:00")}
      },{
            "id":"plan2",
            "name":"Lanche ",
            "time":"11:30",
            "food":["Castanha do Pará (3 unidades) ou Castanha de caju (6 unidades)","Fruta (1 unidade ou fatia) ou Bananadinha (1 unidade)"],
            "style":{"top": getTop("11:30")}
          },{
            "id":"plan3",
            "name":"Lanche tarde ",
            "time":"Antes do treino",
            "food":["Castanha do Pará (3 unidades) ou Castanha de caju (6 unidades)","Fruta (1 unidade ou fatia) ou Bananadinha (1 unidade)"],
         "style":{"top": getTop("14:00")}
          }
        ]*/
});