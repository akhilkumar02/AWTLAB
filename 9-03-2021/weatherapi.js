function Report(){
    var request=new XMLHttpRequest();
    const city=document.getElementById("city").value
    var apikey='3e40e98d6fcecb8dc568fd94b6253d53'
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`

    request.open('GET',url,true);
    request.send();  
    request.onload=function(){
        var res=JSON.parse(request.response)
       var table=document.createElement("TABLE")
        table.border="1"
        var row=table.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        ch1.innerHTML="DateTime";
        ch2.innerHTML="Temperature";
            res.list.forEach((day)=>{
                var r1=table.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                c1.innerHTML=day.dt_txt;
                c2.innerHTML=day.main.temp;
            })
            
           var tableDiv=document.getElementById("tempTable")
            tableDiv.append(table);
     
       
    }

}