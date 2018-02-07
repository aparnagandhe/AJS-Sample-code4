(function () {
'use strict';

angular.module('ShoppingListCheckOff' , [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//toBuy controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buy = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

  //bought controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();

  }

  //service
  function ShoppingListCheckOffService() {
     var service = this;
     var toBuyItems = [
       { name: "Cookies", quantity: 10 },
       { name: "Chocolates", quantity: 8 },
       { name: "Oranges", quantity: 5 },
       { name: "Bananas", quantity: 7 },
       { name: "Apples", quantity: 6 }];

  var boughtItems = [];

 service.buyItem = function(index) {
   boughtItems.push(toBuyItems[index]);
   toBuyItems.splice(index, 1);
 };

 service.getToBuyItems = function() {
   return  toBuyItems;
 };

service.getBoughtItems = function() {
  return boughtItems;
 };
}

})();
