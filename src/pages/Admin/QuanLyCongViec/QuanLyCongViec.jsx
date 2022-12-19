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


export default function QuanLyCongViec() {

    const [listCV, setListCV] = useState([])
    useEffect(() => {
        qlyAdmin
            .layDSCV()
            .then((result) => {
                setListCV(result.data.content)
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);
    
    const xoaCongViec = (id) => {
        qlyAdmin
            .deleteCV(id)
            .then((res) => {
                swal({
                    title: `Xóa ${id} thành công`,
                    icon: "success",
                    button: "OK",
                });
                qlyAdmin
                    .layDSCV()
                    .then((result) => {
                        setListCV(result.data.content)
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
                                <TableCell align="left">Hình ảnh</TableCell>
                                <TableCell align="left">Tên công việc</TableCell>
                                <TableCell align="left">Đánh giá</TableCell>
                                <TableCell align="left">Giá tiền</TableCell>
                                <TableCell align="left">Mô tả ngắn</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listCV.map((CV, index) => (
                                <TableRow
                                    key={CV.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell align="left"><img className='img-fluid' src={CV.hinhAnh} alt="" /></TableCell>
                                    <TableCell align="left">{CV.tenCongViec}</TableCell>
                                    <TableCell align="left">{CV.danhGia}</TableCell>
                                    <TableCell align="left">{CV.giaTien}</TableCell>
                                    <TableCell align="left">{CV.moTaNgan}</TableCell>
                                    <TableCell align="left"  >
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>

                                            <button  className="btn btn-danger" onClick={() => {
                                                swal({
                                                    title: "Bạn chắc chứ?",
                                                    text: `Xoá ${CV.id}`,
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                }).then((willDelete) => {
                                                    if (willDelete) {
                                                        xoaCongViec(CV.id);
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
