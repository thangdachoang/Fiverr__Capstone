import React, { useState } from 'react'
import swal from "sweetalert";
import { qlyAdmin } from '../../../services/QLAdmin';
export default function AddLCV() {
    let [state, setState] = useState({
        values: {
            tenLoaiCongViec: "",
        },
        errors: {
            tenLoaiCongViec: "",

        },
    });


    const handleChangeInput = (event) => {
        var { value, name } = event.target;
        let newValues = {
            ...state.values,
            [name]: value,
        };
        let newErrors = {
            ...state.errors,
            [name]: value === "" ? "không được bỏ trống!" : "",
        };

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
            console.log(values)
            qlyAdmin
                .addLCV(values)
                .then((res) => {
                    swal({
                        title: "Thêm loại công việc thành công",
                        icon: "success",
                        button: "OK",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch((err) => {
                    swal({
                        title: "Thêm loại công việc không thành công",
                        text: "Điền lại thông tin!",
                        icon: "warning",
                        button: "OK",
                    });
                });
        }
    };
    return (
        <div>
            <div className="modal fade" id="addQLLCV" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thêm loại công việc</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="user-form">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">

                                        <div className="textb">
                                            <input
                                                type="text"
                                                name="tenLoaiCongViec"
                                                onChange={handleChangeInput}
                                                value={state.values.tenLoaiCongViec}
                                                required
                                                placeholder='Nhập tên loại công việc'
                                            />
                                            <span className="text-danger">
                                                {state.errors.tenLoaiCongViec}
                                            </span>
                                        </div>
                                    </div>                  
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
