import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { DOMAIN_FIVERR, TOKEN } from '../../../../../util/setting';



export default function Description() {

    // Description
    const [inputDescription, setInputDescription] = useState('');
    const [rendertDescription, setrendertDescription] = useState([]);
    const [invisibleTextArea, setInvisibleTextArea] = useState(false);
    const [invisibleA, setInvisibleA] = useState(true);

    let handleShowDescription = (e) => {
        e.preventDefault();
        setInvisibleTextArea(true);
        setInvisibleA(false)
    }

    let handleOffDescription = (e) => {
        e.preventDefault();
        setInvisibleTextArea(false)
        setInvisibleA(true)
    }

    let handleIPDescription = (e) => {
        e.preventDefault();
        setrendertDescription(preven => {
            return [...preven, inputDescription]
        })
        setInputDescription('')
        setInvisibleTextArea(false);
        setInvisibleA(true)
    }
    return (
        <form className='js-form-overview'>
            <div className="inner-row description d-flex justify-content-between">
                <h3>Description</h3>
                <a href="" className='add' onClick={handleShowDescription}>
                    {invisibleA === true ? <div>Edit Description</div> : " "}

                </a>
            </div>
            <div className="form-wrapper" >
                {invisibleTextArea === true ? <div><textarea name="description" id="" maxLength="600" value={inputDescription} onChange={(e) => { setInputDescription(e.target.value) }} minLength="150" rows='7' placeholder="Please x`tell us about any hobbies, additional expertise, or anything else you’d like to add." ></textarea>
                    <div className='btn-description d-flex justify-content-between'>
                        <button onClick={handleOffDescription} className='btn cancelBTN'  >Cancel</button>
                        <button className='btn btn-success updateBTN' onClick={handleIPDescription} >Update</button>
                    </div>

                </div> : ""}
            </div>
            <ul className='items-list'>
                <li className='d-flex justify-content-between'>
                    <span className='titlle'>{rendertDescription}</span>

                </li>

            </ul>

        </form>
    )
}
