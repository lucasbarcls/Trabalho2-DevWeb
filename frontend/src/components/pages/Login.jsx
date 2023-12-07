import React from 'react'
 import "../../index.css"

export default function Login() {
  return (
    <div className='containerforms'>
        <form>
            <div id='header'>Login</div>
            <div className='containerInput'>

                <div>

                    <label>Username</label>

                </div>
                
                <input type='username' placeholder='Nome de Usuário'/>
            </div>


            <div className='containerInput'>
                <div><label>Password</label></div>
                <input  type='password' placeholder='Senha'/>

            </div>
                <button id='btnconfirma'>Login</button>
        </form>

    </div>
  )
}
