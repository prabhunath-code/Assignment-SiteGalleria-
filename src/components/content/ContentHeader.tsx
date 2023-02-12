import React from 'react'
import Link from 'next/link'

const ContentHeader = () => {
  return (
    <div >

      <nav  className=''>
        <div className="flex border-gray-300 border-b items-start">
          <Link href="/">
            <div className=" flex mt-2 mb-3 ml-5 p-2 w-32 justify-center bg-indigo-500 text-white rounded-lg ">ALL SECTION</div>
          </Link>
          
            <Link href="/">
              <div className="flex mt-2 ml-5 p-2 w-32 justify-center bg-indigo-500 text-white rounded-lg">PHYSICS</div>
            </Link>
            <Link href="/">
              <div className=" flex mt-2 ml-5 p-2 w-32 justify-center bg-indigo-500 text-white rounded-lg">CHEMISTRY</div>
            </Link>
            <Link href="/">
              <div className="flex mt-2 ml-5 p-2 w-32 justify-center bg-indigo-500 text-white rounded-lg">MATHS</div>
            </Link>
          
        </div>
      </nav>

    </div>
  )
}

export default ContentHeader