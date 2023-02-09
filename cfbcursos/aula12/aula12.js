const objts1=document.getElementsByTagName("div")
const objts2=[...document.getElementsByTagName("div")]

objts2.forEach(element => {
    element.innerHTML="curso"
});

console.log(objts1)
console.log(objts2)