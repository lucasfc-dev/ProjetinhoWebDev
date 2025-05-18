from fastapi import FastAPI #modulo que faz parte de uma biblioteca nesse caso dentro do py
app = FastAPI() # chama a classe que ja veio pronta 
@app.get("/")
async def home(): #"async" cria uma funcao assincrona (roda coisas paralelamente e ao mesmo tempo)
    return "rota home"

@app.get("/oi") # "@app" chamo a funcao dentro da classe definida no app o @ [e um decorator = executa ex:/oi e executa o que vem depois] ".get()" uma metodo que recebe um caminho, ele ja e uma funacao dentro do fastAPI
async def home_oi(): #"async" cria uma funcao assincrona (roda coisas paralelamente e ao mesmo tempo)
    corina = {"username": "Corina", "email": "corina@rede.ulbra.br"} 
    negolas = {"username": "Negolas", "email": "negolas@rede.ulbra.br"} 
    levi = {"username": "Levi", "email": "levi@rede.ulbra.br"}
    lista_usuario = [corina, negolas, levi]
    return lista_usuario


