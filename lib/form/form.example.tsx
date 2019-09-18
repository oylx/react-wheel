import React, {useRef, useState} from 'react'
// import Form from './form'

const FormExample: React.FunctionComponent = () => {
  // const [formData] = useState({
  //   username: '',
  //   password: ''
  // })
  //
  // const [fields] = useState([
  //   {name: 'username', label: '用户名', input: {type: 'text'}},
  //   {name: 'password', label: '密码', input: {type: 'password'}}
  // ])

  const [name, setName] = useState('frank');
  const refInput = useRef<HTMLInputElement>(null);

  const x = () => {
    console.log(refInput.current!.value || '')//refInput.current!.value断言
  }
  return (
    <>
      //受控组件,受react控制
      <input value={name} onChange={(e) => {setName(e.target.value)}}/>
      //非受控组件,不受react控制
      <input defaultValue={name} ref={refInput} type="text" onBlur={x}/>
    </>
  )
  // return (
  //   <>
  //     <Form value={formData}
  //           fields={fields}
  //           onSubmit={() => {}}
  //           buttons={<>
  //             <button type="submit">提交</button>
  //             <button>返回</button>
  //           </>}>
  //     </Form>
  //   </>
  // )
}
export default FormExample