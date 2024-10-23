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
    console.log(user);

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
            console.log(view);
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
        <>
        <div className='mt-3 w-100'>
    {data ? (
        <>
            <div className='container editprofilediv ps-4 '>
                <div className='editprofiledi'>
                    <h3 className='editprofile fw-light ps-3'>Edit Profile</h3> 
                </div> 
                <div className='d-flex ms-2 mt-3'>
                    <label htmlFor="firstname" className='me-3 profilelabel'>First Name</label>
                    <input type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}  
                        onChange={handleInputChange}
                        disabled={!editMode}                    
                        className='profileinput'  
                    />
                </div>
                <div className='ms-2 mt-3'>
                    <label htmlFor="lastname" className='me-3'>Last Name</label>
                    <input type="text" 
                        id="lastname"
                        className='profileinput' 
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        disabled={!editMode}
                    />
                </div>
                <div className='ms-2 mt-3'>
                    <label htmlFor="mobilenumber" className='me-2 ms-2'>Phone No. </label>
                    <input type="text"          
                        id="mobilenumber"
                        name="mobilenumber"
                        value={formData.mobilenumber}
                        onChange={handleInputChange}
                        disabled={!editMode}
                        className='profileinput' 
                        placeholder='Mobile number ' 
                    />
                </div>
                <div className='ms-2 mt-3'>
                    <label htmlFor="email" className='me-3 ms-4'>Email</label>
                    <input type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        disabled
                        className='profileinput ms-2'
                    />
                </div>
            </div> 
            <div className='container'> 
            <div className='ms-2 mt-3 mb-4'>
                <span onClick={handleEditToggle} className={`${editMode ? 'profileeditmode' : 'profilecancelmode'} me-4`}>
                    <FontAwesomeIcon icon={faEdit} /> {editMode ? 'Cancel' : 'Edit'}
                </span>
                <span onClick={handleUpdate} disabled={!editMode} className={editMode ? 'profileupdatebutton' : ''}>
                    Update
                </span>
            </div>
            </div>
        </>
    ) : (
        <p>Loading...</p>
    )}
</div>

            


        </>
       
    );
}

export default Profile;
