
(function(window) {
  'use strict';
  var App = window.App;
  var FORM_SELECTOR = '[data-payment="form"]';
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  //print("Fuck You");

  formHandler.addSubmitHandler(function () {});
})(window);

//get the modal modalLink
var modal = document.getElementById("modalLink");
modal.addEventListener("click", function (event){
  console.log("fuck this");
  event.submit();
})
