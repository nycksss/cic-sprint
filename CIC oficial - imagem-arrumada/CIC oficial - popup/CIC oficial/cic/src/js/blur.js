

const ncnpj = document.querySelector('#ncnpj')

ncnpj.addEventListener('click',  () => {
    document.querySelector('#cnpj').classList.toggle('blurred')
    
})


const scc1 = document.querySelector('#scc1')
const n1 = document.querySelector('#n1')

scc1.addEventListener('click',  () => {
   n1.classList.toggle('blurred')
    
})

const scc2 = document.querySelector('#scc2')
const n2 = document.querySelector('#n2')

scc2.addEventListener('click',  () => {
    n2.classList.toggle('blurred')
    
})

const scc3 = document.querySelector('#scc3')
const n3 = document.querySelector('#n3')

scc3.addEventListener('click',  () => {
    n3.classList.toggle('blurred')
    
})

const scc4 = document.querySelector('#scc4')
const n4 = document.querySelector('#n4')

scc4.addEventListener('click',  () => {
    n4.classList.toggle('blurred')
    
})

const scc5 = document.querySelector('#scc5')
const n5 = document.querySelector('#n5')

scc5.addEventListener('click',  () => {
    n5.classList.toggle('blurred')
    
})

const scc6 = document.querySelector('#scc6')
const n6 = document.querySelector('#n6')

scc6.addEventListener('click',  () => {
    n6.classList.toggle('blurred')
    
})

const scc7 = document.querySelector('#scc7')
const n7 = document.querySelector('#n7')

scc7.addEventListener('click',  () => {
    n7.classList.toggle('blurred')
    
})

const scc8 = document.querySelector('#scc8')
const n8 = document.querySelector('#n8')

scc8.addEventListener('click',  () => {
    n8.classList.toggle('blurred')
    
})

const scc9 = document.querySelector('#scc9')
const n9 = document.querySelector('#n9')

scc9.addEventListener('click',  () => {
    n9.classList.toggle('blurred')
    
})



const scc10 = document.querySelector('#scc10')
const n10 = document.querySelector('#n10')

scc10.addEventListener('click',  () => {
    n10.classList.toggle('blurred')
    
})

 
const nall = document.querySelectorAll('.green')

const eyeall = document.querySelector('#eyeall')

const nall1 = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]

console.log(eyeall);

eyeall.addEventListener('click', () => {
    n1.classList.toggle('blurred')
    n2.classList.toggle('blurred')
    n3.classList.toggle('blurred')
    n4.classList.toggle('blurred')
    n5.classList.toggle('blurred')
    n6.classList.toggle('blurred')
    n7.classList.toggle('blurred')
    n8.classList.toggle('blurred')
    n9.classList.toggle('blurred')
    n10.classList.toggle('blurred')
})

