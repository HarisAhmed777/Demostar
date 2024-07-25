import React, { useState } from "react";
import axios from "axios";
import './Package.css';
import { baseUrl } from "../../../url";

function PackageSecondPage() {
    const locations = [
        "Location 1", "Location 2", "Location 3", "Location 4", "Location 5",
        "Location 6", "Location 7", "Location 8", "Location 9", "Location 10"
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
        setFormData(prevState => ({
            ...prevState,
            [name]: value
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
                
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <h1 className="purple">Found Your Perfect Package? We will Take it forward!</h1>
                    <p>Want to customize your dreams instead? Let us help curate a holiday package that perfectly matches your travel plan.</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-wrap justify-content-evenly mb-4">
                            <div>
                                <label className="purple cllr">Name</label><br />
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label className="purple">Email Address</label><br />
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
                                <label className="purple">Mobile Number</label><br />
                                <input
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label className="purple">Budget Per person</label><br />
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
                                <label className="purple">When are You travelling</label><br />
                                <input
                                    name="travelDate"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                            <div>
                                <label className="purple">Number of people</label><br />
                                <input
                                    name="numberOfPeople"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    className="packagesecondpageinput"
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap  mb-4">
                            <div className="ms-5">
                                <label className="purple">Interested in</label><br />
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="packagesecondpageinput purple"
                                >
                                    <option className="purple">Customizing Package</option>
                                    <option className="purple">Customizing Package</option>
                                    <option className="purple">Customizing Package</option>
                                    <option className="purple">Customizing Package</option>
                                </select>
                            </div>
                            <div className="ms-5">
                                <label className="purple">Desired location</label><br />
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
                                            <label className="purple ms-2" htmlFor={`location${index}`}>{location}</label>
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

export default PackageSecondPage;
