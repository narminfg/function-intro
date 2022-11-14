//task1
function myFunction(){
    var text="Welcome to our page.press a button!\nEither OK or Cancel "
  
     if(confirm(text)==true){
   document.body.style.backgroundColor='blue'
 }
    else{
    document.body.style.backgroundColor='pink'
 }

 }
 myFunction();


//task2
function show(){
   var person = prompt("Please enter your age");
   if (person <18) {
       alert('your are still a child!')
    }
   else{
       alert('welcome to our page!')
   }
}
show();

//task3
function Group(){
   var input=document.getElementById('inp')
   var value=input.value
   document.getElementById('group name').innerHTML=value
   var newval=value.slice(-3)
  if (newval[0]=='1') {
      document.getElementById('group name').style.color='yellow'
   }
   else if (newval[0]=='2') {
         document.getElementById('group name').style.color='red'
    }
   else if (newval[0]=='3'){
      document.getElementById('group name').style.color='black'
   }
}