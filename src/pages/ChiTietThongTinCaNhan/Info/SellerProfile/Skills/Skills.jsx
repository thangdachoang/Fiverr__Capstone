import React, { useState } from 'react'
import '../Skills/Skills.css'


export default function Skills(props) {

    return (
        <form className='js-form-skills'>
            <div className="inner-row skills">
                <div className='skills d-flex justify-content-between'>
                    <h3 className='alt hint--top'>Skills</h3>
                </div>
                <section>
                    <ul className='items-list'>
                        {props.renderND.skill?.map((skill, index) => {
                            return <li className='d-flex justify-content-between' key={index}>

                                <span className='titlle'>
                                <i style={{color:'gold',height:'25px'}} className="fa-solid fa-gear mr-4"></i>
                                    {skill}
                                </span>

                           
                            </li>
                        })}

                    </ul>
                </section>


            </div>
        </form>
    )
}