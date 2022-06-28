import User from "../models/User.js"
import Client from "../models/Client.js"
import Task from "../models/Task.js"
import Project from "../models/Project.js"
import { StatusCodes } from "http-status-codes"
import moment from "moment"
const showStats = async (req , res) =>{
   
        let totalUsers = await User.countDocuments({})
        let totalProject = await Project.countDocuments({})
        let totalClients = await Client.countDocuments({})
        let totalTasks = await Task.countDocuments({})
       /*  let stats = await User.aggregate([
            {
                $group:{ _id:{"role" :"$role" , "team" : "$team" }  , count: { $sum: 1 }}
            }
        ]) */
        let tasksOverview = await Task.aggregate([
            {
                $group : {_id: "$taskStatus" , count: { $sum: 1 } }
            }
        ])
    tasksOverview = tasksOverview.reduce((acc , curr) => {
            const {_id : status , count} = curr ; 
            acc[status] = count
            return acc
        } , {})


        let clientsOverview = await Client.aggregate([
            { $group: {
                _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' }  , /* "clientStatus":"$clientStatus" */},
                count: { $sum: 1 },
              },},
              { $sort: { '_id.year': -1, '_id.month': 1 } },
              { $limit: 6 },
         ])
         clientsOverview = clientsOverview.map ((item) =>  {
             const {_id:{year , month ,clientStatus } , count } = item ;
             const date = moment().month(month - 1)
             .year(year).format("MMM Y")
             return {date , count , clientStatus}
         })
         /* clientsOverview = clientsOverview.reduce((acc , curr) => {
            const {clientStatus , date , count} = curr ; 
            acc[date] = count
            return acc 
        } , {}) */

        /* clientsOverview = Object.values(clientsOverview.reduce((acc, curr) => { 
            acc[curr.clientStatus] = acc[curr.clientStatus] || { title: curr.clientStatus, data: [] };
            acc[curr.clientStatus].data.push(curr.count );
            return acc;
        }, {})) */


/*         clientsOverview = clientsOverview.reduce(function (r, a) {
            r[a.clientStatus] = r[a.clientStatus] || [];
            r[a.clientStatus].push(a);
            return r;
        }, Object.create(null));
 */

        let projectsOverview = await Project.aggregate([
            { $match: { projectStatus: "new" } } , 
           { $group: {
                _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' }  , "projectStatus":"$projectStatus"},
                count: { $sum: 1 },
              },},
              { $sort: { '_id.year': -1, '_id.month': 1 } },
              { $limit: 6 },
        ])
        projectsOverview = projectsOverview.map ((item) =>  {
            const {_id:{year , month , projectStatus} , count } = item ;
            const date = moment().month(month - 1)
            .year(year).format("MMM Y")
            return {date , count , projectStatus}
        })

         /* let data = await Project.find({})

        let filter =  data.map(v => Object.assign({}, { projectStatus: v.projectStatus, name: v.name}));
        return res.json(filter); */


        res.status(StatusCodes.OK).json({clientsOverview , projectsOverview , totalUsers , totalClients , totalProject ,totalTasks , tasksOverview})
}

export {
    showStats
}