import axios from 'axios';
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DOMAIN_FIVERR, TOKEN } from '../../util/setting';
import './ChiTietCongViec.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SellerSlide from './SellerSlide/SellerSlide';
import SellerOverview from './SellerOverview/SellerOverview';
import SellerDesciption from './SellerDesciption/SellerDesciption';
import AboutSeller from './AboutSeller/AboutSeller';
import SellerFAQ from './SellerFAQ/SellerFAQ';
import SellerReview from './SellerReview/SellerReview';
import PeopleComment from './PeopleComment/PeopleComment';
import PackagesTabs from './PackagesTabs/PackagesTabs';
import { useSelector } from 'react-redux';



export default function ChiTietCongViec(props) {

    const {uLogin} = useSelector(state => state.reducerTong)
 
    const [layCVChiTietTheoMaCV, setLayCVChiTietTheoMaCV] = useState([]);
    let maCV = props.match.params.macongviec;
    
    // console.log(layCVChiTietTheoMaCV[0])

    useEffect(() => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/cong-viec/lay-cong-viec-chi-tiet/${maCV}`,
            headers: {
                "tokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
            // console.log("Lấy mã công việc chi tiết", result.data.content)
            setLayCVChiTietTheoMaCV(result.data.content);
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }, []);


    let renderLayCVChiTietTheoMa = () => {
        return layCVChiTietTheoMaCV.map(item => {
            return <div key={item.id}>
                <ul className='gig-NavLink d-flex mb-3 mt-3 mb-5'>
                    <NavLink to="/" path=""><li>{item.tenLoaiCongViec}</li></NavLink>
                    {'>'}
                    <NavLink to="/" path=""><li>{item.tenNhomChiTietLoai}  </li></NavLink>
                    {'>'}
                    <NavLink to="/" path="" ><li>{item.tenChiTietLoai} </li></NavLink>
                </ul>

                <SellerOverview item={item} />

                <SellerSlide item={item} />

                <SellerDesciption item={item} />

                <AboutSeller item={item} />

                <SellerFAQ item={item} />

                <SellerReview item={item} maCV={maCV}/>

                <PeopleComment maCV={maCV} uLogin={uLogin}/>

            </div>
        })
    }


    return (
        <div>

            <Header />

            <div className='gig_page_perseus  m-5'>
                <div className='gig-page row'>
                    <div className='gig-page-left col-lg-8'>
                        <div className="gig-overview">
                            <nav>
                                {renderLayCVChiTietTheoMa()}
                            </nav>
                        </div>

                    </div>


                    <div className='gig-page-right col-lg-4'>
                        <PackagesTabs props={props} maCV={maCV} uLogin={uLogin} layCVChiTietTheoMaCV={layCVChiTietTheoMaCV[0]}/>
                    </div>
                </div>
            </div>

            <div className='footer mt-5'>
                <Footer />
            </div>

        </div>
    )
}
