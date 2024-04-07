const input = (Props) => {

    const { className, placeholder, type, name, id } = Props

    return (
        <input className={className} placeholder={placeholder} type={type} name={name} id={id} />
    )
}

export default input