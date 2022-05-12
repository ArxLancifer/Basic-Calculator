const myCalculator = {
    fValue:0,
    sValue:0,
    '+':function(){
        return this.fValue+this.sValue;
    },
    '-':function(){
        return this.fValue - this.sValue;
    },
    '*':function(){
        return this.fValue * this.sValue;
    },
    '/':function(){
        return this.fValue / this.sValue;
    }

}
const currentCacl = document.querySelector('.currentCalculation') ;
const lastCalc = document.querySelector('.lastCalculation');
let valuesArray = [];
let operatorClicked = false;
let dot = false;
//ALL BUTTON LISTENERS
document.querySelectorAll(".btnNum").forEach(btn =>{
    btn.addEventListener("click", btnFun)
})
document.querySelectorAll(".btnOper").forEach(btn =>{
    btn.addEventListener("click", operFun)
})
document.querySelector(".btnDot").addEventListener('click' ,(event)=>{
    if(!dot){
        currentCacl.textContent += event.target.textContent;
        dot = true;
    }
})

//BUTTON LISTENER FUNCTION (NUMBER)
function btnFun(event){
    if(currentCacl.textContent === lastCalc.textContent){
        currentCacl.textContent = '';
    }
    document.querySelector('.currentCalculation').textContent += event.target.textContent;
    
}
//BUTTON LISTENER FUNCTION FOR OPERATORS
function operFun(event){
    if(!currentCacl.length <=0 || operatorClicked == false ){
        //console.log("opa re")
        //console.log(currentCacl.textContent)
        currentCacl.textContent += event.target.textContent;
        operatorClicked = true;
        dot = false;
    }
}

document.querySelector('.proccess').addEventListener('click', ()=>{
    if(currentCacl.textContent.length <=0 || operatorClicked == false){
        currentCacl.textContent = "Invalid Values ";
    }else{
      valuesArray = currentCacl.textContent.split(/([-*+/])/g);
      //console.log(valuesArray)
    }
})

document.querySelector(".proccess").addEventListener('click',()=>{
    myCalculator.fValue = +valuesArray[0];
    myCalculator.sValue = +valuesArray[2];
    myCalculator[valuesArray[1]]
    //console.log(myCalculator);
    //console.log(myCalculator[valuesArray[1]]())
    lastCalc.textContent = `${currentCacl.textContent} = ${myCalculator[valuesArray[1]]()}`
    currentCacl.textContent += ` = ${myCalculator[valuesArray[1]]()}`
    operatorClicked = false;
    dot = false;

})

