const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../models/config')

module.exports.getToken= (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.send('Please log in').status(403)
    }
  }

module.exports.validateToken = (req,res,next) => {
   try{ jwt.verify(req.token,config.secret,(err,decoded) => {
        if(err) throw(err) 
        next()
    })
    }catch(err) {
        return res.send("Invalid token").status(401)
    }
}






