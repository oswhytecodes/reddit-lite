 const Form = () =>{
    return(
        <div className="Form">
            <input 
            className="input-form"
            type="text" 
            placeholder="Search topic..."
            // value={value}
            onChange={(e) => console.log(e.target.value)}
            />
        </div>
    )
}
export default Form