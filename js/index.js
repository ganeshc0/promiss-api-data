var A;


function completeProject()
{
 return new Promise(function(resolve,reject){
 var status=true;
 console.log('hello') ;
//  if(status)
//    resolve();
//  else   
//    reject();
  })

 } 
//  completeProject().then(function(){
//     console.log('complete project');
//  }).catch(function(){
//     console.log('faield project');
//  });/
// console.log(completeProject());

fetch('https://randomuser.me/api').then(function(res){
     data = res.json();
    return data;

}).then(function(data){
    console.log(data);
     A=data.results[0];
   
    var email =A.email;
    var fullName ="I am <br>"+A.name.first+" "+A.name.last;
    var img =A.picture.large;
    var number =A.phone;
    var location =A.location.state+" "+A.location.city+" "+A.location.country+" "+A.location.postcode;
    var dob = A.dob.date+"  "+A.dob.age;
    var password =A.login.password;
    document.querySelector('#img').src= img;
    document.querySelector('#content').innerHTML= fullName;
    document.querySelector('#email').innerHTML= email;
    document.querySelector('#number').innerHTML= number;
    document.querySelector('#location').innerHTML= location;
    document.querySelector('#dob').innerHTML= dob;
    document.querySelector('#pass').innerHTML= password;
    

}).catch(function(error){
    console.log('api is not found');
});


document.querySelector('#div1').addEventListener('mouseover',function(res)
{
    
    var fullName = A.name.first+""+A.name.last;
    var data =document.querySelector('#content')
     data.innerHTML="Hi ,My Name Is <br>"+fullName;
    
})
document.querySelector('#div2').addEventListener('mouseover',function(res)
{
    
    var email = A.email;
    var data =document.querySelector('#content')
     data.innerHTML="My Email id <br>"+email;
    
})
document.querySelector('#div3').addEventListener('mouseover',function(res)
{
    var dob = A.dob.date+"  "+A.dob.age;
    var data =document.querySelector('#content')
     data.innerHTML= "My Date Of Birthday is<br>"+dob;   
})
document.querySelector('#div4').addEventListener('mouseover',function(res)
{
    var number =A.phone;
    var data =document.querySelector('#content')
     data.innerHTML= "My Mobile Number is <br>"+number;   
})
document.querySelector('#div5').addEventListener('mouseover',function(res)
{
    var location =A.location.state+" "+A.location.city+" "+A.location.country+" "+A.location.postcode;
    var data =document.querySelector('#content')
     data.innerHTML="My Address is <br>"+ location;   
})
document.querySelector('#div6').addEventListener('mouseover',function(res)
{
    var password =A.login.password;
    var data =document.querySelector('#content')
     data.innerHTML="My Password <br>"+ password;   
})



    


