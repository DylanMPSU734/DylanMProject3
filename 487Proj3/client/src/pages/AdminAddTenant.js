import axios from 'axios';
import './App.css';

function AdminAddTenant() {
  
  const back = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const addtenant = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
 
  return (
    <div class="container">
      <header>
      <h1> Add Tenant</h1>

        <p>
            <div class="Back">
                <button onclick={back}>Back</button>
            </div>
        </p>
        <p>
            <label for=" Username">Username</label>
            <input type="text" id="Username" name="Username" />
            <br />
            <lable for="Password">Password</lable>
            <input type="text" id="Password" name="Password" />
            <br />
            <label for="Name">Name</label>
            <input type="text" id="Name" name="Name" />
            <br />
            <lable for="Phone">Phone Num</lable>
            <input type="text" id="Phone" name="Phone" />
            <br />
            <label for=" Email">Email</label>
            <input type="text" id="Email" name="Email" />
            <br />
            <lable for="Apartment">Apartment</lable>
            <input type="text" id="Apartment" name="Apartment" />
            <br />
        </p>
        <p>
            <div class="AddTenant">
                <button onclick={addtenant}>Add</button>
            </div>
            <br />
        </p>
      </header>

    </div>

  );
}

export default AdminAddTenant;
