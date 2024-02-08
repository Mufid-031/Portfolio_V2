const Container = (Props) => {
    const { children } = Props

    return (
        <div className="container mx-auto mt-20 mb-36">
            {children}
        </div>
    )
}

export default Container