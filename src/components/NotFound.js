import React from "react";
import notFound from '../assets/images/error-404.png'

function NotFound(){

    return(

        <>
        <img src={notFound} className='error404' alt='notfound'/>
        </>
        
    )
}

export default NotFound;