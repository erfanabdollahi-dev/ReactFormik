import React from 'react';
import Input from './Input';
import Textarea from './TextArea';
import Select from './Select';
import Radio from './Radio';
import CheckBox from './Checkbox';

const FormikControl = (props) => {
 
    
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'textarea':
            return <Textarea {...props} />
        case 'select':
            return <Select {...props} />
        case 'radio':
            return <Radio {...props} />
        case 'checkbox':
            return <CheckBox {...props} />
        default:
            break;
    }
};

export default FormikControl;
