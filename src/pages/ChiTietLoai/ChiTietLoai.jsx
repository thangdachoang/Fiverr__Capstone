import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { DOMAIN_FIVERR, TOKEN } from '../../util/setting';
import './ChiTietLoai.css'

export default function ChiTietLoai(props) {


  const [tenLoaiCV, setTenLoaiCV] = useState([]);
  const [dsNhomChiTietLoai, setdsNhomChiTietLoai] = useState([]);

  let maLoaiCV = props.match.params.maloaicongviec;

  useEffect(() => {
    let promise = axios({
      method: 'get',
      url: `${DOMAIN_FIVERR}/cong-viec/lay-chi-tiet-loai-cong-viec/${maLoaiCV}`,
      headers: {
        "TokenCybersoft": TOKEN,
      }
    });
    promise.then((result) => {
      console.log(result.data.content[0])
      setTenLoaiCV(result.data.content[0].tenLoaiCongViec)
      setdsNhomChiTietLoai(result.data.content[0].dsNhomChiTietLoai)
    });
    promise.catch(error => {
      console.log(error.response?.data);
    });
  }, [])

  //! render nhóm chi tiết loại
  let renderNhomChiTietLoai = () => {
    return dsNhomChiTietLoai.map(item => {
      return <article key={item.id}>
        <img className='img-wrapper' src={item.hinhAnh} alt="" />
        <h3 className='title-wrapper'>{item.tenNhom}</h3>
        {renderChiTietLoai(item.dsChiTietLoai)}
      </article>
    })
  }

  //! render chi tiết loại 
  let renderChiTietLoai = (dsChiTietLoai) => {
    return dsChiTietLoai.map(item => {
      return <div key={item.id} className="item-wrapper">
        <a className='item-name' href={`/categories/${item.id}`}>{item.tenChiTiet}</a>
        <span className='item-name-arrow'>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M9.923 2.969a.702.702 0 0 0-1.031 0 .801.801 0 0 0 0 1.09l2.804 2.96H1.486c-.403 0-.73.345-.73.77 0 .426.327.77.73.77h10.358l-2.952 3.118a.801.801 0 0 0 0 1.09c.285.3.747.3 1.031 0l4.123-4.355a.801.801 0 0 0 0-1.09l-.069-.072a1.422 1.422 0 0 0-.01-.01L9.923 2.969Z"></path></svg>
        </span>
      </div>
    })
  }


  return (
    <>
      <Header />
      <div className='banner-chitietloai'>
        <div className="backgroundImg">
          <div className="banner-content">
            <h1 className='title'>{tenLoaiCV}</h1>
            <p className='subtitle'>Designs to make you stand out.</p>
            <div className="banner-video">
              <button>
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"></path></svg>
                </span>
                How Fiverr Works
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="buckets-container">
          <h2>Explore {tenLoaiCV}</h2>
          <div className="buckets-container-wrapper">
            {renderNhomChiTietLoai()}
          </div>
        </div>
      </div>

      <div className="services-related">
        <h4 className='related-title'>Services Related To Graphics & Design</h4>
        <ul>
          <span>
            <a href="">Minimalist logo design</a>
          </span>
          <span>
            <a href="">Signature logo design</a>
          </span>
          <span>
            <a href="">Mascot logo design</a>
          </span>
          <span>
            <a href="">3d logo design</a>
          </span>
          <span>
            <a href="">Hand drawn logo design</a>
          </span>
          <span>
            <a href="">Vintage logo design</a>
          </span>
          <span>
            <a href="">Remove background</a>
          </span>
          <span>
            <a href="">Photo restoration</a>
          </span>
          <span>
            <a href="">Photo retouching</a>
          </span>
          <span>
            <a href="">Image resize</a>
          </span>
          <span>
            <a href="">Product label design</a>
          </span>
          <span>
            <a href="">Custom twitch overlay</a>
          </span>
          <span>
            <a href="">Custom twitch emotes</a>
          </span>
          <span>
            <a href="">Gaming logo</a>
          </span>
          <span>
            <a href="">Children book illustration</a>
          </span>
          <span>
            <a href="">Instagram design</a>
          </span>
          <span>
            <a href="">Movie poster design</a>
          </span>
          <span>
            <a href="">Box design</a>
          </span>
          <span>
            <a href="">Logo maker</a>
          </span>
          <span>
            <a href="">Logo ideas</a>
          </span>
        </ul>
      </div>

      <Footer />

    </>
  )
}
