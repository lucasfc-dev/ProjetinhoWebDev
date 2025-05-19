async function getDados() {
    const resposta = await fetch('http://localhost:8000/users', {
        method: 'GET'
    })
    const dados = await resposta.json()
    return dados
}

async function exibirDados() {
    const listaUsuarios = await getDados()

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

async function adicionarUsuario(evento) {
    //obter os dados do HTML
    //cria um obj com esses dados
    //requisicao para add os dados no back
    evento.preventDefault()
    //tira o comportamento de atualizacao da pagina
    const usernameUsuario  = document.getElementById("name").value
    const emailUsuario  = document.getElementById("email").value
    const novoUsuario = {
        username: usernameUsuario,
        email: emailUsuario
    }
    console.log(novoUsuario)
    const resposta = await fetch('http://localhost:8000/users', {
        method: 'POST',
        body: JSON.stringify(novoUsuario)
    })
}