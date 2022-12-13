import React from 'react'

import WarningIcon from '../../../assets/icons/warning.svg'

type Props = {
    message: string;
}

const WarningEmpty = ({message}: Props) => {
  return (
    <div className='mx-auto mt-10 md:mt-20'>
        <img src={WarningIcon} alt='Warning' className='w-[100px] mx-auto md:w-[120px]' />
        <p className='text-center text-gray-500 font-bold mt-4 md:mt-5 md:text-xl'>{message}</p>
    </div>
  )
}

export default WarningEmpty;