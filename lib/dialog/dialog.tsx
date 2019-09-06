import React, {Fragment, ReactElement, ReactFragment} from 'react';
import ReactDOM from 'react-dom'
import {Icon} from '../index'
import {scopedClassMaker} from '../classes'
import "./dialog.scss"
import "./../index.scss"

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnclickMask?: boolean
}

const scopedClass = scopedClassMaker('fui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnclickMask) {
      props.onClose(e)
    }
  }
  const x = props.visible ?//return必须是组件或null,但是props.children可能是组件或非组件，所以包一层div
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
          {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </Fragment>
    :
    null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}
Dialog.defaultProps = {
  closeOnclickMask: false
}
const alert = (content: string) => {
  const onClose = () => {
    //关闭事件:重新渲染
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    //unmountComponentAtNode并remove元素
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const buttons = [
    <button onClick={onClose}>OK</button>,
  ]
  const component = <Dialog visible={true} onClose={onClose} buttons={buttons}>{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const onYes = () => {
    onClose();
    yes && yes()
  }
  const onNo = () => {
    onClose();
    no && no();
  }
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]
  const component =
    <Dialog visible={true}
            buttons={buttons}
            onClose={onNo}>{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

const modal = (content: ReactElement | ReactFragment) => {
  const onClose = () =>{
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component =
    <Dialog visible={true}
            onClose={onClose}>{content}</Dialog>;
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component,div)
  return onClose
}
export {alert, confirm, modal}
export default Dialog