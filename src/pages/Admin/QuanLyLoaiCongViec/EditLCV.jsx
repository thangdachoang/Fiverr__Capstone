import React, { useState } from 'react'
import { qlyAdmin } from '../../../services/QLAdmin';
import swal from "sweetalert";


export default function EditLCV(props) {
    let {LCV} = props;

    let [state, setState] = useState({
        values: {
            tenLoaiCongViec: LCV.tenLoaiCongViec,
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
            qlyAdmin
                .editLCV(LCV.id, values)
                .then((res) => {
                    console.log(values)
                    swal({
                        title: "Sửa loại công viêc thành công",
                        icon: "success",
                        button: "OK",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch((err) => {
                    swal({
                        title: "Sửa loại không thành công",
                        text: "Điền lại thông tin!",
                        icon: "warning",
                        button: "OK",
                    });
                });
        }
    };
    
  return (
    <div>
            <div className="modal fade" id={`d${LCV.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sửa loại công việc</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="user-form">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">

                                        <div className="textb">
                                            <div className="placeholder">Tên loại công việc</div>
                                            <input
                                                type="text"
                                                name="tenLoaiCongViec"
                                                onChange={handleChangeInput}
                                                value={state.values.tenLoaiCongViec}
                                                required
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
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}
