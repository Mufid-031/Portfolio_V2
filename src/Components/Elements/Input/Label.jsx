const Label = (Props) => {

    const { className, htmlFor, children } = Props

    return (
        <label className={className} htmlFor={htmlFor}>{children}</label>
    )
}

export default Label