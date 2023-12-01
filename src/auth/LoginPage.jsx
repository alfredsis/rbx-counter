import React from 'react'

export const LoginPage = () => {
  return (
    <>
        <div class="screen-1">

            <div class="email">
                <label for="email">Usuario</label>
                <div class="sec-2">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" name="email" placeholder="Nombre de usuario"/>
                </div>
            </div>
            <div class="password">
                <label for="password">Contraseña</label>
                <div class="sec-2">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input class="pas" type="password" name="password" placeholder="Contraseña"/>
                <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                </div>
            </div>
            <button class="login">
                Login
            </button>
  
        </div>
    </>
  )
}
