
const Container = (Props) => {
    const { children } = Props

    return (
        <div className="bg-white">
            {children}
        </div>
    )
}

export default Container