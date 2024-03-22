import React from 'react'

function Logo(props) {
  return (
    <div className="h-full flex justify-center items-center cursor-pointer w-full gap-1">
          <img src={props.img} alt="" className="h-3/5 " />
          <div>
            <p
              className="text-3xl font-[Rubik] text-[#154166] font-semibold w-max"
            >
              Ethos Bank
            </p>
          </div>
        </div>
  )
}

export default Logo;
