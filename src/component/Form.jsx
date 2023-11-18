import { Modal } from "react-bootstrap"
import Button from "../element/Button"
// import  './style.css'

const Form = ({number, show, handleClose, onSubmit, onChangeInput, onChangeTextarea, nameInput, nameTextarea, valueInput, valueTextarea, modalTitle}) => {
    return(
        <>
            <Modal show={show} 
            // dialogClassName={style.modal} as Modal attribute
            // style={{backgroundColor:'var(--light) !important'}} 
            onHide={handleClose} centered>
                {/* <Modal.Header  closeButton>
                    <Modal.Title >
                        Buat Catatan
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body 
                className="modal-bg"
                // style={{color:'var(--primary)'}}
                >
                    <p className="fs-3 m-0 fw-bold modal-bg">{modalTitle}</p>
                    <p className="m-0 text-end fw-semibold mb-1">Sisa Karakter : {number}</p> 
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Ini adalah judul ..."
                            className="btnBuat form-control border border-0 rounded-3"
                            style={{color:'var(--primary)', backgroundColor:'var(--secondary)'}}
                            name={nameInput} 
                            id={nameInput}
                            value={valueInput}
                            onChange={onChangeInput}
                        />
                        <textarea 
                            rows="6"
                            placeholder="Tuliskan catatanmu di sini"
                            className="form-control border border-0 mt-3 mb-4 rounded-3"
                            style={{color:'var(--primary)', backgroundColor:'var(--secondary)'}}
                            name={nameTextarea} 
                            id={nameTextarea}
                            value={valueTextarea}
                            onChange={onChangeTextarea}
                            ></textarea>
                        <div
                            className={'col-5 m-auto'}
                        >
                            <Button
                                className={'col-12 rounded-3 btnBuat'}
                                text={'Buat'}
                                type={'submit'}
                                // onClick={onClickBtn}
                                style={{color:'var(--light)', backgroundColor:'var(--primary)'}}
                            />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Form