import React from 'react'
import { useState } from 'react';
import moment from "moment";
import './Modal.css'
import swal from "sweetalert";
import { qlyAdmin } from '../../../services/QLAdmin';

export default function ModalQLND(props) {

    let ND = props.nguoidung;
    let [state, setState] = useState({
        values: {
            id: ND.id,
            name: ND.name,
            email: ND.email,
            birthday: ND.birthday,
            avatar: ND.avatar,
            gender: ND.gender,
            role: ND.role,
        },
        errors: {
            name: "",
            email: "",
            birthday: "",
            avatar: "",
            gender: "",
            role: ""
        },
    });

    const handleChangeInput = (event) => {
        var { value, name } = event.target;
        var moment = require("moment");

        let newValues = {
            ...state.values,
            [name]: value,
        };
        let newErrors = {
            ...state.errors,
            [name]: value === "" ? "không được bỏ trống!" : "",
        };

        if (name === "birthday") {
            newValues[name] = moment(value, "yyyy-MM-DD").format("DD/MM/yyyy");
        }
        setState({ values: newValues, errors: newErrors });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        let { values, errors } = state;

        for (let key in values) {
            if (values[key] === "") {
                valid = false;
            }
        }
        for (let key in errors) {
            if (errors[key] !== "") {
                valid = false;
            }
        }
        if (!valid) {
            alert("thông tin không hợp lệ");
            return;
        } else {
            qlyAdmin
                .editND(ND.id, values)
                .then((res) => {
                    console.log(values)
                    swal({
                        title: "Sửa người dùng thành công",
                        icon: "success",
                        button: "OK",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch((err) => {
                    swal({
                        title: "Sửa người dùng không thành công",
                        text: "Điền lại thông tin!",
                        icon: "warning",
                        button: "OK",
                    });
                });
        }
    };

    return (
        <div>
            <div className="modal fade" id={`d${ND.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thông tin người dùng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="user-form">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">

                                        <div className="textb">
                                            <div
                                                className="placeholder"
                                                style={{ left: "10px", top: "-15px" }}
                                            >
                                                id
                                            </div>
                                            <input
                                                type="text"
                                                name="id"
                                                className="text-secondary"
                                                onChange={handleChangeInput}
                                                disabled
                                                value={state.values.id}
                                                style={{ cursor: "no-drop" }}
                                                required
                                            />
                                            <span className="text-danger"></span>
                                        </div>

                                        <div className="textb">
                                            <div className="placeholder">email</div>
                                            <input
                                                type="text"
                                                name="email"
                                                onChange={handleChangeInput}
                                                value={state.values.email}
                                                required
                                            />
                                            <span className="text-danger">
                                                {state.errors.email}
                                            </span>
                                        </div>
                                        <div className="textb">
                                            <div className="placeholder" style={{ left: "10px", top: "-15px" }}>
                                                Gender
                                            </div>
                                            <select name="gender" onChange={handleChangeInput} value={state.values.gender}>
                                                <option value="">--Chọn giới tính--</option>
                                                <option value={true}>Nam</option>
                                                <option value={false}>Nữ</option>
                                            </select>
                                            <span className="text-danger">
                                                {state.errors.gender}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <div className="textb">
                                            <div className="placeholder">Name</div>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={handleChangeInput}
                                                value={state.values.name}
                                                required
                                            />
                                            <span className="text-danger">
                                                {state.errors.name}
                                            </span>
                                        </div>

                                        <div className="textb">
                                            <div
                                                className="placeholder"
                                                style={{ left: "10px", top: "-15px" }}
                                            >
                                                Birthday
                                            </div>
                                            <input
                                                type="date"
                                                name="birthday"
                                                onChange={handleChangeInput}
                                                value={moment(state.values.birthday).format('YYYY-MM-DD')}
                                                required
                                            />
                                            <span className="text-danger">
                                                {state.errors.birthday}
                                            </span>
                                        </div>

                                        <div className="textb">
                                            <div className="placeholder" style={{ left: "10px", top: "-15px" }}>
                                                Role
                                            </div>
                                            <select name="role" onChange={handleChangeInput} value={state.values.role}>
                                                <option value="">--Chọn loại người dùng--</option>
                                                <option value="ADMIN">Admin</option>
                                                <option value="USER">User</option>
                                            </select>
                                            <span className="text-danger">
                                                {state.errors.role}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
