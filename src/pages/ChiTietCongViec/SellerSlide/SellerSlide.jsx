import React, { Fragment } from 'react'

export default function SellerSlide(props) {
    const {item} = props
  return (
    <Fragment>
        <div className='seller-slide'>
                    <img src={item.congViec.hinhAnh} alt=" " />
                </div>
    </Fragment>
  )
}
