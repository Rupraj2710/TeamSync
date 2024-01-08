
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import EmployeeCreation from './components/EmployeeCreation';
import EmployeeAttendance from './components/EmployeeAttendance';
import EmployeeLeaves from './components/EmployeeLeaves';
import SalaryAdvance from './components/SalaryAdvance';
import SalaryVouchers from './components/SalaryVouchers';
import Services from './components/Services';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className='nav-item'>
                  <Link className='nav-link' to='/EmployeeCreation'>EmployeeCreation</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/EmployeeAttendance'>Attendance</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/EmployeeLeaves'>Leaves</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/SalaryAdvance'>SalaryAdvance</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/SalaryVouchers'>SalaryVouchers</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/Services'>Services</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/EmployeeCreation' element={<EmployeeCreation></EmployeeCreation>} />
          <Route path='/EmployeeAttendance' element={<EmployeeAttendance></EmployeeAttendance>} />
          <Route path='/EmployeeLeaves' element={<EmployeeLeaves></EmployeeLeaves>} />
          <Route path='/SalaryAdvance' element={<SalaryAdvance></SalaryAdvance>} />
          <Route path='/SalaryVouchers' element={<SalaryVouchers></SalaryVouchers>} />
          <Route path='/Services' element={<Services></Services>} />





        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
