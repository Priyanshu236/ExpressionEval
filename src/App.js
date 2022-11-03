
import { useState } from 'react';
import './App.css';
import Operand from './components/Operand';
import Variable from './components/Variable';
import {useEffect} from "react"

function App() {
  const [evall, setEvall] = useState([]);
  const [valA,setValA]=useState(-1)
  const [valB,setValB]=useState(-1)
  const [valC,setValC]=useState(-1)
  const [valD,setValD]=useState(-1)
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://calculator236.herokuapp.com/')
      .then(response => response.json()).then((json)=>{ json.forEach(element => {
        if(element.name=='A')
        {
          setValA(element.value)
        }else if(element.name=='B')
        {
          setValB(element.value)
        }
        else if(element.name=='C')
        {
          setValC(element.value)
        }
        else if(element.name=='D')
        {
          setValD(element.value)
        }
      }); })
  }, []);
  function remElements(key) {
    console.log(key)
    setEvall(evall.filter((ele) => {
      console.log(ele)
      return ele.id != key
    }))
  }

  let list = evall.map((item) => {
    let id = Math.floor(Math.random() * 100000);
    if (item.type == "opr") {
      return <Operand key={item.id} val={item.val} remElements={remElements} id={item.id} />
    }
    else {
      return <Variable key={item.id} val={item.val} name={item.name} remElements={remElements} id={item.id} />
    }
  });
  function evaluate() {
    let chk = "";
    evall.map((item) => {
      chk += item.val;
    })
    try {

      alert(eval(chk))
    }
    catch (e) {
      alert("invalid expression")
    }
  }
  function getVal() {
    var inp = prompt("Enter the number")
    let id = Math.floor(Math.random() * 100000);
    setEvall([...evall, { id: id, name: inp, val: inp, type: "var" }])
  }
  return (
    <div className="App">
      <div className="var-container">
        <Variable name="A" val={valA} />
        <Variable name="B" val={valB} />
        <Variable name="C" val={valC} />
        <Variable name="D" val={valD} />
      </div>

      <div className="operands">
        <Operand val="-" />
        <Operand val="+" />
        <Operand val="*" />
        <Operand val="/" />
        <Operand val="<" />
        <Operand val=">" />
        <div className='opr-box' onClick={getVal}>
          RHS
        </div>
      </div>
      <div className='drag-container' onDragOver={
        (e) => {
          e.preventDefault();
        }
      }
        onDrop={
          (e) => {
            let elem = {};

            elem['type'] = e.dataTransfer.getData("type");
            elem['id'] = e.dataTransfer.getData("id");
            if (e.dataTransfer.getData("type") == "opr") {
              elem['val'] = e.dataTransfer.getData("val");
              setEvall([...evall, elem]);
            }
            else {
              elem['val'] = e.dataTransfer.getData("val");
              elem['name'] = e.dataTransfer.getData("name");
              setEvall([...evall, elem]);
            }
            console.log(elem);
            console.log(evall)
          }
        } >
        {list}

      </div>
      <div class="eval-button" onClick={evaluate}>
        evaluate
      </div>
    </div>
  );
}

export default App;
