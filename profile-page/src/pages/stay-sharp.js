import React from "react"

import Layout from "../components/layout"
import {
    FaRegClock
} from "react-icons/fa"
import {
    AiOutlineCodeSandbox
} from 'react-icons/ai'

import './stay-sharp.css'

const StaySharp = () => (
  <Layout>
      <div id="main-content">
        <div id="main-content__center">
            <Title></Title>
                
            <Content></Content>
        </div>

      </div>
  </Layout>
)

function Title() {
    return (
        <div className = "title__panel">
            <div className = "title__content">
                <div className = "title__icon">
                    <FaRegClock size = {64} />
                </div>
                <div className = "title__text">
                    <h3>Stay Sharp</h3>
                    <h2>Minute Tech Tips</h2>
                </div>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className = "content__panel">
            <p>Stay Sharp Minute Tech Tips is a weekly tech email subscription that is 100% free. Each week,  I give you one lesson about one of the following topics:</p>
            <ul>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Javascript / Node.js</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>React</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Python</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Machine Learning</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Database Design</li>
            </ul>
            <p>Weekly emails are normally sent every Thursday morning. Please message me with suggestions for future tips.</p>
        </div>
    )
}

function SubscribeForm() {

}

export default StaySharp
