import React, { useEffect, useState } from 'react';
import 'animate.css';




export const CounterApp = () => {
  const [chatActive, setChatActive] = useState(false);
  const [imagenActive, setImagenActive] = useState(false);
  const [abuseActive, setAbuseActive] = useState(false);
  const [modelActive, setModelActive] = useState(false);
  const [skipActive, setSkipActive] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const [countChats, setCountChats] = useState(0);
  const [countImag, setCountImag ] = useState(0);
  const [countAbu, setCountAbu] = useState(0);
  const [countSkip, setCountSkip] = useState(0);
  const [countModel, setCountModel] = useState(0);
  const [countAudio, setCountAudio] = useState(0);
  
  
  


  const readLocalStorage = () => {
    const counterData = JSON.parse(localStorage.getItem('countersData'));
    

    return counterData || {
      countChats: 0,
      countImag: 0,
      countAbu: 0,
      countSkip: 0,
      countModel: 0,
      countAudio: 0
    };

    

  };

  useEffect(() => {

    const counterData = readLocalStorage();
    
   
    
    setCountChats(counterData.countChats);
    setCountImag(counterData.countImag);
    setCountAbu(counterData.countAbu);
    setCountSkip(counterData.countSkip);
    setCountModel(counterData.countModel);
    setCountAudio(counterData.countAudio);
   
        
    
  }, [])
  

  const saveCountersToLocalStorage = (newCount, que) => {
    const countersData = {
      countChats,
      countImag,
      countAbu,
      countSkip,
      countModel,
      countAudio
    };

    if(que==='chat'){
      countersData.countChats = newCount;
    } else if (que==='img'){
      countersData.countImag = newCount;
    }else if (que==='abs'){
      countersData.countAbu = newCount;
    }else if (que==='skp'){
      countersData.countSkip = newCount;
    }else if (que==='mdl'){
      countersData.countModel = newCount;
    }else if (que==='aud'){
      countersData.countAudio = newCount;
    }

   
    localStorage.setItem('countersData', JSON.stringify(countersData));
    
  };






  const handleAdd = (que) => {
    // Actualizar los contadores
    if (que === 'chat') {
      setCountChats(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    } else if (que === 'img') {
      setCountImag(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    } else if (que === 'abs') {
      setCountAbu(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    } else if (que === 'skp') {
      setCountSkip(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    } else if (que === 'mdl') {
      setCountModel(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    } else if (que === 'aud') {
      setCountAudio(prevCount => {
       const newCount = prevCount + 1;
       saveCountersToLocalStorage( newCount, que);
       return newCount;
      });
    }
  
   
    

  };
  


const handleSus = ( que ) => {
   
 
  if (que === 'chat') {
    setCountChats(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  } else if (que === 'img') {
    setCountImag(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  } else if (que === 'abs') {
    setCountAbu(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  } else if (que === 'skp') {
    setCountSkip(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  } else if (que === 'mdl') {
    setCountModel(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  } else if (que === 'aud') {
    setCountAudio(prevCount => {
     const newCount = prevCount - 1;
     saveCountersToLocalStorage( newCount, que);
     return newCount;
    });
  }



  
};
 


  const handleReset= () => {
    setCountChats(0);
    setCountImag(0);
    setCountAbu(0);
    setCountSkip(0);
    setCountModel(0);
    setCountAudio(0); 

    localStorage.removeItem('countersData'); 


  }

  const toggleCaja = (setter) => {
    setter((estadoPrevio) => !estadoPrevio);
  };

  return (
    <>


    <div className="contador-box">
      <div className={`box-que ${chatActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setChatActive)}>
         Chats
      </div>

      <div className={`box-que  ${imagenActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setImagenActive)}>
            Images
      </div>
      <div className={`box-que  ${abuseActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setAbuseActive)}>
            Abuse
      </div>
      <div className={`box-que  ${skipActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setSkipActive)}>
        Skips
      </div>
      <div className={`box-que  ${modelActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setModelActive)}>
        Models
      </div>
      <div className={`box-que  ${audioActive ? 'box-act' : 'box-des'}`} 
         onClick={() => toggleCaja(setAudioActive)}>
        Audios
      </div>      
    </div>



  <div className="contenedor">

    <div className={`box  box-chat animate__animated animate__bounceIn ${chatActive ? 'mostrar' : 'esconder' }`}>
      <p className='cuenta-name'>Chats</p>
        <p className='cuenta'>{ countChats}</p>

        <div className="buttons">
         <button className='plus'  onClick={ () => {handleAdd('chat');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('chat');  }}>-</button> 
        </div>
        

    </div>

    <div className={`box box-imagen animate__animated animate__bounceIn ${imagenActive ? 'mostrar' : 'esconder' }`}>
      <p className='cuenta-name'>Images</p>
        <p className='cuenta'>{ countImag}</p>

        <div className="buttons">
        <button className='plus'  onClick={ () => {handleAdd('img');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('img'); }}>-</button> 
        </div>

    </div>

    <div className={`box box-abuse animate__animated animate__bounceIn ${abuseActive ? 'mostrar' : 'esconder' }`}>

        <p className='cuenta-name'>Abuse</p>
        <p className='cuenta'>{countAbu}</p>
        <div className="buttons">          
        <button className='plus'  onClick={ () => {handleAdd('abs');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('abs'); }}>-</button> 
        </div>

    </div>

    <div className={`box box-skip animate__animated animate__bounceIn ${skipActive ? 'mostrar' : 'esconder' }`}>
      <p className='cuenta-name'>Skip</p>
        <p className='cuenta'>{countSkip}</p>

        <div className="buttons">
        <button className='plus'  onClick={ () => {handleAdd('skp');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('skp'); }}>-</button> 
        </div>

    </div>

    <div className={`box box-model animate__animated animate__bounceIn ${modelActive ? 'mostrar' : 'esconder' }`}>

      <p className='cuenta-name'>Models</p>
        <p className='cuenta'>{countModel}</p>

        <div className="buttons">
        <button className='plus'  onClick={ () => {handleAdd('mdl');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('mdl'); }}>-</button> 
        </div>

    </div>
    <div className={` box-audio animate__animated  ${audioActive ? 'mostrar animate__bounceIn' : 'esconder animate__bounceOut' }`}>

      <p className='cuenta-name'>Audios</p>
      <div className="espacio"></div>
        <p className='cuenta'>{ countAudio}</p>
        <div className="espacio"></div>

        <div className="buttons">
        <button className='plus'  onClick={ () => {handleAdd('aud');  } }>+</button>
         <button className='minus'  onClick={ () => {handleSus('aud'); }}>-</button>  
        </div>

    </div>

   
  </div>

  <div className="contenedor2">
  <div className="total">
      {countChats + countImag + countAbu + countSkip + countModel + countAudio} 
    </div>
        
  </div>



      <div className="reset">
        <button className="clear" onClick={ () => handleReset() } >Clear</button>        
      </div>

      <div className="reset">
        <a className="clear1" href="/sc.jpg" target="_blank" rel="noopener noreferrer">
          Weekly CoMo Seating Chart
        </a>
      </div>
        
      </>
  )
}
