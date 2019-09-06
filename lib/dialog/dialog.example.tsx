import React, {useState} from 'react'
import Dialog,{alert} from './dialog'

export default function () {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
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
        <button onClick={() => setY(!y)}>点我</button>
        <Dialog visible={y}
                onClose={() => setY(false)}
                buttons={[
                  <button>1</button>,
                  <button>2</button>
                ]}>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
      </div>
    </div>
  )
}