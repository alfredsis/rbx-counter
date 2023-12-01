import React, { useState } from 'react'


export const Timer = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectVal, setSelectVal] = useState('');
  const [count, setCount] = useState(59);



  const handleClick = () => {
    const inputVal = document.getElementById('appt').value;
    const actividad = document.querySelector('.select').value;

    alert(`${actividad} Guardado`);  
    
 
    const currentDateTime = new Date();
    const [hour, minute] = inputVal.split(':');
    const selectedDateTime = new Date(
      currentDateTime.getFullYear(),
      currentDateTime.getMonth(),
      currentDateTime.getDate(),
      parseInt(hour),
      parseInt(minute)
    );
 
 

    const timeDiff = selectedDateTime.getTime() - currentDateTime.getTime();
    console.log('time diff ' + timeDiff);
    
    if (timeDiff > 0) {
      setTimeout(() => {

      setSelectVal(actividad);  
        setShowModal(true);   

        

      }, timeDiff-60000);
    } else {
      alert('Selecciona un horario valido para hoy');
    }

  };

  return (
<>

<div className="time-picker">

  <div id="h3-pick">Reminder</div>

  <div className="caja-select">
  <select className='select'>
    <option>Break</option>
    <option>Lunch</option>
    <option>Coaching</option>
    <option>Training</option>
    <option>Content</option>
    <option>Team Meeting</option>

  </select>
</div>

  <input 
    type="time" 
    id="appt" 
    name="appt"        
    required
  />

<button className='set-time' onClick={handleClick}>
  Set Alarm
</button>

</div>


{showModal && (
        <div className="container-modal" id="container-modal">
          <div className="modal-content">
            <p>{selectVal} en 1 minuto</p>           
                       
            <button className="modal-content-btn" onClick={ ()=>{setShowModal(false)}}>Ok</button>
          </div>
        </div>
      )}

      
    
</>
  )
}
