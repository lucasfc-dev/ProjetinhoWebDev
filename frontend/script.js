async function getDados() {
    const resposta = await fetch('http://localhost:8000/users', {
        headers: {
            method: 'GET'
        }
    })
    const dados = await resposta.json()
    return dados
}

getDados()