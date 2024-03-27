/* eslint-disable react/no-unescaped-entities */


const OurServices = () => {
  return (
    <section className="bg-white py-10 font-montserrat" id="services">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our Services</h2>
          <p className="text-gray-500 sm:text-xl ">Subra Trust offers  a commitment to dignity and well-being, we strive to enhance the quality of life for every individual under our care.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/person-at-home.png" alt="person-at-home"/>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Residential Care</h3>
              <p className="text-gray-500 "> Providing accommodation, meals, and personal care assistance for elderly residents who can no longer live independently.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/student-center.png" alt="student-center"/>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Education</h3>
              <p className="text-gray-500 "> Access to formal education or vocational training programs to support children's academic and personal development.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/counselor.png" alt="counselor"/>                    
              </div>
              <h3 className="mb-2 text-xl font-bold ">Counseling and support</h3>
              <p className="text-gray-500 ">Emotional and psychological support services to help children cope with trauma, grief, or other challenges they may face.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/recovery.png" alt="recovery"/>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Rehabilitation services</h3>
              <p className="text-gray-500 ">Physical therapy, occupational therapy, and other forms of rehabilitation to maintain or improve mobility and independence.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/stretching.png" alt="stretching"/>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Recreational and extracurricular activities</h3>
              <p className="text-gray-500 ">Organizing sports, arts and crafts, and other recreational activities to promote socialization and personal growth.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/earth-care.png" alt="earth-care"/>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Palliative care</h3>
              <p className="text-gray-500 ">End-of-life care and support for residents with terminal illnesses, focusing on comfort and dignity.</p>
          </div>
      </div>
  </div>
</section>
  )
}

export default OurServices