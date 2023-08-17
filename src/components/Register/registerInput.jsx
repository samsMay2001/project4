import { useState } from "react";

function RegisterInput({inputVal, setInputVal, type, name, placeholder}) {
    const [classToBe, setClassTobe] = useState(''); 
    return ( 
        <input className={classToBe}  type={type} name={name} 
            placeholder={placeholder}
            required 
            value={inputVal} 
            onChange={(e)=> setInputVal(e.target.value)} 
            onBlur={()=> {
                if(inputVal.length<=0){
                    setClassTobe('bad-field')
                }else {
                    setClassTobe(''); 
                }
            }}
        />
     );
}

export default RegisterInput;