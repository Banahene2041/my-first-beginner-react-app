import React from 'react'
import ReactDom from "react-dom"
import "./index.css"
import { data } from './books'
import SpecificBook from './Book'

// setup vars

function Booklist() {
  return (
        <section className='booklist'>
          {data.map((book)=> {
            return <SpecificBook key={book.id} {...book}></SpecificBook>
          })}
        </section>
    )  
}



// const Booklist = ()=> {
//   return React.createElement("div",{},React.createElement("h1",{},"Hello world"))
// }



ReactDom.render(<Booklist />, document.getElementById("root"))


