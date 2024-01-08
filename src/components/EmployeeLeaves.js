import React, { useState } from 'react';
import axios from 'axios';

const EmployeeLeaves = () => {
    let [employeeLeaves, setEmployeeLeaves] = useState([]);
    let [employeeLeaveobj, setEmployeeLeaveObj] = useState({
        "LeaveId": 0,
        "EmployeeId": 0,
        "LeaveDate": "",
        "LeaveReason": "",
        "NoOfFullDayLeaves": 0,
        "NoOfHalfDayLeaves": 0
    })


    const changeFormValue = (event, key) => {

        setEmployeeLeaveObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }


    const GetAllLeaves = async () => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves");
        setEmployeeLeaves(result.data.data);
    }
    const AddLeave = async () => {
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddLeave ", employeeLeaveobj);

        if (result.data.result) {
            alert("Leave Added Successfully")
            GetAllLeaves()
        } else {
            alert(result.data.message)
        }
    }
    const updateLeave = async () => {
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/TeamSync/UpdateLeave", employeeLeaveobj);

        if (result.data.result) {
            alert("Leave updated Successfully")
            GetAllLeaves()
        } else {
            alert(result.data.message)
        }
    }
    const deleteLeaves = async (id) => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteLeaveById" + id);

        if (result.data.result) {
            alert("Leaves Deleted Successfully")
            GetAllLeaves()
        } else {
            alert(result.data.message)
        }
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
                                    <button className='btn btn-sm btn-primary' onClick={GetAllLeaves}>Load Employees</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>LeaveId</th>
                                        <th>EmployeeId</th>
                                        <th>Leave Date</th>
                                        <th>Leave Reason</th>
                                        <th>No Of FullDay Leaves</th>
                                        <th>NoOfHalfDayLeaves</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employeeLeaves.map((item, index) => {
                                            return (<tr>
                                                <td> {index + 1} </td>
                                                <td> {item.LeaveId} </td>
                                                <td>  {item.LeaveDate} </td>
                                                <td>  {item.LeaveReason} </td>
                                                <td>  {item.NoOfFullDayLeaves} </td>
                                                <td>  {item.NoOfHalfDayLeaves} </td>
                                                <td>
                                                    <button className='btn btn-sm btn-primary' onClick={() => { updateLeave(item.empId) }}>Edit</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-sm btn-danger' onClick={() => { deleteLeaves(item.empId) }}>Delete</button>

                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default EmployeeLeaves;