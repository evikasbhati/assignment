import "./inputField.css"

const InputField=(props)=>{
    const {type="text",name,placeholder,onChange}=props;
    return(
        <>
        <input
              className="input"
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
            />
        </>
    )
}
export default InputField