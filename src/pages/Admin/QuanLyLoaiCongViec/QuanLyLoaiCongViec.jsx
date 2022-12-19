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
import AddLCV from './AddLCV';
import EditLCV from './EditLCV';


export default function QuanLyLoaiCongViec() {

    const [listLCV, setListLCV] = useState([])
    useEffect(() => {
        qlyAdmin
            .layDSLCV()
            .then((result) => {
                setListLCV(result.data.content)
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    const xoaLoaiCongViec = (id) => {
        qlyAdmin
            .deleteLCV(id)
            .then((res) => {
                swal({
                    title: `Xóa ${id} thành công`,
                    icon: "success",
                    button: "OK",
                });
                qlyAdmin
                    .layDSLCV()
                    .then((result) => {
                        setListLCV(result.data.content)
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
                <div className="add-Admin">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addQLLCV">Thêm loại công việc</button>
                </div>
                <AddLCV />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stt</TableCell>
                                <TableCell align="left">Tên loại công việc</TableCell>

                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listLCV.map((LCV, index) => (
                                <TableRow
                                    key={LCV.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell align="left">{LCV.tenLoaiCongViec}</TableCell>
                                    <TableCell align="left" >
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>

                                            <button style={{marginRight:"10px"}} className="btn btn-primary" data-toggle="modal" data-target={`#d${LCV.id}`}
                                            >Sửa</button>
                                            <EditLCV LCV={LCV} />
                                            <button className="btn btn-danger" onClick={() => {
                                                swal({
                                                    title: "Bạn chắc chứ?",
                                                    text: `Xoá ${LCV.id}`,
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                }).then((willDelete) => {
                                                    if (willDelete) {
                                                        xoaLoaiCongViec(LCV.id);
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
