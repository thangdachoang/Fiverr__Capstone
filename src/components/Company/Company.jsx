import React from 'react'
import './Company.css'

export default function Company() {
  return (
    <div className='company'>
        <div className="list-company d-flex justify-content-center align-items-center">
            <span>Trusted by</span>
            <ul className='d-flex justify-content-center align-items-center'>
                <li>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png" alt="logo" />
                </li>
                <li>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" alt="logo" />
                </li>
                <li>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" alt="logo" />
                </li>
                <li>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" alt="logo" />
                </li>
                <li>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" alt="logo" />
                </li>
            </ul>
        </div>  
    </div>
  )
}
