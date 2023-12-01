
import React, { useEffect, useState } from 'react';



export const CounterApp = () => {

  // const [isChecked, setIsChecked] = useState(false);
  const[isCheckedC, setIsCheckedC] =  useState(false);
  const[isCheckedI, setIsCheckedI] =  useState(false);
  const[isCheckedA, setIsCheckedA] =  useState(false);

  const [countChats, setCountChats] = useState(0);
  const [countImag, setCountImag ] = useState(0);
  const [countAbu, setCountAbu] = useState(0);
  
  const [tiempo, setTiempo] = useState(0);


  const readLocalStorage = () => {
    const saveChats = localStorage.getItem('contChats');
    const saveImages = localStorage.getItem('contImag');
    const saveAbu = localStorage.getItem('contAbu');

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



// const handleAdd = () => {
//   if (isChecked) {
//     setCountChats(prevCountChats => {
//       const newCount = prevCountChats + 10;
//       saveLocal(newCount, countImag);
//       return newCount;
//     });
//   } else {
//     setCountImag(prevCountImag => {
//       const newCount = prevCountImag + 10;
//       saveLocal(countChats, newCount);
//       return newCount;
//     });
//   }
//   setTiempo(0);
// };


const handleAdd = () => {
  if (isCheckedC) {
    setCountChats(prevCountChats => {
      const newCount = prevCountChats + 1;
      saveLocal(newCount, countImag);
      return newCount;
    });
  } if(isCheckedI) {
    setCountImag(prevCountImag => {
      const newCount = prevCountImag + 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }if(isCheckedA) {
    setCountAbu(prevCountAbu => {
      const newCount = prevCountAbu + 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }



  setTiempo(0);
};






// const handleSus = () => {
//   if (isChecked) {
//     setCountChats(prevCountChats => {
//       const newCount = prevCountChats - 10;
//       saveLocal(newCount, countImag);
//       return newCount;
//     });
//   } else {
//     setCountImag(prevCountImag => {
//       const newCount = prevCountImag - 10;
//       saveLocal(countChats, newCount);
//       return newCount;
//     });
//   }
//   setTiempo(0);
// };

const handleSus = () => {
  if (isCheckedC) {
    setCountChats(prevCountChats => {
      const newCount = prevCountChats - 1;
      saveLocal(newCount, countImag);
      return newCount;
    });
  } if(isCheckedI) {
    setCountImag(prevCountImag => {
      const newCount = prevCountImag - 1;
      saveLocal(countChats, newCount);
      return newCount;
    });
  }if(isCheckedA) {
    setCountAbu(prevCountAbu => {
      const newCount = prevCountAbu - 1;
      saveLocal(countAbu, newCount);
      return newCount;
    });
  }

  setTiempo(0);
};

  
  const saveLocal = (chats, imag) => {
    localStorage.setItem('contChats', chats.toString());
    localStorage.setItem('contImag', imag.toString());
    // localStorage.setItem('contAbu', abu.toString());
  };



  const handleReset= () => {
    setCountChats(0);
    setCountImag(0);
    setCountAbu(0);
    setTiempo(0); 
    localStorage.setItem('contChats', 0);
    localStorage.setItem('contImag', 0); 
    localStorage.setItem('contAbu', 0); 

  }


 

  return (
    <>
    
    <div className="contenedor">
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


    
    </div>   


      <div className="reset">
        <button className="clear" onClick={ () => handleReset() } >Clear</button>
        
      </div>

        
      </>
  )
}
