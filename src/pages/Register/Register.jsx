import { useFormik } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { DOMAIN_FIVERR, TOKEN, USERLOGIN } from '../../util/setting';
import axios from 'axios';

export default function Register(props) {

    if (localStorage.getItem(USERLOGIN)) {
        props.history.push("/");
    }

    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({
        // giá trị khởi tạo (khai báo đối tượng cần lưu trữ data)
        // đặt tên thuộc tính đối tượng giống theo BE quy định
        initialValues: {
            email: '',
            password: '',
            name: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Mật khẩu không được để trống"),
            passwordConfirmation: Yup.string().required("Mật khẩu không được để trống").oneOf([Yup.ref('password'), null], 'Mật khẩu phải trùng nhau'),
            email: Yup.string().required("Email không được để trống").email("Email chưa đúng định dạng"),
            name: Yup.string().required("Họ tên không được để trống").matches(/^[A-Z a-z]+$/, "Họ tên không đúng định dạng")
        }),
        //! dữ liệu từ form sẽ được lưu vào values

        onSubmit: values => {
            console.log(values);
            let promise = axios ({
                url: `${DOMAIN_FIVERR}/auth/signup`,
                method: "POST",
                data: values,
                headers: {
                  "TokenCybersoft": TOKEN
                }
            });
            promise.then(result => {
                // console.log(result.data.content)
                setErrorMessage('');
                props.history.push("/login");
            });
            promise.catch(error => {
                // console.log(error.response.data.content)
                setErrorMessage(error.response.data.content)
            })
        },
    });

    return (
        <>
            <Header />

            <div className="main-content">
                <div className="mp-box-min-height">
                    <section className='standalone'>
                        <div className="entry">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="sign-in-form">
                                    <section className='form-header'>
                                        <h4>Join Fiverr</h4>
                                    </section>

                                    <div className="field">
                                        <div className="field-input-wrapper">
                                            <input name='email' className='field-input' type="text" placeholder="Email / Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                            {/* thông báo lỗi  */}
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className='error-alert'>{formik.errors.email}</div>
                                            ) : null}
                                            <p className='error-alert'>{errorMessage}</p>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field-input-wrapper">
                                            <input name='password' className='field-input' type="password" placeholder="Mật khẩu" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            {/* thông báo lỗi  */}
                                            {formik.touched.password && formik.errors.password ? (
                                                <div className='error-alert'>{formik.errors.password}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field-input-wrapper">
                                            <input name='passwordConfirmation' className='field-input' type="password" placeholder="Nhập lại mật khẩu" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordConfirmation} />
                                            {/* thông báo lỗi  */}
                                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                                <div className='error-alert'>{formik.errors.passwordConfirmation}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field-input-wrapper">
                                            <input name='name' className='field-input' type="text" placeholder="Họ tên" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            {/* thông báo lỗi  */}
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className='error-alert'>{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <button type='submit' className='submit-button'>
                                        <p>Register</p>
                                    </button>
                                </div>
                            </form>

                            <div className="signing-footer">
                                <p>Already a member?</p>
                                <a href="/login" className='link-join'>Sign In</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}
