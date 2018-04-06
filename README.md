# todoApi
## About this project
  This is simple todo project that i created for fun 

## HOST
  this api is hosted on heroku feel free to use it :)

  URL: https://jordantodoapi.herokuapp.com/
 
## APP
  Currently Under development --github link -> https://github.com/jkuzmanovik/todo-reactNative

## USAGE 
### userSchema ###

```javascript
   userName:{type: String, required: true, unique:true, trim:true},
    firstName:{type:String, trim:true},
    lastName:{type:String, trim:true},
    email:{type:String, required:true, unique:true,trim:true},
    todos:[{
        type:Schema.Types.ObjectId, ref:'todo'
    }],
    password:{type:String, required:true}
    }
```
If you want to see the full schema go to ```modes/schemas/user.js```

## Routes

#### /signup
```javascript 
  .post()  //Create new user (you need to provide JSON body with atleast userName,email and password that are required) --> return new token && userId
```

#### /login
```javascript
  .post() //Log in functionality(you need to provide correct email and corect password) --> return new token && userID
```
 #### /user/:userId
 ```javascript
    .get() //get user with that id(you need to have the token that you logged in for this user) --> return single 
    .put() //update  user with id(you need to provide all of the required fields in order to update with put) --> return updated user
    .patch() //update user with id(you can provide only the field that you want to change) --> return updated user
    .delete() //delete user with id --> return status(200) if deleteion is success
 ```
 #### /user/userId /todos
```javascript
    .get()  //get todos that are associated with the userId --> return todo
    .post() //create todo(title is required) --> return the created todo
```
#### /user/userId/todos/todoId
```javascript
  .get() //get  single todo associated with the userId and todoID --> return single todo
  .put() //update single todo with the todoId (title is required) --> return updated todo
  .patch() //update single todo with the todoId (provide only the field that you need to update) --> return updated todo
  .delete() //delete single todo with the todoId --> return status(200) if success```
```
#### /user/UserId/todos/todoId
```javascript
  .post()  //update isFinished to the opposite of what is currently -->  return status(200)
  .put() // update isFinished to the opposite of what is currently --> return status(200)
```


## Token

#### Usage

 You can get token when you login or sign 
 
 Token expires after 1 day
 
 Put token in authorization header WITHOUT BEARER
 
 #### Contribution
 If there are any bugs open issue
 
 If you want to contribute (create more functionality or fix some bug) create pull request 
