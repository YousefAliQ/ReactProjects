// adding "transform-class-properties" plugin to babelrc allows us to use the new syntax.

class OldSyntax {
    constructor() {
        this.name = 'Ali';
        this.getGreeting = this.getGreeting.bind(this); // this line to solve the error
    }

    getGreeting() {
        return `hi, my name is : ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting()) // Uncaught TypeError: Cannot read property 'name' of undefined
//console.log(oldSyntax.getGreeting())

class NewSyntax {
    name = "Yousef";
    getGreeting = () => {
        return `hi, my name is : ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting()); // its working without the ugly binding!
//console.log(newSyntax)