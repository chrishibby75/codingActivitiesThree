var person = {
    name: "Hodor",
    saySomething: function() {
      console.log(this.name + " is thinking...");
      setTimeout(function() {
        console.log(this.name + "!");
      }, 100);
    }
  };
  
  person.saySomething(); // prints "Hodor is thinking..."
  

  var person = {
      name: "Hodor",
      saySomething: function() {
          console.log(this.name + " is thinking...");
          setTimeout(()=> console.log(this.name + "!"), 1000);
      }
  };

  person.saySomething();