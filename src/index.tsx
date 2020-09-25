import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'

import Article from './components/article'
import List from './components/list'

import first from '../assets/articles/first.md'
import cat from '../assets/articles/cat.md'
import weakNewGame from '../assets/articles/weak-new-game.md'

const StyledDiv = styled.div`
    font-size: 30;
    margin: 20px;
`

const getArticle = (title: string) => {
    switch (title) {
        case 'これは何': return first
        case 'ネコチャン': return cat
        case '弱くてニューゲム': return weakNewGame
    }
}

const Main = () => {
    const [article, setArticle] = useState('これは何')

    return (
        <>
            <Grid container>
                <Grid item xs={5}>
                    <StyledDiv>記事一覧</StyledDiv>
                    <List
                        items={["これは何", "ネコチャン", "弱くてニューゲム"]}
                        setArticle={setArticle}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Article content={getArticle(article)} />
                </Grid>
            </Grid>
        </>
    )
}

ReactDOM.render(<Main />, document.querySelector('#view'))
