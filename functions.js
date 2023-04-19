function multiplicationTable(num){
  if(isNaN(num))
{
  console.error("Error! Enter a number.");
     alert("Error! Enter a number.");
       document.getElementById("output").innerHTML="";
       document.getElementById('number').value="";
}
else
{
  let text="";
  let cout="";
  for(let i=1;i<=10;i++)
  {
    text+=`${num} x ${i} = ${i*num} <br>`;
    cout+=`${num} x ${i} = ${i*num}\n`;
  }
  console.log(cout);
  document.getElementById("output").innerHTML=`<br>Multiplication Table For ${num} <br>`+text;
  document.getElementById('number').value="";
}
}


function callFunc(){
let num=Number.parseInt(document.getElementById('number').value);
multiplicationTable(num);
}