const express = require('express');

const server = express();
const PORT = 8000;
//method --> post , path --?/abc


// server.all('/student',(req,res)=>{
//     return res.send("all-routes");
// })


// server.delete('/student',(req,res)=>{
//     //reading
//     return res.send("1");
// })

// server.put('/student',(req,res)=>{
//     return res.send("2");
// })

// server.post('/post-req',(req,res)=>{
//     return res.send("POST - REQUEST");
// });
///get-salary
//req.cookies

server.use('/',checkLogin);

function checkLogin(req,res,next){
    console.log('person-login');
    //logic 
    req.isLogin = true;
   
    next();
}

function giveRole(req,res,next){
    console.log('role-given');
    //logic
    req.role='admin';
    next();
}

server.use('/student',(req,res,next) =>{
    console.log('i am student');
    next();
});
///get-salary/abc
server.get('/get-salary',[giveRole],(req,res) =>{
    if(req.isLogin && req.role == 'admin'){
        return res.send("salary-credit");
    }
    return res.send('not-authroized');
    
});




server.get('/student/detail',(req,res) =>{
     res.set('Content-Type','text/plain');
    if(req.isLogin){
        return res.send("<h1>student-detail</h1>");
    }
   
    return res.send("Not-login");
});


//check if every request has been done

// server.all('/*',(req,res) =>{
//     return res.send("<h1>Invalid route page not known</h1>");
// })
server.use('/',(req,res,next)=>{
    return res.status(401).send("<h1>Invalid route page not known</h1>");
   // next("i am error");
})

server.listen(PORT,(err)=> {
    if(err){
        console.log('err',err);
        return;
    }
    console.log(`server started at port ${PORT}`);
})
//b+ 1 -->/b-->/bb-->/bbb-->
//b? --> / or /b 

// [0-9]
// a+
// a,aa,aaa 
// *
// a
// ab
// acv