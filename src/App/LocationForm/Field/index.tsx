import { FormControl, FormGroup, FormText } from "react-bootstrap"
import InputMask from 'react-input-mask'

// funcs
const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1)

// component
export interface props { label?: string, name: string, value?: string, type: string, isLocked?: boolean, placeholder?: string, tip?: string, onChange?: React.ChangeEventHandler<HTMLTextAreaElement> }
export const Field = (props: props) => <FormGroup>
    <label htmlFor={props.name}>{capitalize(props.label ?? props.name)}</label>
    <FormControl as={InputMask}
        readOnly={props.isLocked}
        onChange={props.onChange}
        type={props.type}
        id={props.name}
        value={props.value}
        mask={props.type == 'zip' ? "99999-999" : [/\w+(\s+\w+)*/]}
        placeholder={props.placeholder ?? `Digite seu ${props.name}`}
    />
    {props.tip ? <FormText id="tip" className="text-muted">{props.tip}</FormText> : ""}
</FormGroup>