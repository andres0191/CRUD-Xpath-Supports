import React from 'react';
import LinkForm from './LinkForm';

import { db } from '../firebase';

const Links = () => {

    const addXpath = async (LinkObject) => {
        await db.collection('plantillasXpath').doc().set(LinkObject);
        console.log("New xpath add")
    }

    return (
        <div>
            <LinkForm addXpath={addXpath}/>
            <h1>Links</h1>
        </div>
    )
}

export default Links