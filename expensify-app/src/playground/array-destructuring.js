const address = ['1000 N. 4th St.', 'Fairfield', 'IOWA', '52557'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , meduimPrice] = item;
console.log(`A meduim ${itemName} costs ${meduimPrice} `);