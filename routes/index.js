const express = require('express');
const router = express.Router();

const items = [];
let id = 0;

//Used more declarative router syntax....


// This should respond with a list of shopping items and also
// accept form data and add it to the shopping list.
router
.route('/items')
.get((req, res, next) => {
    res.status(200).json(items);
})
.post((req, res, next) => {
    items.push({
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        id: ++id
    });
    res.status(201).json({message: "Item added successfully"});
});

//This should display an item by id, name and price and
// accept edits to existing items and also
// deletes a specific item from the array.
router
.route('/items/:id')
.get((req, res, next) => {
    const item = items.find( item => item.id === +req.params.id);
    res.status(200).json(item);
})
.patch((req, res, next) => {
    const item = items.find( item => item.id === +req.params.id );
    item.itemName = req.body.itemName;
    item.itemPrice = req.body.price;

    res.status(201).json({message: "Item updated succeessfully!"});
})
.delete((req, res, next) => {
    const itemIndex = items.findIndex( item => item.id === +req.params.id );
    items.splice(itemIndex, 1);

    res.status(200).json({message: "Item deleted successfully!"});
});


module.exports = router;