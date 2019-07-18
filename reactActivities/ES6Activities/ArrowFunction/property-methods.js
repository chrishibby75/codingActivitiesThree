//correct for objects methods

var dog = {
    name: "Oscar",
    sound: "Woof!",
    makeSound: function() {
        console.log(this.sound);
    },
    readTag: function() {
        console.log("My name tag reads: " + this.name);
    }
};

dog.makeSound();
dog.readTag();


//incorrect for objec methods

var dog = {
    name: "Oscar",
    sound: "Woof!",
    makeSound: () => console.log(this.sound),
    readTag: () => console.log("My name tag read:" + this.name)
};

dog.makeSound();
dog.readTag();

