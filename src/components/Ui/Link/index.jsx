import React from 'react';

export default function Link({children, ...rest}) {
   return (
      <>
         <a 
            {...rest}
         >
         {children}
         </a>
      </>
   )
}
