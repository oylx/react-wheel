import React from 'react'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Aside from "./aside";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('fui-layout')
export default function () {
  return(
    <div>
      <div>
        <h1>这是第一个例子</h1>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>这是第二个例子</h1>
        <Layout className={'hi'}>
          <Header>Header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>这是第三个例子</h1>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>这是第四个例子</h1>
        <Layout className={sc({x:true,y:false,z:true})}>
          <Aside>aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>

    </div>
  )
}