const express = require('express');

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/iventoryController');

// Define routes for inventory operations
router.get('/', inventoryController.getInventoryItems);
router.get('/:id', inventoryController.getInventoryItemById);
router.post('/', inventoryController.createInventoryItem);
router.put('/:id', inventoryController.updateInventoryItem);
router.delete('/:id', inventoryController.deleteInventoryItem);


// Export the router to be used in the main app
module.exports = router;