import React from 'react'
import "../../../src/index.css"

export default function Register() {
  return (
    <div className='containerforms'>
        <form>
            <div id='header'>Registro</div>
            <div className='containerInput'>

                <div>

                    <label>Username</label>

                </div>
                
                <input type='username' placeholder='Nome de Usuário'/>
            </div>

            <div className='containerInput'>
                <div>

                    <label>Email</label>

                </div>
                <input  type='email' placeholder='Email'/>
            </div>

            <div className='containerInput'>
                <div><label>Password</label></div>
                <input  type='password' placeholder='Senha'/>

            </div>
                <button id='btnconfirma'>Registrar</button>
        </form>

    </div>
  )
}
