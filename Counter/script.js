const increase = document.getElementById("incbtn");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("reset");
const countLabel= document.getElementById("counter");


let count=0;

increase.onclick= function(){
      count++;
      countLabel.textContent= count;
}



decreasebtn.onclick= function(){
      count--;
      countLabel.textContent= count;
}


reset.onclick= function(){
      count=0;
      countLabel.textContent= count;
}
