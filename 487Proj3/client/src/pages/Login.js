import axios from 'axios';

function Login() {
  
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')

  const login = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Login</h1>
      <p>
        <label for="Username">Username</label>
        <input id="Username" type= "text" />
        <br />
        <label for="Password">Password</label>
        <input id="Password" type= "password" />
      </p>
      <p>
        <button onClick={login}>Login</button>
      </p>
      </header>
    </div>
  );
}

export default Login;
