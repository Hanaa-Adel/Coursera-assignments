(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //1st controller definition
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var ToBuy= this;
    ToBuy.toBuyList=ShoppingListCheckOffService.getToBuyItems();
    //console.log(ToBuy.toBuyList);
    ToBuy.message="Everything is bought!";
    ToBuy.bought = function (itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
    };
  };

  //2nd controller definition
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var AlreadyBought=this;
    AlreadyBought.message="Nothing bought yet.";
    AlreadyBought.boughtList=ShoppingListCheckOffService.getBoughtItems();
    //console.log(AlreadyBought.boughtList);
  };

  //Service definition
  function ShoppingListCheckOffService(){
    var service=this;
    var toBuyList=[
      {name: "Cookies",
       quantity:"3"},
      {name: "Chips",
       quantity:"2"},
      {name: "Donuts",
       quantity:"3"},
      {name: "PanCack",
       quantity:"3"},
      {name: "Crispy",
       quantity:"3"},
    ];
    var boughtList=[];
    service.getToBuyItems = function () {
      return toBuyList;
    };

    service.bought = function(itemIndex){
      var item={name:"",
          quantity:""}//to copy the array element in the specified index
      item.name=toBuyList[itemIndex].name;
      item.quantity=toBuyList[itemIndex].quantity;
      boughtList.push(item);
      toBuyList.splice(itemIndex,1);
      return toBuyList;
    };
    service.getBoughtItems=function(){
      return boughtList;
    };
  };

})();
