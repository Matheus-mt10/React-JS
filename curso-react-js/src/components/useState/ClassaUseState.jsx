import { useState } from "react";

function ClassaUseState(params) {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name);
        console.log('cadastrou o usuário');
    }

    const [name,setName] = useState()
    
    return(
        <form onSubmit={cadastrarUsuario}>
            <h1>Meu cadastro</h1>
            <div>
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email"
                onChange={(e)=> setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
        </form>

    )
}

export default ClassaUseState