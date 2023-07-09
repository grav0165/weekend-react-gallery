const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
    console.log('Inside UPDATE request', req.params);
    sqlParam = req.body
    console.log('Inside of req.body: ', req.body)
    const galleryId = req.params.id;
    // // for(const galleryItem of galleryItems) {
    // //     if(galleryItem.id == galleryId) {
    // //         galleryItem.likes += 1;
    // //     }
    // }
    let sqlQuery = `
    UPDATE "gallery"
    SET "likes"=(likes+1)
    WHERE "id"=$1`
    pool.query(sqlQuery, [galleryId])
    .then(result => {
        res.sendStatus(200);
        console.log('Like added to post');
    })
    .catch(error => {
        console.log('Error in updating task: ', error);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM gallery ORDER BY id ASC`;
    pool.query(sqlQuery)
    .then((result) => {
        console.log('Got information back from database: ', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error in making database query of ${sqlQuery}, received error: `, error);
        res.sendStatus(500);
    })
    
}); // END GET Route

module.exports = router;