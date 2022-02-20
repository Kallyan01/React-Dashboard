import React, { useState} from 'react'
import Card from '../Widgets/Card'
import './Releaseproject.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function Releaseproject() {
  
  const [Readydata, setReadydata] = useState([{
    "id": "task-1",
    "pic": "user1",
    "content": "Our Description is broken",
    "flag": "green"
  },
  {
    "id": "task-2",
    "pic": "user2",
    "content": "Footer Not showing",
    "flag": "green"
  }])
  const [Inprogressdata, setInprogressdata] = useState([
    {
      "id": "task-8",
      "pic": "user3",
      "content": "Email is not working in site",
      "flag": "blue"
    },
    {
      "id": "task-9",
      "pic": "user2",
      "content": "Admin panel os not working",
      "flag": "blue"
    },
    {
      "id": "task-10",
      "pic": "user5",
      "content": "Our site is showing 404 not found",
      "flag": "blue"
    }
  ])
  const [Reviewdata, setReviewdata] = useState([{
    "id": "task-3",
    "pic": "user3",
    "content": "Our Description is broken",
    "flag": "red"
  },
  {
    "id": "task-4",
    "pic": "user4",
    "content": "Footer Not showing",
    "flag": "red"
  },
  {
    "id": "task-5",
    "pic": "user5",
    "content": "Our site is showing 404 not found",
    "flag": "red"
  },
  {
    "id": "task-6",
    "pic": "user6",
    "content": "Need to upgrade the UI/UX, our reach is good but user conversion is not inproving ",
    "flag": "red"
  },
  {
    "id": "task-7",
    "pic": "user7",
    "content": "Database is not updating in our main site",
    "flag": "red"
  }])

  function onDragEnd(result) {
    
    const { source, destination } = result
    let add;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return
    if (source.droppableId === 'ready') {
      add = Readydata[source.index]
      Readydata.splice(source.index, 1)
    }
    if (source.droppableId === 'inprog') {
      
      add = Inprogressdata[source.index]
      Inprogressdata.splice(source.index, 1)
    }
    if (source.droppableId === 'rev') {
   
      add = Reviewdata[source.index]
      Reviewdata.splice(source.index, 1)
    }
    if (destination.droppableId === 'ready') {

      Readydata.splice(destination.index, 0, add)
      setReadydata([...Readydata])
     
    }
    if (destination.droppableId === 'inprog') {

      Inprogressdata.splice(destination.index, 0, add)
      setInprogressdata([...Inprogressdata])
      
    }
    if (destination.droppableId === 'rev') {

      Reviewdata.splice(destination.index, 0, add)
      console.log("Executed")
      setReviewdata([...Reviewdata])
      
    }
  }
  return (
    <div className='releaseproject'>
      <div className="pagetitle">
        <i class="fas fa-cube"></i>
        <h3>Release Project</h3>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="re-container">

          <div className="ready cont">
            <div className="cont-header ">
              <h4>Ready</h4>
              <span>{Readydata.length}</span>
            </div>
            <Droppable droppableId={'ready'}>
              {(provided) => {
                return <div className='cardlist' ref={provided.innerRef} {...provided.droppableProps} >
                  {Readydata.map((a, idx) => {
                    return <Card key={idx} index={idx} id={a.id} pic={a.pic} query={a.content} flag={a.flag} />
                  })}
                  {provided.placeholder}
                </div>
              }
              }
            </Droppable>
          </div>

          <div className="inprogress cont">
            <div className="cont-header ">
              <h4>In Progress</h4>
              <span>{Inprogressdata.length}</span>
            </div>
            <Droppable droppableId={'inprog'}>
              {(provided) => {
                return <div className='cardlist' ref={provided.innerRef} {...provided.droppableProps} >
                  {Inprogressdata.map((a, idx) => {
                    return <Card key={idx} index={idx} id={a.id} pic={a.pic} query={a.content} flag={a.flag} />
                  })}
                  {provided.placeholder}
                </div>
              }
              }
            </Droppable>
          </div>
          <div className="review cont">
            <div className="cont-header">
              <h4>Review</h4>
              <span>{Reviewdata.length}</span>
            </div>
            <Droppable droppableId={'rev'}>
              {(provided) => {
                return <div className='cardlist' ref={provided.innerRef} {...provided.droppableProps} >
                  {Reviewdata.map((a, idx) => {
                    return <Card key={idx} index={idx} id={a.id} pic={a.pic} query={a.content} flag={a.flag} />
                  })}
                  {provided.placeholder}
                </div>
              }
              }
            </Droppable>


          </div>
        </div>
      </DragDropContext>


    </div>
  )
}

export default Releaseproject