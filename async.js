// console.log("Aditya")
// setTimeout(() => {
//     console.log("Hello")
// }, 2000);
// console.log("Gupta")
//  we use callback to fetch database to perform async operation
//   getUser(5,user=>{
//     console.log(user);
// );
//   function getUser(id,callback){
//     setTimeout(()=>{
//         console.log("Reading database");
//         getUser(5,user=>{
//             console.log(user);
//         );
//           function getUser(id,callback){
//             setTimeout(()=>{
//                 console.log("Reading database");
//                 callback({id:id,name:"Aditya"})
//             },2000)
//           }
//          getRepositories(3,user=>{
//         console.log(user)
//          })
//           function getRepositories(id,callback){
//             setTimeout(()=>{
//                 console.log("reading database")
//                 callback(['respo1','respo2','respo3']);
//             },2000)
//           } callback({id:id,name:"Aditya"})
//     },2000)
//   }
//  getRepositories(3,user=>{
// console.log(user)
//  })
//   function getRepositories(id,callback){
//     setTimeout(()=>{
//         console.log("reading database")
//         callback(['respo1','respo2','respo3']);
//     },2000)
//   }


// Running Parallel Promises
const p1=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async operation 1...")
        resolve(1);
    },1000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Aysnc operation 2...');
        reject("Error");
    },2000);
})
Promise.race([p1,p2]).catch(err=>console.log(err));
