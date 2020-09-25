import React from 'react'
import * as ReactDOM from 'react-dom'

import Article from './components/article'

import first from '../assets/articles/first.md'

const Main = () => {
    return (
        // <h1>Hello</h1>
        <>
            {/* <Article content={"# Hello\nThis **was** buil~~d~~t by __React__"} /> */}
            <Article content={first} />
            {console.log(first)}
        </>
    )
}

ReactDOM.render(<Main />, document.querySelector('#view'))
