function Report(){
    var request=new XMLHttpRequest();
    const username=document.getElementById("user").value
    const url=`https://api.github.com/users/${username}/repos`
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var res=JSON.parse(request.response)
        var t=document.createElement("TABLE")
        t.border="2"
        var row=t.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        ch1.innerHTML="Repository"
        ch2.innerHTML="Description"
            res.forEach((element)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                c1.innerHTML=element.name;
                c2.innerHTML=element.description;
            })
           var tableDiv=document.getElementById("tempTable")
            tableDiv.append(t);
    }
   
}