/* eslint-disable react/no-unescaped-entities */
import trust from '../assets/trust.jpg'
import trust1 from '../assets/trust1.jpg'

const About = () => {
  return (
    <section className="bg-white pt-16 font-montserrat" id='about'>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">At Subra Trust</h2>
            <p className="mb-4 text-xl">Our Ambition is to help needy small children to educate them for their livelihood and to help the old-age peoples for their peaceful life.</p>
            <p className='text-xl'>Our mission is to empower underprivileged children through education, ensuring a brighter future for them, while also providing support and care for elderly individuals, promoting dignity and tranquility in their later years.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={trust} alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={trust1} alt="office content 2"/>
        </div>
    </div>
</section>
  )
}

export default About