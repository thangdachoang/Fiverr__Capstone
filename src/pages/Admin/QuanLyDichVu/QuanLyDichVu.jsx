import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../Admin.css'
import swal from "sweetalert";
import { qlyAdmin } from '../../../services/QLAdmin';
import { useState } from 'react';
import { useEffect } from 'react';
import EditQLDV from './EditQLDV';


export default function QuanLyDichVu() {

    var moment = require("moment");
    const [listDV, setListDV] = useState([])
    useEffect(() => {
        qlyAdmin
            .layDSDV()
            .then((result) => {
                setListDV(result.data.content)
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    const deleteDV = (id) => {
        qlyAdmin
            .deleteDV(id)
            .then((res) => {
                swal({
                    title: `Xóa ${id} thành công`,
                    icon: "success",
                    button: "OK",
                });
                qlyAdmin
                    .layDSDV()
                    .then((result) => {
                        setListDV(result.data.content)
                    })
                    .catch((err) => {
                        console.log(err.response.data);
                    });
            })
            .catch((err) => {
                swal({
                    title: err.response.data.content,
                    text: "Xóa không thành công!",
                    icon: "warning",
                    button: "OK",
                });
            });
    };

    return (
        <div className='main-content'>
            <div className='entry'>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stt</TableCell>
                                <TableCell align="left">Mã công việc</TableCell>
                                <TableCell align="left">Mã người thuê</TableCell>
                                <TableCell align="left">Ngày Thuê</TableCell>
                                <TableCell align="left">Trạng thái</TableCell>

                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listDV.map((DV, index) => (
                                <TableRow
                                    key={DV.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell align="left">{DV.maCongViec}</TableCell>
                                    <TableCell align="left">{DV.maNguoiThue}</TableCell>
                                    <TableCell align="left">{moment(DV.ngayThue).format('YYYY-MM-DD')}</TableCell>
                                    <TableCell align="left">{DV.hoanThanh ? "Hoàn Thành" : "Chưa Hoàn Thành"}</TableCell>
                                    <TableCell align="left" >
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>

                                            <button style={{marginRight:"10px"}} className="btn btn-primary" data-toggle="modal" data-target={`#d${DV.id}`}
                                            >Sửa</button>
                                            <EditQLDV DV={DV} />
                                            <button className="btn btn-danger" onClick={() => {
                                                swal({
                                                    title: "Bạn chắc chứ?",
                                                    text: `Xoá ${DV.id}`,
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                }).then((willDelete) => {
                                                    if (willDelete) {
                                                        deleteDV(DV.id);
                                                    }
                                                });
                                            }}

                                            >Xóa</button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
