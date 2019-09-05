import React, {Fragment, ReactElement} from 'react';
import {Icon} from '../index'
import {scopedClassMaker} from '../classes'
import "./dialog.scss"
import "./../index.scss"

interface Props {
  visible:boolean;
  buttons:Array<ReactElement>;
  onClose:React.MouseEventHandler;
  closeOnclickMask?:boolean
}

const scopedClass = scopedClassMaker('fui-dialog')
const sc = scopedClass
console.log(sc)

const Dialog:React.FunctionComponent<Props>=(props)=>{
  const onClickClose:React.MouseEventHandler =(e)=>{
    props.onClose(e)
  }
  const onClickMask:React.MouseEventHandler =(e)=>{
    if(props.closeOnclickMask){
      props.onClose(e)
    }
  }
  return (
    props.visible?//return必须是组件或null,但是props.children可能是组件或非组件，所以包一层div
      <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
        <div className={sc()}>
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="close"></Icon>
          </div>
          <header className={sc('header')}>提示</header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.buttons.map((button,index)=>React.cloneElement(button,{key:index}))}
          </footer>
        </div>
      </Fragment>
      :
      null
  )
}
export default Dialog