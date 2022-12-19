import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { ErrorMessage, Field, FieldArray, Form, FormikProvider, useFormik } from 'formik'
import React, { Fragment, useEffect, useState } from 'react'
import { DOMAIN_FIVERR, TOKEN } from '../../../../util/setting'
import '../SellerCard-component/SellerCardComponent.css'

export default function SellerCardComponent(props) {
    let { renderND } = props



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: renderND.name || '',
            email: renderND.email || '',
            phone: renderND.phone || '',
            birthday: renderND.birthday || '',
            role: renderND.role || '',
            skill: renderND.skill || [],
            certification: renderND.certification || []
        },
        onSubmit: values => {
            console.log(values);
            let promise = axios({
                url: `${DOMAIN_FIVERR}/users/${renderND.id}`,
                method: "PUT",
                data: values,
                headers: {
                    "tokenCybersoft": TOKEN
                }
            });
            promise.then(result => {
                console.log(result.data.content)
                alert('Cập nhật thành công')
                window.location.reload()
            });
            promise.catch(error => {
                console.log(error.response.data.content)

            })
        },
    });




    const handleModal = () => {


        return <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <FormikProvider value={formik}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="name" className="col-form-label">Name:</label>
                                    <input name='name' type="text" className="form-control" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input name='email' type="text" className="form-control" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="col-form-label">Phone:</label>
                                    <input name='phone' type="text" className="form-control" id="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday" className="col-form-label">Birthday:</label>
                                    <input name='birthday' type="text" className="form-control" id="birthday" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthday} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="col-form-label">Role:</label>
                                    <select name='role' className="custom-select" onChange={formik.handleChange} value={formik.values.role}>
                                        <option>Role</option>
                                        <option value="USER">USER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>
                                </div>

                                {/* array skill  */}
                                <label className="col-form-label">Skill:</label>

                                <FieldArray
                                    name="skill"
                                    render={(arrayHelpers) => (
                                        <div>
                                            {formik.values.skill.length > 0 &&
                                                formik.values.skill.map((item, index) => (
                                                    <div className="row skill-input" key={index}>
                                                        <div className="col">
                                                            <Field
                                                                name={`skill[${index}]`}
                                                                value={formik.values.skill[index]}
                                                                onChange={formik.handleChange}
                                                                placeholder="Frontend, HTML, CSS,..."
                                                                type="text"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            <button
                                                type="button"
                                                className="btn btn-success button-skill"
                                                onClick={() => arrayHelpers.push("")}
                                            >
                                                Add skill
                                            </button>
                                        </div>
                                    )}
                                />

                                {/* hết array skill  */}

                                {/* array certification  */}
                                <br />
                                <label className="col-form-label">Certification:</label>

                                <FieldArray
                                    name="certification"
                                    render={(arrayHelpers) => (
                                        <div>
                                            {formik.values.certification.length > 0 &&
                                                formik.values.certification.map((item, index) => (
                                                    <div className="row skill-input" key={index}>
                                                        <div className="col">
                                                            <Field
                                                                name={`certification[${index}]`}
                                                                value={formik.values.certification[index]}
                                                                onChange={formik.handleChange}
                                                                placeholder="FPT, Cybersoft,..."
                                                                type="text"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            <button
                                                type="button"
                                                className="btn btn-success button-skill"
                                                onClick={() => arrayHelpers.push("")}
                                            >
                                                Add certification
                                            </button>
                                        </div>
                                    )}
                                />
                                {/* hết array certification  */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onSubmit={formik.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </FormikProvider>
                </div>
            </div>
        </div>
    }

    return (
        <Fragment>
            <div className='SellerCard-component'>
                <div className="seller-card">
                    <div className='user-online'>
                        <p>. Online</p>
                    </div>
                </div>
                <div className='user-profile-info'>
                    <div className='flex-center'>
                        <div className='user-profile-img' >
                        <img src={renderND.avatar} alt="" />
                            
                        </div>
                    </div>
                    <div className='user-profile-label'>
                        <div className="username-line">
                            <b className="seller-link">{renderND.name}</b>
                        </div>
                        <div className="edit-mode">
                            <div className="liner-and-pen">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                                    <svg style={{ backgroundColor: 'white' }} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z"></path></svg>
                                </button>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-stats-desc">
                    <ul className='user-stats'>
                        <li className='location d-flex'>
                            <span>
                                <span className='user-stats-icon'>
                                    <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path></g><defs><clipPath id="clip0"><rect width="12" height="16"></rect></clipPath></defs></svg>
                                </span>
                                From
                            </span>
                            <b>Vietnam</b>

                        </li>
                        <li className='member-since d-flex'>
                            <span>
                                <span className='user-stats-icon'>
                                    <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z"></path></svg>
                                </span>
                                Member since
                            </span>
                            <b>{renderND.birthday}</b>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Modal  */}
            {handleModal()}



        </Fragment>
    )
}
