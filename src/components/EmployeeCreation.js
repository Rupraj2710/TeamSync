import React, { useState } from 'react';
import axios from 'axios';

const EmployeeCreation = () => {

    let [employeeList, setEmployeeList] = useState([]);
    let [employeeobj, setEmployeeObj] = useState({
        "empId": 0,
        "empName": "",
        "empContactNo": "",
        "empAltContactNo": "",
        "empEmail": "",
        "addressLine1": "",
        "addressLine2": "",
        "pincode": "",
        "city": "",
        "state": "",
        "bankName": "",
        "ifsc": "",
        "accountNo": "",
        "bankBranch": "",
        "salary": 0
    })

    const changeFormValue = (event, key) => {
        debugger;
        setEmployeeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const getAllEmployee = async () => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee");
        setEmployeeList(result.data.data);
    }
    const saveEmployee = async () => {
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee", employeeobj);
        debugger;
        if (result.data.result) {
            alert("Employee Created Successfully")
            getAllEmployee()
        } else {
            alert(result.data.message)
        }
    }
    const editEmployee = async (id) => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid=" + id);
        debugger;
        if (result.data.result) {
            setEmployeeObj(result.data.data)

        } else {
            alert(result.data.message)
        }
    }

    const updateEmployee = async () => {
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee", employeeobj);
        debugger;
        if (result.data.result) {
            alert("Employee Updated Successfully")
            getAllEmployee()
        } else {
            alert(result.data.message)
        }
    }
    

    const deleteEmployee = async (id) => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empid=" + id);
        debugger;
        if (result.data.result) {
            alert("Employee Deleted Successfully")
            getAllEmployee()
        } else {
            alert(result.data.message)
        }
    }

    const resetForm = () => {
        setEmployeeObj({
            "empId": 0,
            "empName": "",
            "empContactNo": "",
            "empAltContactNo": "",
            "empEmail": "",
            "addressLine1": "",
            "addressLine2": "",
            "pincode": "",
            "city": "",
            "state": "",
            "bankName": "",
            "ifsc": "",
            "accountNo": "",
            "bankBranch": "",
            "salary": 0
        });
    }


    return (
        <div className="container mt-3">
            <div className='row'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            <div className='row'>
                                <div className='col-6'>
                                    Employee List
                                </div>
                                <div className='col-6 text-end'>
                                    <button className='btn btn-sm btn-primary' onClick={getAllEmployee}>Load Employees</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Contact No</th>
                                        {/* <th>Alt No</th> */}
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employeeList.map((item, index) => {
                                            return (<tr>
                                                <td> {index + 1} </td>
                                                <td> {item.empName} </td>
                                                <td>  {item.empContactNo} </td>
                                                {/* <td>  {item.empAltContactNo} </td> */}
                                                <td>  {item.empEmail} </td>
                                                <td>  {item.city} </td>
                                                <td>
                                                    <button className='btn btn-sm btn-primary' onClick={() => { editEmployee(item.empId) }}>Edit</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-sm btn-danger' onClick={() => { deleteEmployee(item.empId) }}>Delete</button>

                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Create/Edit Employee
                        </div>
                        <div className='card-body'>
                            <div className='row mb-2'>
                                <div className='col-6'>
                                    <label>Name</label>
                                    <input type='text' value={employeeobj.empName} onChange={(event) => { changeFormValue(event, 'empName') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Contact No</label>
                                    <input type='text' value={employeeobj.empContactNo} onChange={(event) => { changeFormValue(event, 'empContactNo') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> Alt Contact No</label>
                                    <input type='text' value={employeeobj.empAltContactNo} onChange={(event) => { changeFormValue(event, 'empAltContactNo') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> Email</label>
                                    <input type='text' value={employeeobj.empEmail} onChange={(event) => { changeFormValue(event, 'empEmail') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> City</label>
                                    <input type='text' value={employeeobj.city} onChange={(event) => { changeFormValue(event, 'city') }} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label> Pin Code</label>
                                    <input type='text' value={employeeobj.pincode} onChange={(event) => { changeFormValue(event, 'pincode') }} className='form-control' />
                                </div>
                                
                                {/* <div className='col-6'>
                                    <label> State</label>
                                    <input type='text' value={employeeobj.state} onChange={(event) => { changeFormValue(event, 'state') }} className='form-control' />
                                </div> */}
                                <div className='col-6'>
                                    <label> Address Line 1</label>
                                    <textarea className='form-control' value={employeeobj.addressLine1} onChange={(event) => { changeFormValue(event, 'addressLine1') }}></textarea>

                                </div>
                                <div className='col-6'>
                                    <label> Address Line 2</label>
                                    <textarea className='form-control' value={employeeobj.addressLine2} onChange={(event) => { changeFormValue(event, 'addressLine2') }}></textarea>

                                </div>
                                <div className='col-6'>
                                    <label> Bank Name</label>
                                    <input type='text' value={employeeobj.bankName} onChange={(event) => { changeFormValue(event, 'bankName') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> Account No</label>
                                    <input type='text' value={employeeobj.accountNo} onChange={(event) => { changeFormValue(event, 'accountNo') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> IFSC</label>
                                    <input type='text' value={employeeobj.ifsc} onChange={(event) => { changeFormValue(event, 'ifsc') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> Branch Name</label>
                                    <input type='text' value={employeeobj.bankBranch} onChange={(event) => { changeFormValue(event, 'bankBranch') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label> Salary </label>
                                    <input type='text' value={employeeobj.salary} onChange={(event) => { changeFormValue(event, 'salary') }} className='form-control' />
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-6 text-center'>
                                    <button className='btn btn-sm btn-success' onClick={resetForm}>Reset</button>
                                </div>
                                <div className='col-6 text-center'>

                                    {employeeobj.empId === 0 && <button className='btn btn-sm btn-success' onClick={saveEmployee}>Save Employee</button>}
                                    {employeeobj.empId !== 0 && <button className='btn btn-sm btn-warning' onClick={updateEmployee}>Update Employee</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default EmployeeCreation;

