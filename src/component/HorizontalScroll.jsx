import Card from "../element/Card"

const HorizontalScroll = ({title, body, date, header}) =>{
    return(
        <div className="ms-5 ps-5 mt-5">
            <h3 style={{color:'var(--light)'}}>{header}</h3>
            <div className="scrolling-wrapper">
                <div className="card col-lg-3 col-md-4 col-6"> 
                {
                    (title !== '' && body !== '' && date !== '')?
                        <Card
                            note={body}
                            title={title}
                            date={date}
                            textBtn={'Archieve'}
                            classNameBtn={'btnNote col-12 rounded-4'}
                            styleEdit={{color:'var(--info-light)'}}
                            styleDiv={{
                                color:'var(--light',
                                backgroundColor:'var(--primary)'
                            }}
                            />
                            :
                            <p>no data</p>
                        }
                </div>
            </div>
        </div>
    )
}
export default HorizontalScroll