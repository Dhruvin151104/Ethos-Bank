import React,{useEffect} from 'react'

function Inputsingle(props) {
    const handleChange = (e) => {
        props.setparameter({ ...props.parameter, [e.target.name]: e.target.value });
        props.setfocusIndex(parseInt(e.target.name) + 1);
      };
    
    useEffect(() => {
        if (props.focusIndex === parseInt(props.name)) {
          props.setparameter({ ...props.parameter, [props.inputRef.current[props.name].name]: "" });
          props.inputRef.current[props.name].focus();
        } else {
          props.inputRef.current[props.name].blur();
        }
      }, [props.focusIndex]);
  
      return (
        <input
          ref={(el) => (props.inputRef.current[props.name] = el)}
          type="number"
          name={props.name}
          value={props.parameter[props.name] || ""}
          className="outline-none h-12 w-12 bg-gray-200 shadow-inner rounded-lg text-center caret-transparent text-2xl font-medium focus:bg-blue-500 remove-arrow"
          onChange={handleChange}
          onClick={(e) => {
            e.target.focus();
            props.setfocusIndex(parseInt(props.name));
          }}
        ></input>
      );
}

export default Inputsingle
