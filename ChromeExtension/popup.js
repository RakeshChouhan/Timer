function timer(){
  var hours = document.getElementById("hour").value;
  var minutes = document.getElementById("minute").value;
  var second = document.getElementById("second").value;
  var msg = document.getElementById("msg").value;
 var inputform = document.getElementById("inputform");
 
 inputform.style.display= "none";
 var timerForm = document.getElementById("timerContainer");
 timerForm.style.display="";
 startTimer(hours, minutes, second,msg);
  
  
}

var timer_obj;
window.onload =function(){
	if(timer_obj){
		clearInterval(timer_obj);
	}
	 var timerForm = document.getElementById("timerContainer");
	 timerForm.style.display="none";
	document.getElementById("setTimer").onclick = function(){
		timer();
	}
	
	document.getElementById("lnkSetTime").onclick = function(){
		if(timer_obj){
			clearInterval(timer_obj);
		}
		var inputform = document.getElementById("inputform");
		 inputform.style.display="";
		 var timerForm = document.getElementById("timerContainer");
		 timerForm.style.display="none";
		 
	}
}

function startTimer(hours,minutes,seconds,message){

	timer_obj=setInterval(function(){
    if(seconds>0){
      seconds--;
    }else{
      seconds =59;
      if(minutes>0){
          minutes--;
      }else{
          minutes=59;
          if(hours-1 > 0);
          hours--;
      }
    }
    
     
     if(hours==0 && minutes==0 && seconds==0){
       document.getElementById("timer").innerHTML = "<h3>"+message+"</h3>";
        
     }else{
    	 document.getElementById("timer").innerHTML = "";
    	 document.getElementById("timer").innerHTML="<h3>"+hours+":"+minutes+":"+seconds
    	 
     }
    
    
    
  },1000);
}