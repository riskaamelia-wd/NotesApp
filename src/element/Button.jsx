const Button = ({className, style, type, name, onClick, text}) => {
    return(
        <button
            type={type}
            className={className? `${className} btn`: 'btn ps-3 pe-3'}
            style={style}
            id={name}
            name={name}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
export default Button