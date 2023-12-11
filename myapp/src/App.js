import Functionalcom from './Component/Functionalcom.js';
import './App.css';
import ClassComponent from './Component/ClassComponent.js';
import OneExport from './Component/OneExport.js';
import Greeting from './Component/Greeting.jsx';
function App() {
  return (
    <div>
      <Functionalcom />
      <ClassComponent />
      <OneExport />
      <Greeting />
    {/* <div className="form">
      <form>

      <div>
      <h1>STUDENT FORM</h1>
    <label>first name: </label>
    <input type="text" id="fname"name="firstname" placeholder="first name"></input>
    </div>
    <br />
    <div>
    <label>last name: </label> 
    <input type="text"id="lname" name="lastname" placeholder="last name"></input>
    </div>
    <br />
    <div>
    <label>phone number: </label> 
    <input type="number" name="phone" pattern="[0-9]{10}" step="3" />
    </div>
    <br />
    <div>
    <label>email: </label> 
    <input type="number and text" name="email" />
    </div>
    <br />
    <div>
    <label>address: </label> 
    <input type="number and text" name="address" />
    </div>
    <br />
    <div>
    <label>qualification: </label>
    <input type="text" pattern='{10}'></input>
  </div>
  <br />
  <div>
    <label>skills learned: </label>
    <textarea></textarea>
  </div>
  <br />
  <div>
  <label>gender: </label>
  <select>
    <option value="male">male</option>
    <option value="female">female</option>
    <option value="others">others</option>
  </select>
  </div>
  <br />
  <div>
    <label for date max>Date Of Birth: </label>
    <input type="date" name="date max" id ="date max" />
    <br />
    </div>
    <br />
    <div>
      <label>department</label>
      <input type="radio" name="department" id="department" value="CSE"/>CSE
      <input type="radio" name="department" id="department" value="IT"/>IT
      <input type="radio" name="department" id="department" value="ECE"/>ECE
      <input type="radio" name="department" id="department" value="EEE"/>EEE
      <input type="radio" name="department" id="department" value="CIVIL"/>CIVIL
      <input type="radio" name="department" id="department" value="MECH"/>MECH
    </div>
    <br />
    <div>
    <label>programming languages known</label>
    <br />
    <input type="checkbox" name="c++" id="c++" />
    <label for="c++">c++</label>
    <input type="checkbox" name="c" id="c" />
    <label for="c">c</label>
    <input type="checkbox" name="java" id="java" />
    <label for="java">java</label>
    <input type="checkbox" name="python" id="python" />
    <label for="python">python</label>
    <input type="checkbox" name="html" id="html" />
    <label for="html">html</label>
    <input type="checkbox" name="css" id="css" />
    <label for="css">css</label>
    <input type="checkbox" name="java script" id="java script" />
    <label for="java script">java script</label>
    <br />
    
    </div>
    <br></br>
    <input type='submit'></input>
        </form>
    </div> */}
    </div>
  );
}

export default App;


