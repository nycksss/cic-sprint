const dark= document.querySelector('#mododark')
const lua= document.querySelector('#lua')
const contrast= document.querySelector('#contrast')
const sol= document.querySelector('#sol')
const body = document.querySelector('body')



lua.addEventListener('click', () =>{
    lua.classList.toggle('none')
    sol.classList.toggle('none')
    body.classList.toggle('dark')
    body.classList.remove('contrast')
    // faixa.classList.toggle('dark')
    // number.classList.toggle('dark')
})

sol.addEventListener('click', () =>{
    lua.classList.toggle('none')
    sol.classList.toggle('none')
    body.classList.toggle('dark')
    body.classList.remove('contrast')
    // faixa.classList.toggle('dark')
    // number.classList.toggle('dark')
})


contrast.addEventListener('click', () =>{
    body.classList.toggle('contrast')
    // faixa.classList.toggle('dark')
    // number.classList.toggle('dark')
})



