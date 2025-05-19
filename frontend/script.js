async function getDados() {
    const resposta = await fetch('http://localhost:8000/users', {
        headers: {
            method: 'GET'
        }
    })
    const dados = await resposta.json()
    return dados
}

async function exibirDados() {
    const listaUsuarios = [
    {"username": "Corina", "email": "corina@rede.ulbra.br"}, 
    {"username": "Negolas", "email": "negolas@rede.ulbra.br"},
    {"username": "Levi", "email": "levi@rede.ulbra.br"},
    ]

    const ulUsuarios = document.getElementById("ulUsuarios")
    //percorrer a lista de usuarios
    //atribuir o valor da lista de usuarios para um li
    //adicionar a li na ul
    for (let i = 0; i < listaUsuarios.length; i++) {
        console.log(listaUsuarios[i])
        const emailUsuario = listaUsuarios[i].email
        const usernameUsuario = listaUsuarios[i].username
        const liUsuario = document.createElement("li") 
        //createElement("") posso criar qualquer elemendo podendo ser recebido por uma variavel
        liUsuario.innerHTML = "Usuario: " + usernameUsuario + "<br>" + " E-mail: " + emailUsuario
        //Html me permite adicionar o <br> e também string
        ulUsuarios.appendChild(liUsuario)
        //child - criança
    }
}

exibirDados()

function botaoLog() {
    console.log("Click")
    window.alert("Deu certo!")
}

