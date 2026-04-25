import React from 'react'
// import SkillsOrbit from '../components/SkillsOrbit'
import SkillsSection from '../components/SkillsSection'

const Skill = () => {
  return (
    <section className="c-space section-spacing" id="skills">
       <div className="mt-3 mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1.5px] w-full" />
        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_1px_black]">
          Skills
        </h2>
      <div className='flex flex-col md:flex-row w-full md:gap-8 mt-1'>

        <div className='w-full md:w-1/2 flex items-center md:mt-8 order-2 md:order-1'>
          <img src="public/assets/bg_assets/skill-img.svg" alt="" className="max-w-full h-auto" />
        </div>

        <div className='w-full md:w-1/2 space-y-4 order-1 md:order-2'>
          <SkillsSection />
        </div>



      </div>
      
    </section>
  )
}

export default Skill
