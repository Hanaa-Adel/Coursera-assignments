(function(){
  'use strict'; // to strict mistakes
//acts like main function
  angular.module('LunchCheck',[])

//class that controls the HTML code
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
      $scope.displayedMessage="";
      $scope.lunchMenu="";
      $scope.placeholder="list comma separated dishes you usually have for lunch";
      $scope.mealsCount=function(){
        var meals= countLunchMeals($scope.lunchMenu);
        $scope.displayedMessage= meals;
      };
  };

  function countLunchMeals(string){
      var arrString= string.split(',');
      var message="";
      var counter=0;
      if (arrString==""){
        message="Please enter data first";
      }

      else{
        for(var i=0; i<arrString.length; i++){
          if (arrString[i]==""|| arrString[i]==false){
            counter=counter;
          }
          else {
            counter=counter+1;
          }
        }
        if (counter>=1 && counter<=3){
          message= "Enjoy!";
        }
        else if(counter>3){
          message= "Too much!";
        }
      }

    return message;
  }


//  });
})();
