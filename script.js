const inputPassword = document.querySelector('#password')
const inputLangth =document.querySelector('#password-length')
const uppercasecheck = document.querySelector("#uppercase-check")
const numbercheck = document.querySelector("#number-check")
const simbolcheck = document.querySelector("#simbol-check")

const uppercasecheckEl = document.querySelector("#uppercase-check")
const numbercheckEl = document.querySelector("#number-check")
const simbolcheckEl = document.querySelector("#simbol-check")

const securItyindicatorBarEl = document.querySelector("#security-indicator-bar")

document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)

let inputLangthValue=16

function generatePassword(){

let chars ='abcdefghjkmnpqrstuvwxyz'
const uppercasechar='ABCDEFGHJKLMNPQRSTUVWXYZ'
const numberchar='123456789'
const symbolchar= '?!@&*()[]'


if(uppercasecheckEl.checked){
chars+=uppercasechar
}

if(numbercheck.checked){
    chars+=numberchar
    }

if(symbolchar.checked){
        chars+=symbolchar
        }



let password = ''
for(let i = 0;i <inputLangthValue ;i ++){
const randomNumber = Math.floor(Math.random()* chars.length )
password += chars.substring(randomNumber,randomNumber+1)
}
inputPassword.value=password

calculateQyalit()

}
function calculateQyalit(){


    const percent=Math.round((inputLangthValue/64)*25 + (uppercasecheckEl.checked ?20:0) + (numbercheckEl.checked ? 25:0) + (simbolcheckEl.checked? 30:0))
    securItyindicatorBarEl.style.width = ` ${percent}% `
    if(percent > 70){
 securItyindicatorBarEl.classList.add('safe')
 securItyindicatorBarEl.classList.remove('warning')
 securItyindicatorBarEl.classList.remove('critical')
    } else if(percent>50){
        securItyindicatorBarEl.classList.add('warning')
        securItyindicatorBarEl.classList.remove('safe')
        securItyindicatorBarEl.classList.remove('critical')
    }else{
        securItyindicatorBarEl.classList.add('critical')
        securItyindicatorBarEl.classList.remove('safe')
        securItyindicatorBarEl.classList.remove('warning')
    }

}

uppercasecheckEl.addEventListener('click',generatePassword)
numbercheckEl.addEventListener('click',generatePassword)
simbolcheckEl.addEventListener('click',generatePassword)

function copy(){
    navigator.clipboard.writeText(inputPassword.value)
} 

inputLangth.addEventListener('input',function(){
    inputLangthValue=inputLangth.value
    generatePassword()
    calculateQyalit()
document.querySelector('#password-length-text').innerText=inputLangthValue

   
    })



generatePassword()
calculateQyalit()