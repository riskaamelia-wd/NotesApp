const Button = ({className, style, type, name, dataBsDismiss, onClick, text}) => {
    return(
        <button
            type={type ? type : "button"}
            className={className? `${className} btn`: 'btn ps-3 pe-3'}
            style={style}
            id={name}
            name={name}
            onClick={onClick}
            data-bs-dismiss={dataBsDismiss}
        >
            {text}
        </button>
    )
}
export default Button