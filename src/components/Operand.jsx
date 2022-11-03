import React from 'react'

function Operand({val,remElements,id}) {

  
    if(id==undefined)
    {
        let id=Math.floor(Math.random()*100000);
        return ( <div className='opr-box'   draggable onDragStart={(e) => {
        e.dataTransfer.setData("val", val);
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("type", "opr");
      }} > {val} </div>)
    }
    else 
    {
        return ( <div className='opr-box icon-div'  onClick={()=>{remElements(id)}}> {val} 
        <i class="fa fa-times icons" aria-hidden="true"></i>
        </div>)
    }
  
}

export default Operand