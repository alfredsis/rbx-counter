
import React, { useEffect, useState } from 'react';
import 'animate.css';




export const CounterApp = () => {

  // const [isChecked, setIsChecked] = useState(false);
  const[isCheckedC, setIsCheckedC] =  useState(false);
  const[isCheckedI, setIsCheckedI] =  useState(false);
  const[isCheckedA, setIsCheckedA] =  useState(false);

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
  
  
  const [tiempo, setTiempo] = useState(0);


  const readLocalStorage = () => {
    const saveChats = localStorage.getItem('contChats');
    const saveImages = localStorage.getItem('contImag');
    const saveAbu = localStorage.getItem('contAbu');
    const saveSkp = localStorage.getItem('contSkip');
    const saveMdl = localStorage.getItem('countModel');
    const saveAud = localStorage.getItem('countAudio');

    if (saveChats) {
      setCountChats(parseInt(saveChats));
    } else {
      localStorage.setItem('contChats', '0');
    }

    if (saveImages) {
      setCountImag(parseInt(saveImages));
    } else {
      localStorage.setItem('contImag', '0');
    }

    if (saveAbu){
      setCountAbu(parseInt(saveAbu));
    } else {
      localStorage.setItem('contAbu', '0');
    }
    if (saveSkp) {
      setCountSkip(parseInt(saveSkp));
    } else {
      localStorage.setItem('contSkip', '0');
    }

    if (saveMdl) {
      setCountModel(parseInt(saveMdl));
    } else {
      localStorage.setItem('contModel', '0');
    }

    if (saveAud){
      setCountAudio(parseInt(saveAud));
    } else {
      localStorage.setItem('contAudio', '0');
    }



  };

  useEffect(() => {
    readLocalStorage();
    
  }, []);



  useEffect(() => {

    const intervalo = setInterval(() => {
      setTiempo(prevContador => prevContador + 1);

      
    }, 60000); // 1000 milisegundos = 1 segundo

    return () => {
      clearInterval(intervalo);
    };
  }, []);


 

  const activaChats = () => {
    setIsCheckedC(true);
    setIsCheckedI(false);
    setIsCheckedA(false);
   
  };

  const activaAbuse = ()=>{
    setIsCheckedC(false);
    setIsCheckedI(false);
    setIsCheckedA(true);
    
  }

  const activaImagen = () =>{
    setIsCheckedC(false);
    setIsCheckedI(true);
    setIsCheckedA(false);
  }


const handleAdd = (que) => {
  if (que =='chat') {
    setCountChats(prevCountChats => {
      const newCount = prevCountChats + 1;
      saveLocal(newCount, countImag);
      return newCount;
    });
  } if(que =='img') {
    setCountImag(prevCountImag => {
      const newCount = prevCountImag + 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }if(que =='abs') {
    setCountAbu(prevCountAbu => {
      const newCount = prevCountAbu + 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }if (que =='skp') {
    setCountSkip(prevCountSkip => {
      const newCount = prevCountSkip + 1;    
      saveLocal(countSkip, newCount);  
      return newCount;
    });
  } if(que =='mdl') {
    setCountModel(prevCountModel => {
      const newCount = prevCountModel + 1;
      saveLocal(countModel, newCount);  
      return newCount;
    });
  }if(que =='aud') {
    setCountAudio(prevCountAudio => {
      const newCount = prevCountAudio + 1;
      saveLocal(countAudio, newCount);  
      return newCount;
    });
  }



  setTiempo(0);
};




// const handleSus = () => {
//   if (isCheckedC) {
//     setCountChats(prevCountChats => {
//       const newCount = prevCountChats - 1;
//       saveLocal(newCount, countImag);
//       return newCount;
//     });
//   } if(isCheckedI) {
//     setCountImag(prevCountImag => {
//       const newCount = prevCountImag - 1;
//       saveLocal(countChats, newCount);
//       return newCount;
//     });
//   }if(isCheckedA) {
//     setCountAbu(prevCountAbu => {
//       const newCount = prevCountAbu - 1;
//       saveLocal(countAbu, newCount);
//       return newCount;
//     });
//   }

//   setTiempo(0);
// };


const handleSus = ( que ) => {

    
 
    if(que =='chat'){
      setCountChats(countChats => {
      const newCount = countChats - 1;
      saveLocal(newCount, countImag);
      return newCount;
    });
  }
    if(que == 'img'){
      setCountImag(countImag => {
      const newCount = countImag - 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }if(que =='abs') {
    setCountAbu(prevCountAbu => {
      const newCount = prevCountAbu - 1;
      saveLocal(countAbu, newCount);
      return newCount;
    });
  }if(que =='skp'){
    setCountSkip(countSkip => {
    const newCount = countSkip - 1;
    saveLocal(countSkip, newCount);
    return newCount;
  });
  }
  if(que == 'mdl'){
    setCountModel(countModel => {
    const newCount = countModel - 1;
    saveLocal(countModel, newCount);
    return newCount;
  });
  }if(que =='aud') {
  setCountAudio(prevCountAudio => {
    const newCount = prevCountAudio - 1;
    saveLocal(countAudio, newCount);
    return newCount;
  });
}

  
};


  
  const saveLocal = (chats, imag, abu) => {
    localStorage.setItem('contChats', chats.toString());
    localStorage.setItem('contImag', imag.toString());  
    
  };



  const handleReset= () => {
    setCountChats(0);
    setCountImag(0);
    setCountAbu(0);
    setCountSkip(0);
    setCountModel(0);
    setCountAudio(0);
    setTiempo(0); 
    localStorage.setItem('contChats', 0);
    localStorage.setItem('contImag', 0); 
    localStorage.setItem('contAbu', 0); 

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
    <div className={`box box-audio animate__animated animate__bounceIn ${audioActive ? 'mostrar' : 'esconder' }`}>

      <p className='cuenta-name'>Audios</p>
        <p className='cuenta'>{ countAudio}</p>

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



    
    {/* <div className="contenedor"> 
      <div className="caja">
        <div className="toggle-switch" >

          <button className={`btnToggle ${isCheckedC ? 'chatAct' : 'chatDes'} `} onClick={activaChats}>Chats</button>
          <button className={`btnToggle ${isCheckedA ? 'abuseAct' : 'abuseDes'}`} onClick={activaAbuse}>Abuse</button>

          <button className={`btnToggle ${isCheckedI ? 'imageAct' : 'imageDes'} `} onClick={activaImagen}>Images</button>

        </div>

            <div className="contador-opcion">
   
              <span className='chats'>{ countChats}</span>
              
              <span className='imagenes'>{countAbu}</span>
              <span className='abu'>{countImag}</span>
            </div>

        <div className="contador-total">
            <span className='total'>{ countChats + countImag + countAbu }</span>
            
        </div>

        <div className="lastTime">
        <span>{tiempo} min ago</span>
        </div>

        <div className="botones">

          <button className='min' onClick={ () => {handleSus();  } }>
            -
         </button>
          <button className='add' onClick={ () => {handleAdd();  } }>+</button>
        </div>
        
      </div>


    
    </div>    */}


 


      <div className="reset">
        <button className="clear" onClick={ () => handleReset() } >Clear</button>        
      </div>

        
      </>
  )
}
