import logo from '../assets/logo.png'
const Logo = () => {
    return(
        <div className='d-flex flex-row'>
            <div>
                <img src={logo} style={{width:'4em'}} alt="SnapNote" />
            </div>
            <p style={{color:'var(--primary)'}} className='fw-bold fs-2 d-flex align-items-center'>SNAP<span className='fw-light'>NOTE</span></p>
        </div>
    )
}
export default Logo