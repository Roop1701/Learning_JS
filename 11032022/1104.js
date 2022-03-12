// var phone = function (male, model, warrenty) {
//   this.make = make;
//   this.model = model;
//   this.warrenty = warrently || 12;
// };
// phone.prototype{
//     extendWarrenty: function(x){

//     }
// }

var myPhone = new phone("Apple", "Iphone 6");
myPhone.make = " ";

var phone = function (make, model, warrenty) {
  this.setMake(make);
  this.setModel = model;
  this.setWarrenty(model);
};

phone.prototype={
    extendWarrenty: function(x){
        this.warrenty += x;
    }

    getMake:function(make){
        this.make=make;

    }
    setModel: function(model){
        this.model=model;
    }
    getWarrenty: function(warrenty){
        this.warrenty+=x;
    }
}

