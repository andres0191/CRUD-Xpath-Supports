import { useEffect, useState } from "react";
import React from 'react';

const LinkForm = (props) => {

    const initialStateValues = {
        url: "",
        name: "",
        description: "",
      };
    
    const [values, setValues] = useState(initialStateValues);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        props.add();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://someurl.xyz"
                    value={values.url}
                    name="url"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    value={values.name}
                    name="name"
                    placeholder="Website Name"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
            <textarea
                rows="3"
                className="form-control"
                placeholder="Write a Description"
                name="description"
                value={values.description}
                onChange={handleInputChange}
            ></textarea>
            </div>
            <button className="btn btn-primary btn-block">
                Save
            </button>
        </form>
    );
};

export default LinkForm;