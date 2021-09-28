import React from 'react'
import {useRef} from 'react'
//test

export default function CreatePost () {
    const createTimeStamp = useRef(null);
    return (
        <form onSubmit={e => {
            createTimeStamp.current = Date.now();
            e.preventDefault();

        }}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <input type="textarea" name="create-description" id="create-description" rows="5" cols="33"/>
            </div>
            <input ref = {createTimeStamp} type="hidden" name="create-timestamp" id="create-timestamp"/>
            <input type="submit" value="Create" />
        </form>
    )
}
