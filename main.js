
var x=0;
if(localStorage.getItem("theuserinthesession")!=null){
     x=1;
    
    
}






















if(window.location.href.indexOf("signup.html")>-1){

if(x==1)
window.location.href = "home.html";


var username=document.getElementById("insertuname");
var useremail=document.getElementById("insertename");
var userpassword=document.getElementById("insertpname");
var signupbutton=document.getElementById("su");
var arrofuser;
var thepointnum=-1;
if(localStorage.getItem("theusersinlocal")==null){
    arrofuser=[]; 
}else{

    arrofuser=(JSON.parse (localStorage.getItem("theusersinlocal")));
}

signupbutton.addEventListener("click",function(){
var objofusers={
    usernameobj:username.value,
    useremailobj:useremail.value,
    userpasswordobj: userpassword.value

};

if(localStorage.getItem("theusersinlocal")==null){

    arrofuser.push(objofusers);
    localStorage.setItem("theusersinlocal",JSON.stringify(arrofuser)); 
    document.getElementById("exists").innerHTML="";
    var thelastuser= arrofuser[arrofuser.length -1] ;
   localStorage.setItem("theuserinthesession",JSON.stringify(thelastuser));
  
  window.location.href = "home.html";




}else{
for(var x=0;x<arrofuser.length;x++){



   if((arrofuser[x].usernameobj.toLowerCase()== objofusers.usernameobj.toLowerCase() || arrofuser[x].useremailobj.toLowerCase()==objofusers.useremailobj.toLowerCase())||(objofusers.useremailobj==""||objofusers.usernameobj==""||objofusers.userpasswordobj=="")){
     

 thepointnum=0;
break;
}





}

}


if(thepointnum==-1){
    arrofuser.push(objofusers);
    localStorage.setItem("theusersinlocal",JSON.stringify(arrofuser)); 
    document.getElementById("exists").innerHTML="";
    var thelastuser= arrofuser[arrofuser.length -1] ;
   localStorage.setItem("theuserinthesession",JSON.stringify(thelastuser));
  
  window.location.href = "home.html";
}else if(thepointnum==0){
document.getElementById("exists").innerHTML="email or name already exists";
username.value="";
 useremail.value="";
userpassword.value="";
thepointnum=-1;
}

});
}

















if(window.location.href.indexOf("home.html")>-1){
    if(x==0){
        window.location.href = "blockpage.html";
    document.getElementById("thelogout").innerHTML="sgin in";

}



    if(localStorage.getItem("theuserinthesession")!=null){
    var thelastuserinhomepage=JSON.parse(localStorage.getItem("theuserinthesession"));
    document.getElementById("thelastuser").innerHTML=`welcome ${thelastuserinhomepage.usernameobj}`;
}else{
    document.getElementById("conta").classList.toggle("text-danger");
    document.getElementById("thelastuser").innerHTML=`sorry please login or sgin up `;
}

var thelogout=document.getElementById("thelogout");

thelogout.addEventListener("click",function(){
localStorage.removeItem("theuserinthesession");
window.location.href = "index.html";
});

}















if(window.location.href.indexOf("index.html")>-1){

    if(x==1)
    window.location.href = "home.html";



var verfiyname=document.getElementById("verfiyname");
var verfiypass=document.getElementById("verfiypass");
var si=document.getElementById("si");
var theverifyarray;
var secretnum=0;


si.addEventListener("click",function(){
    if(localStorage.getItem("theusersinlocal")==null){
        document.getElementById("incorrect").innerHTML="incorrect email or password";
    }else{

theverifyarray=JSON.parse(localStorage.getItem("theusersinlocal"));

for(var ii=0;ii<theverifyarray.length;ii++){

if(theverifyarray[ii].usernameobj.toLowerCase()== verfiyname.value.toLowerCase()&&theverifyarray[ii].userpasswordobj.toLowerCase()==verfiypass.value.toLowerCase()){
secretnum=1;
break;

}


                                                }

if(secretnum==1){

    if(localStorage.getItem("theuserinthesession")==null){
       
        localStorage.setItem("theuserinthesession",JSON.stringify(theverifyarray[ii]));   
        
        window.location.href = "home.html";
    }else{

    
localStorage.removeItem("theuserinthesession");

localStorage.setItem("theuserinthesession",JSON.stringify(theverifyarray[ii]));
window.location.href = "home.html";
}

                 }else{
    localStorage.removeItem("theuserinthesession");

    document.getElementById("incorrect").innerHTML="incorrect email or password";
                    }


                                           }

});


    
}

if(window.location.href.indexOf("blockpage.html")>-1){
    if(x==1)
    window.location.href = "home.html";
}