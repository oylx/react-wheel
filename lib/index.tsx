import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icons/icon'

const fn:React.MouseEventHandler =(e)=>{
    console.log(e)
    console.log(e.target)
    console.log((e.target as SVGUseElement).href)//断言

}

ReactDOM.render(<div>
    <Icon name="wechat"
          onClick={fn}
          onMouseEnter={()=>console.log('enter')}
    />
    <Icon name="qq"
          onClick={fn}
          onMouseEnter={()=>console.log('enter')}
    />

</div>,document.getElementById('root'))