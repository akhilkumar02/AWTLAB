function getUser(uid){
    return new Promise((resolve,reject)=>{
        console.log("Get user")
        setTimeout(()=>{
            resolve({
                uid:uid,
                username:'Krithika'
            });
        },1000);
    })
}
function getServices(user){
    return new Promise((resolve,reject)=>{
        console.log("Get service")
        setTimeout(()=>{
            if(user.username=='admin')
                resolve(['Email','XYZ','ABC']);
            else
                resolve(['Email'])

        },3000);
    })
}
function getServiceCost(services){
    return new Promise((resolve,reject)=>{
        console.log("Service cost")
        setTimeout(()=>{
            resolve(services.length*100);
        },2000);
    })
}
getUser(100)
    .then((res)=>getServices(res))
    .then((sres)=>getServiceCost(sres))
    .then((cres)=>console.log(cres));
