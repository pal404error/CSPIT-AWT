var nam = document.getElementById('name') ; 
var uname = document.getElementById('uname') ; 
var cpass = document.getElementById('cpass') ; 
var gender = document.getElementsByName('gender') ; 
var num = document.getElementById('num') ; 
var email = document.getElementById('email') ; 
var state = document.getElementById('state') ; 
var agree = document.getElementById('agree') ; 
var btn = document.getElementById('btn') ; 


if(btn)
btn.addEventListener("click", err);

function err(){
        if(nam.value == '' || uname.value == '' || cpass.value == '' || gender.value == '' || num.value == '' || email.value == '' || state.value == '' || agree.value == '')
        {alert("*All fields should be filled") ;}
        else{
                console.log('jhsbvhfd')
        }

        if (isString(nam.value)){
                console.log('success')
        }else{
                document.getElementById('error1').style.color = "red";
                document.getElementById('error1').innerHTML = 'Should be string'
        }
        if (uname.value.isString ) {
                
        } else {
                
        }
}

function isString(x) {
        return Object.prototype.toString.call(x) === '[object String]';
    }
     
