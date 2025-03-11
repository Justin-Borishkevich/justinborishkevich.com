const model = require('../models/item');

exports.index = (req, res) => {
    res.render('./store/index');
}

exports.items = (req, res) => {
    const searchQuery = req.query.search || '';
    let items = model.find().filter(item => item.isActive);

    if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();

        let titleMatches = items.filter(item => 
            item.title.toLowerCase().includes(searchLower)
        );

        let descriptionMatches = items.filter(item => 
            item.description.toLowerCase().includes(searchLower)
        );

        let searchedItems = [...new Set([...titleMatches, ...descriptionMatches])];

        return res.render('./store/items', { items: searchedItems, extraStyles: '/css/items.css' });
    }

    res.render('./store/items', { items, extraStyles: '/css/items.css' });
};


exports.new = (req, res) => {
    res.render('./store/new', {extraStyles: '/css/new.css'});
}

exports.create = (req, res) => {
    const imagePath = req.file ? '/images/' + req.file.filename : null;

    let item = req.body;
    item.image = imagePath;
    model.save(item);
    res.redirect('/store/items');
}

exports.show = (req, res, next) => {
    let id = req.params.id;
    let item = model.findById(id);
    if (item) {
        res.render('./store/item', { item, extraStyles: '/css/item.css' });
    } else {
        let err = new Error('Cannot find item with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let item = model.findById(id);
    if (item) {
        res.render('./store/edit', { item, extraStyles: '/css/new.css' });
    } else {
        let err = new Error('Cannot find item with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.update = (req, res, next) => {
    const imagePath = req.file ? '/images/' + req.file.filename : null;

    let item = req.body;
    let id = req.params.id;
    item.image = imagePath;
    if (model.updateById(id, item)) {
        res.redirect('/store/' + id);
    } else {
        let err = new Error('Cannot find item with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/store/items');
    } else {
        let err = new Error('Cannot find item with id ' + id);
        err.status = 404;
        next(err);
    }
}