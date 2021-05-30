function Report(){
    var request=new XMLHttpRequest();
    const country=document.getElementById("country").value
    const url=`https://api.covid19api.com/live/country/${country}`  
    request.open('GET',url,true);
    request.send();
   
    request.onload=function(){
        var res=JSON.parse(request.response)
        var t=document.createElement("TABLE")
        t.border="1"
        var row=t.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        var ch3=row.insertCell(-1);
        ch1.innerHTML="Active"
        ch2.innerHTML="Recovered"
        ch3.innerHTML="Deaths"
            res.forEach((day)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                var c3=r1.insertCell(-1);
                c1.innerHTML=day.Active;
                c2.innerHTML=day.Recovered;
                c3.innerHTML=day.Deaths;
            })
          var tableDiv=document.getElementById("tempTable")
            tableDiv.append(t);
    }
}