import React from 'react'
import './Card.css'
import { Draggable } from 'react-beautiful-dnd'
function Card({ query, pic, flag, id, index }) {

    const flagcol = {
        color: `${flag}`,
        fontSize: `.8em`,
        background: 'none',
        padding: '2px'
    }

    return (
        <Draggable draggableId={id} index={index} key={id}>
            {
             (provided) => {
                   return <div className='card'  draggable='true'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        >
                        <div className="details">
                            <div className="path">
                                Release Project &gt; Stage 1
                            </div>
                            <div className="query">
                                {query}
                            </div>
                            <div className="flag">
                                <i className="fas fa-flag" style={flagcol}></i>
                            </div>
                        </div>
                        <div className="customer-pic">
                            <img src={`userimage/${pic}.jpg`} alt="" />
                        </div>
                    </div>
                }
            }

        </Draggable>
    )
}

export default Card