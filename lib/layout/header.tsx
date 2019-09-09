import React from 'react'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('fui-layout')

const Header: React.FunctionComponent = (props) => {
  return (
    <div className={sc('header')}>{props.children}</div>
  )
}
export default Header