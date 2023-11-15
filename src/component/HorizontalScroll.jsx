import Card from "../element/Card"

const HorizontalScroll = ({title}) =>{
    return(
        <div className="ms-5 ps-5">
            <h3 style={{color:'var(--light)'}}>{title}</h3>
            <div className="scrolling-wrapper">
                <div className="card col-lg-3 col-md-4 col-6"> 
                    <Card
                    note={'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.'}
                    title={'Functional Component'}
                    date={'Kamis, 14 April 2022'}
                    textBtn={'Archieve'}
                    classNameBtn={'btnNote col-12 rounded-4'}
                    styleEdit={{color:'var(--info-light)'}}
                    styleDiv={{
                        color:'var(--light',
                        backgroundColor:'var(--primary)'
                    }}
                    />
                </div>
            </div>
        </div>
    )
}
export default HorizontalScroll