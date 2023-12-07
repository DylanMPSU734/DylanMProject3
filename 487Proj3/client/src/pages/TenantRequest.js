import axios from 'axios';
import './App.css';

function TenantRequest() {
  
  const logout = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const request = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
 
  return (
    <div class="container">
      <header>
      <h1> Maintenence Request Form</h1>
        <p>
            <div class="Logout">
                <button onclick={logout}>Logout</button>
            </div>
            <br />
        </p>
        <p>
            <label for="Location">Location</label>
            <input type="text" id="Location" name="Location" />
            <br />
            <lable for="Description">Description</lable>
            <textarea id="Description" name="Description" rows="2" cols="50"></textarea>
            <br />
            <label for=" Photo">Photo</label>
            <input type="text" id="Photo" name="Photo" />

        </p>
        <p>
            <div class="MakeRequest">
                <button onclick={request}>Submit</button>
            </div>
            <br />
            <lable for="Error"></lable>
        </p>
      </header>

    </div>

  );
}
 
export default TenantRequest;
