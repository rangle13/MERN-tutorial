const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    buildate: {
        type: Date
    },
    inventoryDate: {
        type: Date
    },
    sold: {
        type: Date
    },
    shipped: {
        type: Date
    },
    category: [{
        type: String
    }],
    description: {
        type: String
    },
    colors: [{
        type: String
    }],
    group: [{
        type: Number
    }],
    price: {
        type: Number
    },
    shippingCost: {
        type: Number
    },
    soldTo: {
        type: Number
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);