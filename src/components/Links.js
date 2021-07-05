import React, {useEffect, useState} from 'react';
import LinkForm from './LinkForm';

import { db } from '../firebase';
import { toast } from "react-toastify";

const Links = () => {
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addXpath = async (LinkObject) => {
        try{
            if(currentId === "") {
                await db.collection('plantillasXpath').doc().set(LinkObject);
                toast('Xpath add con exito')
            } else {
                db.collection('plantillasXpath').doc(currentId).update(LinkObject);
                toast('msj updated successfully')
            }
            setCurrentId('');
        } catch (error) {
            console.log(error);
        }
    }

    const Delete = async (id) => {
        if(window.confirm('seguro de que deseas hacer la modificacion?')){
            await db.collection('plantillasXpath').doc(id).delete();
            toast('Xpath delte')
        }        
    }

    const getLinks = async () => {
        db.collection('plantillasXpath').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
                console.log(docs)
            })
            setLinks(docs)
        })
    }

    useEffect(() => {
        getLinks()
    }, []);

    return (
        <>
        <div className="col-md-4 p-2">
          <LinkForm {...{ addXpath, currentId, links }} />
        </div>
        <div className="col-md-8 p-2">
          {links.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <div>
                    <i className="material-icons text-danger"
                      onClick={() => Delete(link.id)}>close</i>
                    <i className="material-icons"
                        onClick={() => setCurrentId(link.id)}>create</i>
                  </div>
                </div>
                <h6>{link.url}</h6>
                <p>{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

export default Links