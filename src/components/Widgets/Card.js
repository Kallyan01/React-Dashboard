import React, { useRef, useContext } from 'react'
import './Card.css'
import { GlobalContext } from '../Globalcontext/Globalcontext'
import { Draggable } from 'react-beautiful-dnd'
function Card({ query, pic, flag, id, index }) {
    const { card } = useContext(GlobalContext)
    const cardselect = card;
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
                   return <div className='card' ref={cardselect} draggable='true'
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
                                <i class="fas fa-flag" style={flagcol}></i>
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