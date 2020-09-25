import React from 'react'

import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

interface Props {
    content: string
}

const Article: React.FC<Props> = (props) => {
    return (
        // <ReactMarkdown source={props.content} />
        <>
            {
                unified().use(parse).use(remark2react)
                .processSync(props.content).result
            }
        </>
    )
}

export default Article
