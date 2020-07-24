const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    id: 1,
    name: 'Anna'
  });
});

/* Post a user . */
router.post('/', (req, res, next) => {
  res.json({
    status: 200,
    message: 'User successfully created '
  });
});

module.exports = router;
