const Button = (Props) => {
    const {className, children, onClick } = Props
    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}

export default Button