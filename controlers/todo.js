const Todo = require('../models/schema/todoSchema.js')
const mongoose = require('mongoose')
const express= 

module.exports.getAllTodos = (req,res,next) => {
    Todo.find({},(err,todos) => {
        if(err) return next(err)
        res.json(todos)
    })
}


module.exports.getTodoById = (req,res,next) => {
    Todo.findById(req.params.id,(err,todo) => {
        if(err) return next(err)
        if(!todo) return res.send('no coupon with that id')
        return res.json(todo)
    })
}

module.exports.createTodo = (req,res,next) => {
    const newTodo = new Todo(req.body)
    newTodo.save((err,coupon) => {
        if(err) return next(err)
        res.sendStatus(200)
    })
}

module.exports.delteTodoById = (req,res,next) => {
    Todo.findByIdAndRemove(req.params.id,(err,todo) => {
        if(err) return next (err)
        if(!todo) return res.status(400).send('No todo with that id')
        res.sendStatus(200)
    })
}

module.exports.updateTodoById = (req,res,next) => {
    Todo.findOneAndUpdate({_id:req.params.id},req.body,(err,todo) => {
        if(err) return next(err)
        if(!todo) return res.status(400).send('no todo with that id')
        return res.sendStatus(200)
    })


}

