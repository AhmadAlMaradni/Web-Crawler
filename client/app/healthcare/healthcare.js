 angular.module('myapp.healthcare',[])

 .controller('healthcareContr',function ($scope , Aumet){

  $scope.all = "";

  $scope.getHealth= function(){
    Aumet.getHealth()
    .then(function (data) {

      var div = document.createElement('div');
      div.innerHTML = data;
      var elements = div.children;
      $scope.dataArr = [];
      var temp = {}
      for (var i = 1; i < elements.length; i++) {
        if(elements[i].tagName.toLowerCase() === 'table'){
          var temp = {};

          var trArr = elements[i].children[0].children;
          for (var k = 0; k < trArr.length; k++) {
            var childs = trArr[k].children[0].children[0].children[0].children[0].children;

            for (var j = 0; j < childs.length; j = j + 2) {
              if(childs[j+1].children.length > 0){
                if(childs[j+1].children[0].tagName.toLowerCase() === 'a'){
                  temp[childs[j].innerText.trim()] = {text : childs[j+1].innerText.trim(),
                   href : 'http://www.medicaltenders.com/'+childs[j+1].children[0].getAttribute("href")}; 
                 }
               } else {
                temp[childs[j].innerText.trim()] = childs[j+1].innerText.trim(); 
              }
            }
          }
          $scope.dataArr.push(temp);
        }
      }

    })
    .catch(function (error) {
      console.log(error);
    });
  }

});