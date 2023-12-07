import axios from 'axios';
import './App.css';

function AdminAddStaff() {
  
  const back = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const addstaff = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
 
  return (
    <div class="container">
      <header>
      <h1> Add Staff</h1>

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
        </p>
        <p>
            <div class="AddStaff">
                <button onclick={addstaff}>Add</button>
            </div>
            <br />
        </p>
      </header>

    </div>

  );
}

export default AdminAddStaff;
