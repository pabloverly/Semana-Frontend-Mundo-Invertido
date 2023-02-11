
const txtName = document.getElementById('txtName');
const txtemail = document.getElementById('txtName')
const txtlevel = document.getElementById('txtName')
const txtcharacter = document.getElementById('txtName')
const btEnviar = document.getElementById('btEnviar')

btEnviar.addEventListener('click',()=>{
   const objeto = {
    name: txtName.value,
    email: txtemail.value,
    level: txtlevel.value,
    caracter:txtcharacter.value
   }
   console.log(objeto)
})
