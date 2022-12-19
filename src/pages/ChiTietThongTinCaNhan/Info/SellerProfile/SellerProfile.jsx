import React, { Fragment, useEffect, useState } from 'react'

import '../SellerProfile/SellerProfile.css'
import { useDispatch, useSelector } from 'react-redux';

import Skills from './Skills/Skills';
import Education from './Education/Education';

import Share from './SharedActivity/ShareActivity';
import Description from './Description/Description';



export default function SellerProfile(props) {
    let { renderND } = props;

    return (
        <div>
            <section className='form-thin'>
                <article>
                    <Description />
                    <Skills renderND={renderND} />
                    <Education renderND={renderND} />
                </article>
                    <Share />
            </section>
        </div>
    )
}
