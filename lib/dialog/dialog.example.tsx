import React, {useState} from 'react'
import Dialog from './dialog'

export default function () {
  const [x, setX] = useState(false)
  return (
    <div>
      <button onClick={() => setX(!x)}>点我</button>
      <Dialog visible={x}
              onClose={() => setX(false)}
              buttons={[
                <button>1</button>,
                <button>2</button>
              ]}>
      </Dialog>
    </div>
  )
}