import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('fui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const result = props.visible ?//return必须是组件或null,但是props.children可能是组件或非组件，所以包一层div
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
          {props.buttons && props.buttons.length > 0 && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </Fragment>
    :
    null
  return (
    ReactDOM.createPortal(result, document.body)
  )
}
Dialog.defaultProps = {
  closeOnClickMask: false
}
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    //关闭事件:重新渲染
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    //unmountComponentAtNode并remove元素
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}>
      {content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return close
}

const alert = (content: string) => {
  const close = modal(content, [<button onClick={() => {close}}>OK</button>])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
}
export {alert, confirm, modal}
export default Dialog