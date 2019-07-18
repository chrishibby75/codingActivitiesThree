var createGreeting = function(message, name) {
    return message + ", " + name + "!";
};

var createGreeting = (message, name) => {
    return message + ", " + name + "!";
};

var createGreeting = (message, name) => message + ", " + name + "!";

var greet = greeting => console.log(greeting);

greeting = createGreeting("Hello", "Chris");

greet(greeting);