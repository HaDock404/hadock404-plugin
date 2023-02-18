import './style.css'
import React from "react";
import { useState } from "react";

let i = 0;

function Modal(props) {
  

  function handleClick(event) {
    props.setClickedElement(event.target);
    let word = event.target
    props.setDisplay(!props.display)
    props.data(word)
  }

  let modalState = ""

  if (props.display === true) {
    modalState = "block"
  } else {
    modalState = "none"
  }

  return (
    <div 
      style={
        {
          display: `${modalState}`,
          backgroundColor: `${props.modalBackgroundColor}`,
          width: `${props.modalWidth}`,
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          position: "absolute",
          maxHeight: `${props.modalMaxheight}`,
          overflow: "scroll"
        }
      }
    >
      {props.wordsList.map(
        word => 
        <div
          className="wordList"
          data={word.word}
          key={i++} 
          style={
            {
              textAlign: "center",
              padding: "5px",

              cursor: "pointer",            
            }
          }
          onClick={handleClick}
        >
          {word.word}
        </div>
        )
      }
      
    </div>
  )
}

export default function HaDock404Plugin(props) {

  const [modal, setModal] = useState(false)  

  function data(e) {
    props.onDataReceived(e)
  }

  return (
    <div>
      <button 
        id="button" 
        type="button"
        style=
          {
            {
              backgroundColor: `${props.dropdownBackgroundColor}`, 
              width: `${props.dropdownWidth}`, 
              height: `${props.dropdownHeight}`,
              color: `${props.dropdownColor}`,
              fontWeight: `${props.dropdownFontweight}`,
              fontSize: `${props.dropdownFontsize}`,
              cursor: "pointer",
              borderRadius: `${props.dropdownBorderradius}`

            }
          } onClick={() =>setModal(!modal)}>
            {props.value ? props.value.innerHTML : props.dropdownMessage}     
      </button>
      <Modal 
        display={modal}
        setDisplay={setModal}
        modalBackgroundColor={props.modalBackgroundColor}
        modalWidth={props.dropdownWidth}
        wordsList={props.tabWordsList}
        setClickedElement={props.onChange}
        data={data}
        modalMaxheight={props.modalMaxheight}
      />
      
    </div>
  );
}

const wordsList = [
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "California"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  }
]


HaDock404Plugin.defaultProps = {
  dropdownMessage: "Choose",
  dropdownBackgroundColor: "#334a1f",
  dropdownWidth: "120px",
  dropdownHeight: "40px",
  dropdownColor: "white",
  dropdownFontweight: "bold",
  dropdownFontsize: "16px",
  dropdownBorderradius: "5px",
  modalBackgroundColor: "#cfd4d1",
  modalMaxheight: "100px",
  tabWordsList: wordsList
}



//export default App;
