import React, { Fragment } from 'react'
import '../SellerFAQ/SellerFAQ.css'

export default function SellerFAQ(props) {
    const { item } = props
  return (
    <Fragment>
          <div className='seller-information-body mt-5'>
                    <h3>FAQ</h3>
                    <div className="">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <div className="mb-0 d-flex justify-content-between">
                                        <p  >
                                            Do you provide regular updates on oder?
                                        </p>
                                        <span className="dropdown-toggle"></span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <div className="mb-0 d-flex justify-content-between">
                                        <p>
                                            How do you guarantee product quallty and rellabllity
                                        </p>
                                        <span className="dropdown-toggle"></span>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <div className="mb-0 d-flex justify-content-between" >
                                        <p  >
                                            Do you give post-development support?
                                        </p>
                                        <span className="dropdown-toggle"></span>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <div className="mb-0 d-flex justify-content-between">
                                        <p>
                                            Do you convert PSD to HTML?
                                        </p>
                                        <span className="dropdown-toggle"></span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
    </Fragment>
  )
}
