import { publicationData } from '@/assets/assets'
import React from 'react'

const Publication = () => {
  return (
    <div id="publication" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg text-gray-500">
        My research paper
    </h4>
    <h2 className="text-center text-5xl">
        Publications
    </h2>
    <ul className="mt-8 space-y-6 text-gray-600 text-lg leading-7">
        {publicationData.map((publication, index) => (
        <li key={index}>
            <span className="font-semibold">{publication.authors}. </span>
            <em>{publication.title}.</em>{" "}
            <span>{publication.venue}</span>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Publication