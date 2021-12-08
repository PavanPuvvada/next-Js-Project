import { getAllBlogs  } from '/libs/api';



export default async function getBlogs (req, res){
    const offset = parseInt((req.query.offset || 0),10)
    const datetimes = req.query.datetimes || 'desc'; 
    const data = await getAllBlogs({offset, datetimes})
   res.status(200).json(data)
}