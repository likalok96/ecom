import React from 'react'
import {FaStar} from 'react-icons/fa'


const StarRate_static = ({rating})=> {
    const array = [1,2,3,4,5];

    return(
    <div className=''>
        { array.map((num)=><FaStar key={num} color={(rating) >= num ? '#f58220' : 'a9a9a9'}/>)}
    </div>
    )
}

export default StarRate_static