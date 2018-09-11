import Customer from '../models/customer.model' 
import _ from 'lodash' 
import errorHandler from './error.controller'

const create = (req, res, next) => { 
    const project = new Project(req.body)  
    project.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        })
    }

const list = (req, res) => { 
   Projectr.find((err, projects) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(projects)
      })
      .select('Updated succesfully')
    }

const projectByID = (req, res, next, id) => {
    Project.findById(id).exec((err, customer) => {
        if (err || !customer)
          return res.status('400').json({
            error: "Project not found"
          })
        req.profile = project
        next()
      })
 } 

 const update = (req, res, next) => {  
   let project = req.profile  
   project = _.extend(project, req.body)  
   project.updated = Date.now() 
   project.save((err) => {    
     if (err) {      
       return res.status(400).json({        
   error: errorHandler.getErrorMessage(err)      
  }) 
   }
  })
}

const remove = (req, res, next) => {
let project = req.profile
  project.remove((err, deletedProject) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}
export default { create, userByID, list, remove, update }
   