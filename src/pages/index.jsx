import { useEffect, useRef, useState } from "react";
import HorizontalScroll from "../component/HorizontalScroll";
import ModalForm from "../component/ModalForm";
import Navbar from "../component/Navbar";
import {v4 as uuid} from 'uuid';
import Form from "../component/Form";
import Button from "../element/Button";
import { useDispatch, useSelector } from "react-redux";
import Card from "../element/Card";
import { addNotes, deleteNotes, updateNotes } from "../redux/slicers/NotesSlice";
import { useScroll, motion } from "framer-motion";

const index = () => {
    const [data, setData] = useState({
        title:'',
        body:'',
        createdAt:'',
        archived:false,
        id:uuid()
    })
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [archivedData, setArchivedData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [number, setNumber] = useState(50)
    const notes = useSelector(state=>state.note.notes)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataIndex = notes.findIndex(item => item.id === data.id)
        console.log(dataIndex, 'idn');
        if(dataIndex === -1){
            const newNote = {
                ...data,
                createdAt: new Date()
            };
            dispatch(addNotes(newNote))
        } else{
            const editData = [...notes]
            editData.splice(dataIndex,1,data)
            dispatch(updateNotes(editData))
        }
        handleClose()
    }

    const handleClose=()=>{
        setShow(false)
        setShowEdit(false)
        setNumber(50)
        setData({
            id:uuid(),
            title:'',
            body:'',
            archived:false,
            date:new Date()
    })}
    
    const showFormattedDate = (date) => {
        const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
        }
        return new Date(date).toLocaleDateString("id-ID", options)
    }
  
    const processData = (data) => {
        const archived = data.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).filter((item) =>
            item.archived === true 
        );
        const active = data.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).filter((item) =>
            item.archived === false 
        );
            
        setArchivedData(archived);
        setActiveData(active);
    };

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const { scrollXProgress: scrollXProgress1 } = useScroll({ container: ref1, layoutEffect: false });
    const { scrollXProgress: scrollXProgress2 } = useScroll({ container: ref2, layoutEffect: false });
  
    useEffect(() => {
        processData(notes);
        ref1.current = document.querySelector('#cardNotes');
        ref2.current = document.querySelector('#cardArchieves');
    }, [notes, data, searchTerm]);

    const handleArchived = (id, shouldArchive) => {
        const dataIndex = notes.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
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
    
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    // const maxLength = 50; 

    // const handleChangeInput = (e) => {
    //     const inputText = e.target.value;
    //     const remainingChars = maxLength - inputText.length;

    //     if (remainingChars >= 0) {
    //         setData((prevState) => ({
    //             ...prevState,
    //             title: inputText,
    //         }));
    //         setNumber(remainingChars);
    //     }
    // };
  
    return(
        <div className="pb-5">
            <Navbar
                value={searchTerm}
                onChange={handleSearch}
            />
                <Form
                    number={number}
                    show={show || showEdit}
                    modalTitle={'Buat Catatan'}
                    handleClose={handleClose}
                    onSubmit={handleSubmit} 
                    onChangeInput={(e)=>{
                        const remainingChars = 50 - e.target.value.length;

                        if (remainingChars >= 0) {
                            setData((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                            }));
                            setNumber(remainingChars);
                        }
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
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="mt-4" style={{color:'var(--light)'}}>NOTES</h3>
                    <svg id="progress" width="80" height="80" viewBox="0 0 100 100" >
                        <circle  cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollXProgress1}}
                        />
                    </svg>
                </div>
                <div id="cardNotes" className="scrolling-wrapper">
                    {
                        activeData && activeData.length > 0 ?
                        activeData?.map((item)=>(
                        <motion.div
                            key={item.id}
                            className="card col-lg-3 -3 col-md-4 col-6"
                            whileHover={{ scale: 1.1, marginLeft:'20px', marginRight:'20px' }} 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card
                                key={item.id}
                                note={item.body}
                                title={item.title}
                                createdAt={showFormattedDate(item.createdAt)}
                                textBtn={'Archieve'}
                                classNameBtn={'btnNote col-12 rounded-4'}
                                styleEdit={{color:'var(--info-light)'}}
                                styleDiv={{
                                    color:'var(--light)',
                                    backgroundColor:'var(--primary)'
                                }}
                                onClickBtn={()=>
                                    handleArchived(item.id, true)
                                }
                                onClickDelete={()=>handleDelete(item.id)}
                                onClickEdit={() => {
                                    setShowEdit(true);
                                    setData({
                                        id:item.id,
                                        title:item.title,
                                        body:item.body,
                                        createdAt:item.createdAt,
                                        archived:item.archived
                                    })
                                }}
                                />
                            </motion.div>
                        ))
                        :
                            <p className="col-12 text-center" style={{color:'var(--light)'}}>Tidak ada catatan</p>
                        }
                </div>
            </div>



            <div className="ms-5 ps-5 mt-5">
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="mt-4" style={{color:'var(--light)'}}>ARCHIEVED</h3>
                    <svg id="progress" width="80" height="80" viewBox="0 0 100 100" >
                        <circle  cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollXProgress2}}
                        />
                    </svg>
                </div>
                <div id="cardArchieves" className="scrolling-wrapper">
                    {
                        archivedData && archivedData.length > 0?
                        archivedData?.map((item)=>(
                            // <div className="card col-lg-3 col-md-4 col-6"> 
                            <motion.div
                                key={item.id}
                                className="card col-lg-3 -3 col-md-4 col-6"
                                whileHover={{ scale: 1.1, marginLeft:'20px', marginRight:'20px' }} 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card
                                    key={item.id}
                                    note={item.body}
                                    title={item.title}
                                    createdAt={showFormattedDate(item.createdAt)}
                                    textBtn={'Pindahkan'}
                                    classNameBtn={'btnArchieve col-12 rounded-4'}
                                    styleEdit={{color:'var(--info)'}}
                                    styleDiv={{
                                        color:'var(--primary)',
                                        backgroundColor:'var(--light)'
                                    }}
                                    onClickBtn={()=>
                                        handleArchived(item.id,false)}
                                    onClickDelete={()=>handleDelete(item.id)}
                                    onClickEdit={() => {
                                        setShowEdit(true);
                                        setData({
                                            id:item.id,
                                            title:item.title,
                                            body:item.body,
                                            createdAt:item.createdAt,
                                            archived:item.archived
                                        })
                                    }}
                                    />
                                {/* </div> */}
                                </motion.div>
                            ))
                            :
                                <p className=" col-12 text-center" style={{color:'var(--light)'}}>Tidak ada catatan</p>
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
        </div>
    )
}

export default index