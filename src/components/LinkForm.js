import { useEffect, useState } from "react";
import React from 'react';
import { toast } from "react-toastify";
import { db } from "../firebase";

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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addXpath(values);
        setValues({...initialStateValues})
    };

    const getLinkById = async (id) => {
        const doc = await db.collection('plantillasXpath').doc(id).get();
        console.log(doc.data())
    }

    useEffect(() => {
        if(props.currentId === ''){
            setValues({...initialStateValues})
        } else {
            getLinkById(props.currentId)
        }
    }, [props.currentId]);

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    value={values.name}
                    name="name"
                    placeholder="User Name"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
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
            <div className='form-group'>
            <textarea
                rows="3"
                className="form-control"
                placeholder="Write Xpath expression"
                name="description"
                value={values.description}
                onChange={handleInputChange}
            ></textarea>
            </div>
            <button className="btn btn-primary btn-block">
                {props.currentId === "" ? 'Save' : 'Update'}
            </button>
        </form>
    );
};

export default LinkForm;