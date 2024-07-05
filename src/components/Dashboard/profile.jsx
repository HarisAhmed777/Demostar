import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import './profile.css';
import { baseUrl } from '../../../url';
// import profile from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobilenumber: '',
        email: '',
    });
    const { user } = useContext(Context);

    useEffect(() => {
        fetch(`${baseUrl}/user?email=${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(view => {
            setData(view);
            setFormData({
                firstname: view.firstname,
                lastname: view.lastname,
                mobilenumber: view.mobilenumber,
                email: view.email,
            });
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleUpdate = () => {
        fetch(`${baseUrl}/user/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(updatedData => {
            setData(updatedData);
            toast.success("Profile updated successfullly",{autoClose:2000})
            setEditMode(false);
        })
        .catch(error => {
            console.error("Error updating data", error);
        });
    };

    return (
        <div className='bbody pt-5'>
        <div className='profile-container prop'>
            <h1 className='profile-header text-white'>Your Profile</h1>
            {data ? (
                <div className='profile-form'>
                    <div className='profile-item'>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                    </div>
                    <div className='profile-item'>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                    </div>
                    <div className='profile-item'>
                        <label>Mobile Number:</label>
                        <input
                            type="text"
                            name="mobilenumber"
                            value={formData.mobilenumber}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                    </div>
                    <div className='profile-item'>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            disabled
                        />
                    </div>
                    <button onClick={handleEditToggle}>
                        <FontAwesomeIcon icon={faEdit} /> {editMode ? 'Cancel' : 'Edit'}
                    </button>
                    <button onClick={handleUpdate} disabled={!editMode}>
                        Update
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <ToastContainer/>
        </div>
       
    );
}

export default Profile;
