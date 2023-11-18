import Card from "../element/Card"

const HorizontalScroll = ({textBtn, classNameBtn, styleDiv, styleEdit, data, header, setForm}) =>{
    // console.log(data[0].body, ' data');
    // const datas = data

    const onClickBtn=(id)=>{
        const item = product.find((item)=>item.id === id)
        setForm(item)
    }

    return(
        <div className="ms-5 ps-5 mt-5">
            <h3 style={{color:'var(--light)'}}>{header}</h3>
            <div className="scrolling-wrapper">
                {
                    data ?
                        data?.map((item)=>(
                <div className="card col-lg-3 col-md-4 col-6"> 
                            <Card
                                note={item.body}
                                title={item.title}
                                createdAt={item.createdAt}
                                textBtn={textBtn}
                                classNameBtn={classNameBtn}
                                styleEdit={styleEdit}
                                styleDiv={styleDiv}
                                onClickBtn={()=>onClickBtn(item.id)}
                                />
                </div>
                        ))
                            :
                            <p>no data</p>
                        }
            </div>
        </div>
    )
}
export default HorizontalScroll