import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(

        () => {
            axios.get('http://localhost:3030/users')
                .then(res => setData(res.data))
                .catch(err => console.log(err))

        }, []
    )
    return (

        <div className='container mt-5'>
            <h2>The Platform</h2>
            <div>
                <Link to="/create" className='btn btn-success'>
                    Add New User +
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Proficiency
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (d, i) => (
                                <tr key={i}>
                                    <td>
                                        {d.id}
                                    </td>
                                    <td>
                                        {d.Name}
                                    </td>
                                    <td>
                                        {d.Number}
                                    </td>
                                    <td>
                                        {d.Email}
                                    </td>
                                    <td>
                                        {d.Proficiency}
                                    </td>
                                    <td>
                                        <Link to={`/update/${d.id}`} className='btn btn-info'>Edit</Link>
                                        <button className='btn btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    )
    function handleDelete(id) {
        const confirm = window.confirm("Are Sure You want to delete?")
        if (confirm) {
            axios.delete("http://localhost:3030/users/" + id)
                .then(
                    res => {
                        alert("Record Deleted");
                        navigate('/')
                    }
                )
        }
    }
}
export default Home