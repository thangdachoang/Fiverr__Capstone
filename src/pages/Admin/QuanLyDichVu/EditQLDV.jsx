import React, { useState } from 'react'
import { qlyAdmin } from '../../../services/QLAdmin';
import swal from "sweetalert";


export default function EditQDV(props) {
    let {DV} = props;
 
    let [state, setState] = useState({
        values: {
            id: DV.id,
            hoanThanh: DV.hoanThanh 
        },
    });
   
    const handleChangeInput = (event) => {
        var { value, name } = event.target;
        console.log(name,value)
        let newValues = {
            ...state.values,
            [name]: value,
        };
       
        setState({values: newValues});
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        let { values} = state;

            qlyAdmin
                .editDV(DV.id, values)
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
    };
    
  return (
    <div>
            <div className="modal fade" id={`d${DV.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sửa dịch vục</h5>
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
                                            <select name="hoanThanh" onChange={handleChangeInput} value={state.values.hoanThanh}>
                                                <option value={true}>Hoàn thành</option>
                                                <option value={false}>Chưa hoàn thành</option>
                                            </select>
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
