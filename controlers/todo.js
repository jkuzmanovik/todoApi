/*
THIS FILE GETS IMPORTED IN APP.JS
AND SERVER AS CONTROLERS FOR TODO
*/

const Todo = require('../models/schema/todoSchema.js')
const mongoose = require('mongoose')

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

module.exports.updateIsFinished = (req,res,next) => {
    Todo.findById(req.params.id,(err,todo) => {
        todo.isFinished = !todo.isFinished
        todo.save((err,todo) => {
            if(err) return next(err)
            return res.json(todo)
        })
    })
}

module.exports.getFinishedTodos = (req,res,next) => {
    Todo.find({isFinished:true},(err,todos) => {
        if(err) return next(err)
        return res.json(todos)
    })
}
module.exports.getUnFinishedTodos = (req,res,next) => {
    Todo.find({isFinished:false},(err,todos) => {
        if(err) return next(err)
        return res.json(todos)
    })
}

module.exports.deleteAllTodos = (req,res,next) => {
    Todo.remove({},(err)=> {
        if(err) return next(err)
        return res.sendStatus(200)
    })
}

