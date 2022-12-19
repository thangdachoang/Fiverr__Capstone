import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../Admin.css'
import { useEffect } from 'react';
import { qlyAdmin } from '../../../services/QLAdmin';
import { useState } from 'react';
import swal from "sweetalert";
import ModalQLND from './ModalQLND';
import AddAdminModal from './AddAdminModal';

export default function QuanLyNguoiDung() {

    const [listND, setListND] = useState([])
    useEffect(() => {
        qlyAdmin
            .layDSND()
            .then((result) => {
                setListND(result.data.content)
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);


    const xoaNguoiDung = (taiKhoan) => {
        qlyAdmin
            .deleteND(taiKhoan)
            .then((res) => {
                swal({
                    title: `Xóa ${taiKhoan} thành công`,
                    icon: "success",
                    button: "OK",
                });
                qlyAdmin
                    .layDSND()
                    .then((result) => {
                        setListND(result.data.content)
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

    const [searchTerm, setSearchTerm] = useState("");
    const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = listND.filter((nguoiDung) => {
            return nguoiDung.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
        setDanhSachNguoiDung(results);
    }, [searchTerm, listND]);

    return (

        <div className='main-content'>
            <div className='entry'>
                <div className="add-Admin">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">Thêm quản trị viên</button>
                </div>
                <div className="search">
                    <input
                        id="search"
                        name="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Nhập tên tài khoản cần tìm"
                    />

                </div>
                <AddAdminModal />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stt</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {danhSachNguoiDung?.map((ND, index) => (
                                <TableRow
                                    key={ND.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell align="left">{ND.name}</TableCell>
                                    <TableCell align="left">{ND.email}</TableCell>
                                    <TableCell align="left">{ND.role}</TableCell>
                                    <TableCell align="left">
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <button style={{marginRight:"10px"}} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#d${ND.id}`}>
                                                Sửa
                                            </button>
                                            <ModalQLND nguoidung={ND}
                                            />
                                            <button className="btn btn-danger"
                                                onClick={() => {
                                                    swal({
                                                        title: "Bạn chắc chứ?",
                                                        text: `Xoá ${ND.id}`,
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((willDelete) => {
                                                        if (willDelete) {
                                                            xoaNguoiDung(ND.id);
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
    );
}