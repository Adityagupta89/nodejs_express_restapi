const express=require('express')
const logger=require('./logger')
// const config=require('config')
const app=express();
app.use(express.json())
app.set('view engine','pug');
app.set('views','./views');
// app.use((req,res,next)=>{
//     console.log('Logging....')
//     next();
// // })
// console.log("Application Name:"+config.get("name"))
// console.log("Main Server:"+config.get("mail.host"))
app.use(express.urlencoded({extended:true})) //for key value pair it's almost same express.json()
app.use(express.static('public')) //serve static file
// console.log(`Node_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`)
app.use(logger );
app.use((req,res,next) =>{
    console.log('Authenticating...');
    next();
}
)
const courses=[
    { id:1,name:'   '},
    { id:2,name:'course2'},
    { id:3,name:'course3'}
]
// Get request 
app.get('/',(req,res)=>{
    // res.render("index",{title:"My Express App",message:"Hello"} )
    res.send({message:"hello"})
})
// app.get('/api/courses',(req,res)=>{
//     res.send([1,2,3]);
// })
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})
app.get('/api/courses/:id',(req,res)=>{
   const course=courses.find(c=>c.id===parseInt(req.params.id))
   
   if(!course) res.status(404).send("The course with the given Id is not there ")
   res.send(course) 
})
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id)
// })
 app.get('/api/courses/:courseid/:id',(req,res)=>{
        res.send(req.params)
    })
app.get('/api/courses/:id',(req,res)=>{
        res.send(req.query)
})
// Post request 
app.post('/api/courses',(req,res)=>{
    const course={
        id: courses.length+1,
        name:req.body.name,
    };
    courses.push(course);
    res.send(course)

})
// put Request
app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) return res.status(404).send("The course with the given Id is not there ")
    res.send(course) 
    course.name=req.body.name;
    res.send(course)
 })
//  delete Request
app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) return  res.status(404).send("The course with the given Id is not there ")
    const index=courses.indexOf(course);
        courses.splice(index,1);
    res.send(course)
})
 const port=process.env.PORT||3000;
app.listen(3000,()=>console.log(`Listening on port ${port}...`))