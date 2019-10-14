import React, {useState} from 'react'
import Form ,{FormValue} from './form'

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'oylx',
    password: ''
  })

  const [fields] = useState([
    {name: 'username', label: '营业执照号码', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData)
  }

  return (
    <>
      <Form value={formData}
            fields={fields}
            onSubmit={onSubmit}
            onChange={(newValue) => setFormData(newValue)}
            buttons={
              <>
                <button type="submit">提交</button>
                <button>返回</button>
              </>
            }
      >
      </Form>
    </>
  )
}
export default FormExample