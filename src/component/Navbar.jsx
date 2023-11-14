import Logo from "../element/Logo"
import Search from "../element/Search"

const Navbar = ({value, onChange}) => {
    return(
        <div className="d-flex flex-row justify-content-between" style={{backgroundColor:'var(--secondary)'}}>
            <div className="col-2">
                <Logo/>
            </div>
            <div className="col-4 col-md-3 me-3 mt-1">
                <Search
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Navbar