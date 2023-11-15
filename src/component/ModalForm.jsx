import Button from "../element/Button"

const ModalForm = ({number, onClick, onClickBtn, onChangeInput, onChangeTextarea, nameInput, nameTextarea, valueInput, valueTextarea}) => {
    return(
        <>
            <button
                onClick={onClick}
                type="type"
                // className={className? className : ''}
                className="btn btnForm border border-0 position-fixed bottom-0 end-0 me-4 mb-4"
                data-bs-toggle='modal'
                data-bs-target='#formNote'
            >
                <i
                    style={{fontSize:'3em'}} 
                    className="bi p-0 m-0 bi-plus-circle-fill col-12"
                ></i>
            </button>
            <div 
                className="modal fade"
                id="formNote"
                tabIndex='-1'
                aria-labelledby="exampleModalLabel"
                aria-hidden='true'
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                >
                    <div
                        className="modal-content p-1"
                        style={{backgroundColor:'var(--light)'}}
                    >
                        <div
                            className="modal-body pe-4 ps-4"
                            style={{color:'var(--primary)'}}
                        >
                            <p className="fs-3 m-0 fw-bold">Buat Catatan</p>
                            <p className="m-0 text-end fw-semibold mb-1">Sisa Karakter : {number}</p> 
                            <input 
                                type="text" 
                                placeholder="Ini adalah judul ..."
                                className="form-control border border-0 rounded-3"
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
                                    onClick={onClickBtn}
                                    style={{color:'var(--light)', backgroundColor:'var(--primary)'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ModalForm