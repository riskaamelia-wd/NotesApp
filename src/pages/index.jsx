import { useState } from "react";
import HorizontalScroll from "../component/HorizontalScroll";
import ModalForm from "../component/ModalForm";
import Navbar from "../component/Navbar";
import {v4 as uuid} from 'uuid';
import Form from "../component/Form";
import Button from "../element/Button";

const index = () => {
    
  const [data, setData] = useState({
    title:'',
    body:'',
    createdAt:'',
    archived:false,
    id:uuid()
  })
  const [show, setShow] = useState(false)
  const handle = (e) => {
    e.preventDefault()
    console.log(data);
    if (data?.title !== '' && data?.body !== ''){
        setData((filledState)=>({
            ...filledState,
            title: data?.title,
            body: data?.body,
            createdAt:new Date()
        }))
    }
    // setShow(false)
    handleClose()
  }

  const handleClose=()=>{
    setShow(false)
    // setData({
    //     id:'',
    //     title:'',
    //     body:'',
    //     archived:'',
    //     date:''
    // })
  }
    return(
        <>
            <Navbar/>
                <Form
                    number={50}
                    show={show}
                    modalTitle={'Buat Catatan'}
                    handleClose={handleClose}
                    onClickBtn={handle} 
                    // onClick
                    onChangeInput= {(e) => {
                    setData((filledState) => ({
                    ...filledState,
                    title: e.target.value,
                    }));
                }}
                    onChangeTextarea={(e)=>{
                    setData((filledState)=>({
                        ...filledState,
                        body:e.target.value
                    }))
                    }}
                    nameInput={'title'}
                    nameTextarea={'body'}
                    valueInput={data?.title}
                    valueTextarea={data?.body}
                />
                
            {/* { data !== '' ? */}
            <HorizontalScroll
                header={'Notes'}
                body={data?.body}
                title={data?.title}
                date={data?.date}
            />
            <Button
                type={'submit'}
                onClick={() => {
                    setShow(true);
                }}
                className="btn btnForm border border-0 position-fixed bottom-0 end-0 me-4 mb-4"
                text={
                    <i
                        style={{fontSize:'3em'}} 
                        className="bi p-0 m-0 bi-plus-circle-fill col-12">
                    </i>
            }
            />
            {/* } */}
        </>
    )
}

export default index