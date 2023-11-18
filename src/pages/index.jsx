import { useEffect, useState } from "react";
import HorizontalScroll from "../component/HorizontalScroll";
import ModalForm from "../component/ModalForm";
import Navbar from "../component/Navbar";
import {v4 as uuid} from 'uuid';
import Form from "../component/Form";
import Button from "../element/Button";
import { useDispatch, useSelector } from "react-redux";
import Card from "../element/Card";
import { addNotes, deleteNotes, updateNotes } from "../redux/slicers/NotesSlice";

const index = () => {
    
  const [data, setData] = useState({
    title:'',
    body:'',
    createdAt:'',
    archived:false,
    id:uuid()
  })
  const [show, setShow] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    if (data?.title !== '' && data?.body !== ''){
        const newNote = {
            ...data,
            createdAt: new Date().toLocaleDateString()
        };
        dispatch(addNotes(newNote))
    }
    // setShow(false)
    handleClose()
  }

  const handleClose=()=>{
    setShow(false)
    setData({
        id:'',
        title:'',
        body:'',
        archived:'',
        date:''
    })
  }
  const [archivedData, setArchivedData] = useState([]);
  const [activeData, setActiveData] = useState([]);
    const notes = useSelector(state=>state.note.notes)
    const dispatch = useDispatch()
    console.log(notes);
    const processData = (data) => {
        const archived = data.filter(item => item.archived === true);
        const active = data.filter(item => item.archived === false);
        setArchivedData(archived);
        setActiveData(active);
    };
    useEffect(() => {
        processData(notes);
        console.log(notes, 'fdat');
        // setData(notes)
    }, [notes, data]);

    const handleArchived = (id, shouldArchive) => {
        const dataIndex = notes.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
            // const updatedNotes = [...notes];
            const updatedNotes = JSON.parse(JSON.stringify(notes)); 
       
            updatedNotes[dataIndex].archived = shouldArchive;
            dispatch(updateNotes(updatedNotes));
        } else {
            console.log('Item not found');
        }
    };

    const handleDelete = (id) =>{
        dispatch(deleteNotes(id))
    }
    
    
    return(
        <>
            <Navbar/>
                <Form
                    number={50}
                    show={show}
                    modalTitle={'Buat Catatan'}
                    handleClose={handleClose}
                    onSubmit={handleSubmit} 
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
            {/* <HorizontalScroll
                // key={id}
                header={'Notes'}
                data={activeData}
                textBtn={'Archieve'}
                classNameBtn={'btnNote col-12 rounded-4'}
                styleEdit={{color:'var(--info-light)'}}
                styleDiv={{
                    color:'var(--light)',
                    backgroundColor:'var(--primary)'
                }}
                setForm={setNote}
            />
            <HorizontalScroll
                header={'ARCHIEVE'}
                data={archivedData}
                textBtn={'Pindahkan'}
                classNameBtn={'btnArchieve col-12 rounded-4'}
                styleEdit={{color:'var(--info)'}}
                styleDiv={{
                    color:'var(--primary)',
                    backgroundColor:'var(--light)'
                }}
            /> */}
            <div className="ms-5 ps-5 mt-5">
                <h3 style={{color:'var(--light)'}}>NOTES</h3>
                <div className="scrolling-wrapper">
                    {
                        activeData ?
                        activeData?.map((item)=>(
                            <div className="card col-lg-3 col-md-4 col-6"> 
                                <Card
                                    key={item.id}
                                    note={item.body}
                                    title={item.title}
                                    createdAt={item.createdAt}
                                    textBtn={'Archieve'}
                                    classNameBtn={'btnNote col-12 rounded-4'}
                                    styleEdit={{color:'var(--info-light)'}}
                                    styleDiv={{
                                        color:'var(--light)',
                                        backgroundColor:'var(--primary)'
                                    }}
                                    // onClickBtn={()=>handleBtnNote(item.id)}
                                    onClickBtn={()=>
                                        handleArchived(item.id, true)
                                    }
                                    onClickDelete={()=>handleDelete(item.id)}
                                    />
                    </div>
                            ))
                                :
                                <p>no data</p>
                            }
                </div>
            </div>



            <div className="ms-5 ps-5 mt-5">
                <h3 style={{color:'var(--light)'}}>ARCHIEVED</h3>
                <div className="scrolling-wrapper">
                    {
                        archivedData ?
                        archivedData?.map((item)=>(
                            <div className="card col-lg-3 col-md-4 col-6"> 
                                <Card
                                    key={item.id}
                                    note={item.body}
                                    title={item.title}
                                    createdAt={item.createdAt}
                                    textBtn={'Archieve'}
                                    classNameBtn={'btnArchieve col-12 rounded-4'}
                                    styleEdit={{color:'var(--info)'}}
                                    styleDiv={{
                                        color:'var(--primary)',
                                        backgroundColor:'var(--light)'
                                    }}
                                    // onClickBtn={()=>handleBtnArchieved(item.id)}
                                    onClickBtn={()=>
                                        handleArchived(item.id, false)}
                                    onClickDelete={()=>handleDelete(item.id)}
                                    />
                    </div>
                            ))
                                :
                                <p>no data</p>
                            }
                </div>
            </div>
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