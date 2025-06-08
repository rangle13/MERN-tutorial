const Item = require('../models/Item');

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch items'
        });
    }
};

// Create a new item
exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({
            error: 'Failed to create item'
        });
    }
};

// Get a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({
            error: 'Item not found'
        });
        res.json(item);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch item'
        });
    }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updatedItem) return res.status(404).json({
            error: 'Item not found'
        });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({
            error: 'Failed to update item'
        });
    }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({
            error: 'Item not found'
        });
        res.json({
            message: 'Item deleted'
        });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete item'
        });
    }
};