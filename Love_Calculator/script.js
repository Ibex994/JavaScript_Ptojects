function calculateLove(){
    const name=document.getElementById("name").value.trim();
    const pname=document.getElementById("pname").value.trim();

    if(name==="" || pname===""){
        alert("Please Check If You Entered Both Names ");
    }
    else{
        const percent=Math.floor(Math.random()*101);
        const result=document.getElementById("result");

        result.innerHTML=`${name} and ${pname}'s Love Percentage: ${percent}%.`;

        if(percent<30){
            result.innerHTML += "<br>It Is Not A Great Match Keep Looking";
        }else if(percent<50 && percent>=30)
        {
            result.innerHTML += "<br>You Guys Can Work It Out.";
        }else if(percent<70 && percent>=50)
        {
            result.innerHTML += "<br>You Guys Are A Great Match.";
        }
        else if(percent<100 && percent>=70)
        {
            result.innerHTML += "<br>A Perfect Match";
        }
        }
}  
    