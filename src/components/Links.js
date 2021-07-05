import React from 'react';
import LinkForm from './LinkForm';

const Links = () => {

    const addTask = () => {
        console.log('new task')
    }


    return (
        <div>
            <LinkForm add={addTask}/>
        </div>
    )
}

export default Links