import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";
import "./Login.css";

const login = () => {

  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    //alert("Enviando os dados " + username+ ' - '+Password );
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Acesse o Sistema</h1>
          <div className="input-field">
            <input type='email' placeholder='Email...' onChange={(e)=>setUsername(e.target.value)}></input>
            <FaUser className='icon' />
          </div>
          
          <div className="input-field">
            <input type='password' placeholder='Senha...' onChange={(e)=>setPassword(e.target.value)}></input>
            <FaLock className='icon' />
          </div>

          <div className="recall-forget">
            <label>
            <input type="checkbox" />
            Lembre de mim
            
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <div>
            <button type='submit'>Entrar</button>
          </div>

          <div className="signup-link">
            <p> 
              Ainda não tem uma conta?
            </p>
            <a href="#">Registre-se</a>
          </div>

        </form>
    </div>
  )
}

export default login
