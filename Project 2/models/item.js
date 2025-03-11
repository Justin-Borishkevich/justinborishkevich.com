const { v4: uuidv4 } = require('uuid');

const items = [
    {    
        id: 1,
        title: '45lb Plate',
        condition: 'New',
        price: 55.00,
        offers: 5,
        image: '/images/45lbWeight.jpg',
        description: '45lb Plate.',
        seller: 'John Doe',
        isActive: true
    },
    {
        id: 2,
        title: '50lb Kettlebell',
        condition: 'New',
        price: 65.00,
        offers: 2,
        image: '/images/kettlebell.jpg',
        description: '50lb Kettlebell.',
        seller: 'John smith',
        isActive: true
    },
    {
        id: 3,
        title: '35lb Dumbbell',
        condition: 'Used',
        price: 40.00,
        offers: 6,
        image: '/images/dumbbell.jpg',
        description: '35lb Dumbbell.',
        seller: 'Sam Doe',
        isActive: true
    },
    {
        id: 4,
        title: '315lb Barbell set',
        condition: 'New',
        price: 400.00,
        offers: 3,
        image: '/images/barbell.jpg',
        description: '315lb Barbell.',
        seller: 'Bob Dear',
        isActive: true
    },
    {
        id: 5,
        title: 'Premium Shaker Bottle',
        condition: 'New',
        price: 35.00,
        offers: 14,
        image: '/images/bottle.jpg',
        description: 'Premium Shaker Bottle for all your suppliments and protein powders.',
        seller: 'John Doe',
        isActive: true
    },
    {
        id: 6,
        title: 'Silver Standard Protein',
        condition: 'New',
        price: 68.00,
        offers: 27,
        image: '/images/proteinPowder.jpg',
        description: 'Silver Standard Protein.',
        seller: 'Abby Doe',
        isActive: true
    }
]

exports.find = () => {
    items.sort((a, b) => a.price - b.price);
    return items;
}

exports.findById = (id) => items.find(item => item.id == id);

exports.save = (item) => {
    item.id = uuidv4();
    item.offers = 0;
    item.isActive = true;
    items.push(item);
}

exports.updateById = (id, newItem) => {
    let item = items.find(item => item.id == id);
    if (item) {
        item.title = newItem.title;
        item.condition = newItem.condition;
        item.price = newItem.price;
        item.description = newItem.description;
        item.seller = newItem.seller;
        item.isActive = newItem.isActive;
        if (newItem.image) {
            item.image = newItem.image;
        }
        return true;
    } else {
        return false;
    }
}

exports.deleteById = (id) => {
    let item = items.find(item => item.id == id);
    if (item) {
        items.splice(items.indexOf(item), 1);
        return true;
    } else {
        return false;
    }
}
