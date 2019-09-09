import React from 'react'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('fui-layout')
export default function () {
  return(
    <div>
      <div>
        <h1>这是第一个例子</h1>
        <Layout className={'hi'}>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  )
}