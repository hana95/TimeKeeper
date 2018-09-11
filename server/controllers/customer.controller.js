import Customer from '../models/customer.model' 
import _ from 'lodash' 
import errorHandler from './error.controller'

const create = (req, res, next) => { 
    const customer = new Customer(req.body)  
    customer.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        })
    }

const list = (req, res) => { 
   Customer.find((err, customers) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(customers)
      })
      .select('Updated succesfully')
    }

const customerByID = (req, res, next, id) => {
    Customer.findById(id).exec((err, customer) => {
        if (err || !customer)
          return res.status('400').json({
            error: "Customer not found"
          })
        req.profile = customer
        next()
      })
 } 

 const update = (req, res, next) => {  
   let customer = req.profile  
   customer = _.extend(customer, req.body)  
   customer.updated = Date.now() 
   customer.save((err) => {    
     if (err) {      
       return res.status(400).json({        
   error: errorHandler.getErrorMessage(err)      
  }) 
   }
  })
}

const remove = (req, res, next) => {
let customer = req.profile
  customer.remove((err, deletedCustomer) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}
export default { create, userByID, read, list, remove, update }
   