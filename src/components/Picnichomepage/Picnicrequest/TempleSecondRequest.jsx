import React, { useState } from "react";
import axios from "axios";
// import '../Package.css';
import { baseUrl } from "../../../../url";

function TempleSecondPage() {
    const locations = [
        "Kodaikanal", "Connor", "Senji Fort", "Wayanad", "Vagamon",
        "Idukki", "Nallamola", "Thrimbala", "Nagari", "Kanchanagiri"
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        budget: "",
        travelDate: "",
        numberOfPeople: "",
        interest: "Customizing Package",
        desiredLocations: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate input based on field type
        let validValue = value;

        switch (name) {
            case "name":
                // Allow only alphabets
                if (/^[a-zA-Z\s]*$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            case "email":
                // Allow only alphabets, numbers, and '@'
                if (/^[a-zA-Z0-9@.]*$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            case "mobile":
                // Allow only numbers and restrict to 10 digits
                if (/^\d{0,10}$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            case "budget":
                // Allow only up to 5 digits
                if (/^\d{0,5}$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            case "travelDate":
                // Allow only alphabets and numbers
                if (/^[a-zA-Z0-9\s]*$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            case "numberOfPeople":
                // Allow only up to 3 digits
                if (/^\d{0,3}$/.test(value)) {
                    validValue = value;
                } else {
                    return; // Don't update state if invalid
                }
                break;

            default:
                break;
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: validValue
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const updatedLocations = checked
                ? [...prevState.desiredLocations, value]
                : prevState.desiredLocations.filter(location => location !== value);
            return {
                ...prevState,
                desiredLocations: updatedLocations
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/submit-form`, formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                alert("Form Submitted Successfully");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    budget: "",
                    travelDate: "",
                    numberOfPeople: "",
                    interest: "Customizing Package",
                    desiredLocations: []
                });
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <h1 className="purple ml1">Found Your Perfect Package? We will Take it forward!</h1>
                    <p className="ml1">Want to customize your dreams instead? Let us help curate a holiday package that perfectly matches your travel plan.</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-wrap justify-content-evenly mb-4">
                            <div>
                                <label>Name</label><br />
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label>Email Address</label><br />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-evenly mb-4">
                            <div>
                                <label>Mobile Number</label><br />
                                <input
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label>Budget Per Person</label><br />
                                <input
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-evenly mb-4">
                            <div>
                                <label>When are You Travelling</label><br />
                                <input
                                    name="travelDate"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label>Number of People</label><br />
                                <input
                                    name="numberOfPeople"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mb-4">
                            <div className="ms-5">
                                <label>Interested in</label><br />
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="packagesecondpageinput purple"
                                >
                                    <option className="purple">Customizing Package</option>
                                    <option className="purple">Picnic Package</option>
                                    <option className="purple">Tour Package</option>
                                    <option className="purple">College Package</option>
                                </select>
                            </div>
                            <div className="ms-5">
                                <label>Desired Location</label><br />
                                <div className="d-flex flex-wrap">
                                    {locations.map((location, index) => (
                                        <div key={index} className="col-6 d-flex flex-wrap align-items-center">
                                            <input
                                                type="checkbox"
                                                id={`location${index}`}
                                                name="desiredLocation"
                                                value={location}
                                                checked={formData.desiredLocations.includes(location)}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="ms-2" htmlFor={`location${index}`}>{location}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="packagesidebtn p-1 bgc mb-4 text-center">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TempleSecondPage;
