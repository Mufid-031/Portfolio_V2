const AuntLayout = (Props) => {
    const { children } = Props

    return (
        <div className="flex flex-wrap lg:justify-between mx-auto w-full">
            {children}
        </div>

    )
}

export default AuntLayout