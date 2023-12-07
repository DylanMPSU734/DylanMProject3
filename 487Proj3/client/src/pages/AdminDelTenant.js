import axios from 'axios';
import './App.css';

function AdminDelTenant() {
  
  const back = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const deltenant = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
 
  return (
    <div class="container">
      <header>
      <h1> Delete Tenant</h1>

        <p>
            <div class="Back">
                <button onclick={back}>Back</button>
            </div>
        </p>
        <p>
            <label for="Id">Id</label>
            <input type="text" id="Id" name="Id" />
            <br />

        </p>
        <p>
            <div class="DelTenant">
                <button onclick={deltenant}>Delete</button>
            </div>
            <br />
        </p>
      </header>

    </div>

  );
}
 
export default AdminDelTenant;
