// #1
String.prototype.reverse=function(){
    return this.split('').reverse().join('')
}
console.log('hello'.reverse());
//_____________________________________________

// #2
String.prototype.capitalizeString=function(){
    var arr=this.split('')
    return arr[0].toUpperCase()+arr.slice(1).join('')
    
}
console.log('qwewer'.capitalizeString());
//_______________________________________________

// #3
const input=document.querySelector("input")
const buttons=document.querySelectorAll("button")
const div=document.querySelectorAll('div')
function openMonth(e, monthName) {
        div.forEach(item => {
            item.style.display = "none";
        });
    const month=document.getElementById(monthName)
    month.style.display = "block";

        buttons.forEach(item=>{
            item.className = item.className.replace(" active", "");
        })
    e.currentTarget.className += " active";

    if(input.value.trim()!=''){
        const li=document.createElement("li")
        li.innerHTML=input.value
        month.append(li)
        input.value=''
    }
}





