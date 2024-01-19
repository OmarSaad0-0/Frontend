import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Update() {

    const { id } = useParams();

    const [inputData, setInputData] = useState(
        {
            id: id,
            name: '',
            email: '',
            number: '',
            proficiency: '',
        }
    )
    const navigate = useNavigate();
    useEffect(
        () => {
            axios.get('http://localhost:3030/users/' + id)
                .then(res => setInputData(res.data))
                .catch(err => console.log(err))
        }, []
    )
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3030/users/' + id, inputData).then(
            res => {
                alert("Saved Successfully")
                navigate('/')
            }
        )
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>

                        <input type='number' hidden name='id' className='form-control' value={inputData.id} />
                    </div>
                    <div>
                        <label htmlFor="Name">Name:</label>
                        <input type='text' name='Name' className='form-control' value={inputData.name} onChange={e => setInputData({
                            ...inputData, Name: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="Number">Number:</label>
                        <input type='text' name='Number' className='form-control' value={inputData.number} onChange={e => setInputData({
                            ...inputData, Number: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="Email">Email:</label>
                        <input type='text' name='Email' className='form-control' value={inputData.email} onChange={e => setInputData({
                            ...inputData, Email: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="Proficiency">Proficiency:</label>
                        <input type='text' name='Proficiency' className='form-control' value={inputData.proficiency} onChange={e => setInputData({
                            ...inputData, Proficiency: e.target.value
                        })} />
                    </div>
                    <button className='btn btn-info'>Update</button>
                </form>

            </div>

        </div>
    )
}
export default Update