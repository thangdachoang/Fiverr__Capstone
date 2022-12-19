
export default function Education(props) {

    return (
        <form className='js-form-skills'>
            <div className="inner-row skills">
                <div className='skills d-flex justify-content-between'>
                    <h3 className='alt hint--top'>Education</h3>
                </div>
                <section>

                    <ul className='items-list'>
                        {props.renderND.certification?.map((certification, index) => {
                            return <li className='d-flex justify-content-between' key={index}>

                                <span className='titlle'>
                                    <i className="fa-solid fa-school mr-4" style={{color:'#E37627',height:'25px'}}></i>
                                    {certification}
                                </span>

                            </li>
                        })}

                    </ul>
                </section>


            </div>
        </form>
    )
}
