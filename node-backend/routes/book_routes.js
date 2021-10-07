const express = require('express');
const app = express();

const bookRoute = express.Router();
let Book = require('../model/book');

bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (err, data) => {
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
    })
})

bookRoute.route('/').get((req, res) => {
    Book.find((err, data) => {
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
    })
})

bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
    })
})

bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(err,data)=>{
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
    })
})


bookRoute.route('/delete-book/:id').delete((req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    })
})
