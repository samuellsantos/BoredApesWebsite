import React from 'react'
import { FaAdn } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";

export const PartnersName = () => {
  return (
    <div className="mt-12 flex justify-center items-center w-full">

      <table className="table-fixed w-full">
        <tbody>
          <tr className='flex'>
            <td className='w-1/2 sm:w-1/4 text-4xl sm:text-6xl font-robotoCondensed p-4 border-black border-r-2 border-b-2 flex items-center gap-4'>
              <FaAdn /> <span>Antwines</span>
            </td>

            <td className='w-1/2 sm:w-1/4 text-4xl sm:text-6xl font-robotoCondensed p-4 border-black  border-b-2 flex items-center'>
              <FaGalacticRepublic /> <span>GalaticRe</span>
            </td>
          </tr>

          <tr className='flex'>
            <td className='w-1/2 sm:w-1/4 text-4xl sm:text-6xl font-robotoCondensed p-4 border-black border-r-2  flex items-center gap-4'>
              <FaAdn /> <span>Antwines</span>
            </td>

            <td className='w-1/2 sm:w-1/4 text-4xl sm:text-6xl font-robotoCondensed p-4 border-black  flex items-center'>
              <FaGalacticRepublic /> <span>GalaticRe</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}
