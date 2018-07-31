(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  //Uncomment to use javascript as the database
  //var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;
  var remoteDS = new RemoteDataStore(SERVER_URL);

  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addInputHandler(Validation.isCompanyEmail);

  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });


  console.log(formHandler);
})(window);

var slider = document.getElementById("caffeineRating");
var reset = document.getElementById("resetButton");

slider.addEventListener("input", function() {
  document.getElementById("caffeineRatingText").textContent = slider.value;
});

reset.addEventListener("click", function() {
  document.getElementById("caffeineRatingText").textContent = 30;
});
