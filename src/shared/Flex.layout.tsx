import React from 'react';

type FlexProps = {
    children: JSX.Element | JSX.Element[]
}

const Flex = ({children}: FlexProps ) => {
  return (
    <div className='flex'>
        {children}
    </div>
  )
}

export default Flex;
