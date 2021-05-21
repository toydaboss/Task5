
// querrySelectors
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let userInput = document.getElementById("tempBox");
let userYugiInput = document.getElementById("yugiBox");
let YugiResult = document.getElementById("yugiResult");
let resultOutputTemp = document.getElementById("result");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");


//functions
function openTemp(){
      content1.style.transform = "translateX(0)";
      content2.style.transform = "translateX(100%)";
      btn1.style.color = "#ff7846";
      btn2.style.color = "#000";
      content1.style.transitionDelay = "0.3s";
      content2.style.transitionDelay = "0s";
}
function openYugi(){
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(0%)";
      btn1.style.color = "#000";
      btn2.style.color = "#ff7846";
      content1.style.transitionDelay = "0s";
      content2.style.transitionDelay = "0.3s";
}
function submitTemp(){
      icon1.classList.add("load");
      function calc() {
            let userInp = parseInt(userInput.value,10);
      if (userInput.value === ""){
            error1.classList.add("active")
            error1.innerText = "Empty input field"
      }else if(Number.isNaN(userInp)){
            // display=hidden
            error1.classList.add("active")
            error1.innerText = `${userInput.value} is not a valid number but a/an ${typeof userInput.value}`
           // console.log(`${userInput.value} is not a valid number but a/an ${typeof userInput.value}`)
      }
      else{
            let ans = ((userInp-32)*(5/9)).toFixed(4);
            resultOutputTemp.innerHTML = ans + " °C";
            //console.log(ans);
      }
      }
      setTimeout(calc,2500)
}

function submitYugi(){
      icon2.classList.add("load");  
      function calc() {
            let value = parseInt(userYugiInput.value,10)
      let res=[]
      if(Number.isNaN(value)){
            error2.classList.add("active")
            error2.innerText= `invalid parameter: ${userYugiInput.value}`
      }else{
            for (let i=1;i<=value;i++){
                  if(i%2===0 && i%3===0 && i%5===0){
                    res.push("yu-gi-oh")
                  }
                  if((i%2==0)&&(i%3==0)&&!(i%5==0)){
                    res.push("yu-gi")
                  }
                  if((i%2==0)&&!(i%3==0)&&(i%5==0)){
                    res.push("yu-oh")
                  }
                  if((i%2==0)&&!(i%3==0)&&!(i%5==0)){
                    res.push("yu")
                  }
                  if(!(i%2==0)&&!(i%3==0)&&(i%5==0)){
                    res.push("oh")
                  }
                  if(!(i%2==0)&&(i%3==0)&&!(i%5==0)){
                    res.push("gi")
                  }
                  if(!(i%2==0)&&!(i%3==0)&&!(i%5==0)){
                    res.push(i)
                  }
            }
      }     
      YugiResult.innerText = "[" + res + "]";
      }
      setTimeout(calc,2500)
     // console.log(res)
}