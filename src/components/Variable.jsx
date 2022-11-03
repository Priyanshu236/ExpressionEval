import React from 'react'

function Variable({name,val,id,remElements}) {
if(id==undefined)
{
    let id=Math.floor(Math.random()*100000);
    return (
        <div className='var'
    draggable onDragStart={(e) => {
        e.dataTransfer.setData("val", val);
        e.dataTransfer.setData("name", name);
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("type", "var");
      }} >
        {name}
        
    </div>
  )
}
else
{
    return (<div className='var icon-div' onClick={()=>{remElements(id)}}>{name}
    <i class="fa fa-times icons" aria-hidden="true"></i>

    </div>)
}
}

export default Variable