import '../App.css'

const Search = ({value,onChange}) => {
    return(
        <>
            <div className="d-flex flex-row">
                <i className="bi bi-search m-2" style={{color:'var(--primary)'}}></i>
                <input
                    placeholder="Cari Catatan ..."
                    type="text"
                    name="search"
                    id="search"
                    value={value}
                    onChange={onChange}
                    style={{color:'var(--primary)'}}
                    className="form-control-plaintext  ms-1"
                />
            </div>
            <hr 
                style={{border:'3px solid red'}}
                className="border m-0" 
                // style={{borderColor:'var(--danger'}}
            />
        </>
    )
}
export default Search