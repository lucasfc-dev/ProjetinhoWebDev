from fastapi import FastAPI, Request #modulo que faz parte de uma biblioteca nesse caso dentro do py
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI() # chama a classe que ja veio pronta 

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)



lista_usuario = [
    {"username": "Corina", "email": "corina@rede.ulbra.br"}, 
    {"username": "Negolas", "email": "negolas@rede.ulbra.br"},
    {"username": "Levi", "email": "levi@rede.ulbra.br"},
]

@app.get("/")
async def home(): #"async" cria uma funcao assincrona (roda coisas paralelamente e ao mesmo tempo)
    return "rota home"

@app.get("/users") # "@app" chamo a funcao dentro da classe definida no app o @ [e um decorator = executa ex:/oi e executa o que vem depois] ".get()" uma metodo que recebe um caminho, ele ja e uma funcao dentro do fastAPI
async def get_users(): #"async" cria uma funcao assincrona (roda coisas paralelamente e ao mesmo tempo)
    return lista_usuario

@app.post("/users")
async def add_user(request: Request):
    user = request.json()
    lista_usuario.append(user)
    print(lista_usuario)

