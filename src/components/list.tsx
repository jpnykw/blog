import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

interface Props {
    items: string[]
    setArticle: any
}

const List: React.FC<Props> = (props) => {
    return (
        <>
            {/* {props.items} */}
            <FixedSizeList height={400} width={300} itemSize={46} itemCount={1}>
                {
                    () => (
                        props.items.map((title, index) => (
                            <ListItem button key={index}>
                                <ListItemText
                                    onClick={() => props.setArticle(title)}
                                >
                                    {title}
                                </ListItemText>
                            </ListItem>
                        ))
                    )
                }
            </FixedSizeList>
        </>
    )
}

export default List
