
const Container = (Props) => {
    const { children, id } = Props



    return (
        <div className="container mx-auto mt-20 mb-36" id={id}>
            {children}
        </div>
    )
}

export default Container