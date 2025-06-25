import React from 'react'
import Image from 'next/image'
import { assets, workData} from '@/assets/assets'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg text-gray-500">
            My professional & academic development
        </h4>
        <h2 className="text-center text-5xl">
            Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {workData.map(
            ({ icon, name, title, date, description, link }, index) => (
                <div key={index} className="border-[0.5px] border-gray-400 rounded-lg shadow-lg p-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
                    <Image src={icon} alt={name} className="w-16 h-16 mx-auto" />
                    <h3 className="mt-4 text-xl font-medium text-gray-800 text-center">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                        {title} | {date}
                    </p>

                    <ul className="mt-4 space-y-2">
                        {description.map((text, idx) => (
                        <li key={idx} className="text-sm text-gray-600 leading-6 list-disc list-inside">
                            {text}
                        </li>
                        ))}
                    </ul>

                    <a href={link} className="mt-6 inline-flex items-center text-sm font-medium">
                        Read more
                        <Image src={assets.right_arrow} alt="" className="w-4 h-4 ml-1" />
                    </a>
                </div>
            )
            )}
        </div>
    </div>

    
  )
}

export default Work