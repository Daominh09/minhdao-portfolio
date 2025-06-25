import React from 'react'
import Image from 'next/image'
import { assets, projectData} from '@/assets/assets'

const Project = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg text-gray-500">
            My portfolio
        </h4>
        <h2 className="text-center text-5xl">
            Project
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            Welcome to my portfolio! Explore a collection of projects showcasing my expertise in AI & Software development.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {projectData.map((project, index)=>(
                <div key={index}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                    <div>
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-700">{project.description}</p>
                    </div>
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition">
                        <Image src={assets.send_icon} alt="send icon" className="w-5" />
                    </a>
                </div>
                </div>
            ))}
        </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
            Show more <Image src={assets.right_arrow_bold} alt='Right arrow'
            className='w-4'/>
        </a>
    </div>
  )
}

export default Project