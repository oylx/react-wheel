import React, {ReactFragment} from 'react'

interface FormValue {
  [k: string]: any
}

interface Props {
  value: FormValue,
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onChange: (value: FormValue) => {}
  onSubmit: React.FormEventHandler
}


const Form: React.FunctionComponent<Props> = (props) => {

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  }

  const onInputChange = (name: string, e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(name, e.target.value)
    // props.onChange({...props.value,username:e.target.value})
  }
  return (
    <form onSubmit={onSubmit}>
      {
        props.fields.map(f =>
          <div key={f.name}>
            {f.label}
            <input type={f.input.type} value={props.value[f.name]} onChange={onInputChange.bind(null, f.name)}/>
          </div>)
      }
      <div>{props.buttons}</div>
    </form>
  )
}
export default Form
export {FormValue}
