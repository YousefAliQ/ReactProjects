const person = {
    name: 'Yousef',
    age: 27,
    location: {
        city: 'Fairfield'
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temprature = 70 } = person.location;
if (city && typeof temprature === 'number') {
    console.log(`It's ${temprature} in ${city}`);
}

const book = {
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    publisher: {
       // name: 'CareerCup'
    }
};

const {
    name: publisherName = 'Self-Published'
} = book.publisher;

console.log(publisherName);