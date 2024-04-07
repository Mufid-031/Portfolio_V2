import Label from "./Label"
import Input from "./Input"

const Form = (Props) => {

    const { htmlFor, placeholder, type, name, id, value } = Props

    return (
        <>
            <Label className="text-2xl font-semibold text-mainColor mt-3" htmlFor={htmlFor}>{value}</Label>
            <Input className="h-12 pl-2 focus:ring-4 focus:ring-mainColor" placeholder={placeholder} type={type} name={name} id={id} />
        </>
    )
}

export default Form