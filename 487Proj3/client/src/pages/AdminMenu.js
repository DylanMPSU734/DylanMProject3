import axios from 'axios';
import './App.css';

function AdminMenu() {
  
  const logout = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const addtenant = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const edittenant = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const deltenant = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const addstaff = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const delstaff = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
  
  return (
    <div class="container">
      <header>
      <h1> Admin Menu</h1>
        <p>
            <div class="LogOut">
                <button onclick={logout}>Logout</button>
            </div>
        </p>
        <p>
            <div class="AddTenant">
                <button onclick={addtenant}>Add Tenant</button>
            </div>
            <div class="EditTenant">
                <button onclick={edittenant}>Edit Tenant</button>
            </div>
            <div class="DelTenant">
                <button onclick={deltenant}>Delete Tenant</button>
            </div>
            <div class="AddStaff">
                <button onclick={addstaff}>Add Staff</button>
            </div>
            <div class="delStaff">
                <button onclick={delstaff}>Delete Staff</button>
            </div>
        </p>
      </header>

    </div>
  );
}

export default AdminMenu;
