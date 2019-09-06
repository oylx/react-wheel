import React, {useState} from 'react'
import Dialog, {alert, confirm, modal} from './dialog'

export default function () {
  const [x, setX] = useState(false)
  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={() =>close()}>close</button>
    </h1>);
  };
  return (
    <div>
      <div style={{position: 'relative', border: 'solid 1px red', zIndex: 10, color: 'red'}}>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>点我</button>
        <Dialog visible={x}
                onClose={() => setX(false)}
                buttons={[
                  <button>1</button>,
                  <button>2</button>
                ]}>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={openModal}>modal</button>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
      </div>
      <div>
        <h1>example 4</h1>
        <button onClick={() => confirm('1', () => {console.log('yes')}, () => {console.log('no')})}>confirm</button>
      </div>
    </div>
  )
}