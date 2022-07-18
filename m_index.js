const mongoose=require('mongoose')
const db='mongodb+srv://aditya_gupta89:1234@cluster0.8r6bxyw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{
    console.log('Connected to MongoDB...')
}).catch(err=>console.error("Could not connect to MongoDB...",err))
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now}
})
const Course=mongoose.model('Course',courseSchema);
// async function createCourse(obj){
//     const course=new Course(obj);
//     const result =await course.save();
//     console.log(result)
// }
// createCourse({
//     name:'Angular Course',
//     author:'Mosh',
//     tags:['node','backend'],
//     isPublished:true
// });
// createCourse({
//     name:'Node.js Course',
//     author:'Mosh',
//     tags:['node','backend'],
//     isPublished:true
// })
// const studentScheme=new mongoose.Schema({
//     name:String,
//     number:Number,
//     course:[String],
//     dob:Date
// })
// const Student=mongoose.model('student',studentScheme);
// async function createStudent(){
//     const student=new Student({
//         name:"Aditya",
//         number:730040303,
//         course:["React","Angular"],
//         dob:05/03/2002
//     })
//     const result=await student.save();
//     console.log(result)
// }
// createStudent()
// const course=new Course({
//     name:'Node.js Course',
//     author:'Mosh',
//     tags:['node','backend'],
//     isPublished:true
// })
async function getCourses(){
    //eg (equal)
    // new(not equal)
    // gt(greater than)
    // gte(greater than or equal to)
    // lt(less than)
    // lte(less than or equal to)
    // in
    // nin
    const courses=await Course.find({price:{$in:[10,15,20]}}) //$ dollar sign tell you this is keyword
    .find({price:{$gte:10,$lte:20}})
    .or([{author:'Mosh'},{isPublished:true}],)
    .and([])
    // Start with Mosh
    .find({author:/^Mosh/})
    //  End With Hamedani
     .find({author:/Hamedani$/i})
    //  Contains Mosh
.find({author:/.*Mosh.*/i});
    await Course.find({author:'Mosh',isPublished:true}).limit(10).sort({name:1}).select({name:1,tags:1});
    console.log(courses);
}
getCourses();