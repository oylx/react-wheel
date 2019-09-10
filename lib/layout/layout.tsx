import React, {ReactElement} from 'react'
import './layout.scss'
import Aside from "./aside";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('fui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  const children = props.children as Array<ReactElement>
  //length in children false对比children.length 0
  const hasAside = length in children
    && children.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div
      className={sc({'':true,hasAside: hasAside}, {extra: [className].filter(Boolean).join(' ')})} {...rest}>{props.children}</div>
  )

}
export default Layout