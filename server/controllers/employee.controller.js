import Employee from '../models/employee.model' 
import _ from 'lodash' 
import errorHandler from './error.controller'

const create = (req, res, next) => { 
    const employee = new Employee(req.body)  
    employee.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
            }
        })
    }

const list = (req, res) => { 
    Employee.find((err, employees) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(employees)
      }).select('Sucessfully')
    }

const employeeByID = (req, res, next, id) => {
    Employee.findById(id).exec((err, employee) => {
        if (err || !employee)
          return res.status('400').json({
            error: "Employee not found"
          })
        req.profile = employee
        next()
      })
 } 

const update = (req, res, next) => {
    let employee = req.profile
    employee = _.extend(employee, req.body)
    employee.updated = Date.now()
    employee.save((err) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  }

const remove = (req, res, next) => {
let employee = req.profile
  employee.remove((err, deletedEmployee) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
  }

export default { create, userByID, list, remove, update }