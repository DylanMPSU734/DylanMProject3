import axios from 'axios';
import './App.css';

function StaffMenu() {
  
  const logout = () =>{
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }

  const search = () => {
    axios.get('http://localhost:8080').then(() =>{
      console.log('test');
    })
  }
 
  return (
    <div class="container">
      <header>
      <h1> Staff Portal</h1>
        <p>
            <div class="Logout">
                <button onclick={logout}>Logout</button>
            </div>
            <br />
        </p>
        <h2>Search</h2>
        <p>
            <label for="Status">Status</label>
            <input type="text" id="Status" name="Status" />
            
            <lable for="Apartment">Apartment</lable>
            <input type="text" id="Apartment" name="Apartment" />

            <label for="Location">Location</label>
            <input type="text" id="Location" name="Location" />

            <br />
            <label for="DateStart">From</label>
            <input type="text" id="Status" name="Status" />

            <label for="DateEnd">Until</label>
            <input type="text" id="DateEnd" name="DateEnd" />

            <br />
            <div class="Search">
                <button onclick={search}>Search</button>
            </div>
            <br />

        </p>
        <p>
            <table id="requests" border="1">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Opened</th>
                        <th>Tenant</th>
                        <th>Apartment</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Photo </th>
                    </tr>
                </thead>

            </table>
        </p>
      </header>

    </div>

  );
}
 
export default StaffMenu;
