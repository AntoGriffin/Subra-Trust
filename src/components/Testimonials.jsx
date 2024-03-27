/* eslint-disable react/no-unescaped-entities */


const Testimonials = () => {
  return (
<section className="bg-white py-5 font-montserrat" id="testimonials">
   <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">Voices of Compassion: Testimonials from Our Beloved Elderly and Cherished Children</p>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">A Safe Haven for Seniors</h3>
                  <p className="my-4">"At Subra Trust, my grandparents have found solace and companionship in their golden years.</p>
                  <p className="my-4">The staff's dedication to their well-being is evident in every interaction, making it a true home away from home."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  {/* <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/> */}
                  <div className="space-y-0.5 font-medium  text-left">
                      <div>Rachel S</div>
                      {/* <div className="text-sm font-light text-gray-500 ">Developer at Open AI</div> */}
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">Nurturing Tomorrow's Leaders</h3>
                  <p className="my-4">"Subra Trust has been instrumental in shaping my child's early years. The supportive environment and skilled educators have helped lay a strong foundation for his future success.</p>
                  <p className="my-4">I'm grateful for the positive impact it has had on his growth."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  {/* <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/> */}
                  <div className="space-y-0.5 font-medium  text-left">
                      <div>Daniel L</div>
                      {/* <div className="text-sm font-light text-gray-500 ">Lead designer at Dropbox</div> */}
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r  ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">Empathy and Care for Every Resident</h3>
                  <p className="my-4">"Transitioning my parents into Subra Trust was one of the best decisions I've made.</p>
                  <p className="my-4">The personalized care they receive, coupled with the genuine empathy from the staff, has eased our worries and allowed us to cherish the moments we spend together."</p>
                  
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  {/* <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/> */}
                  <div className="space-y-0.5 font-medium  text-left">
                      <div>Sophia K</div>
                      {/* <div className="text-sm font-light text-gray-500 ">Software Engineer at Facebook</div> */}
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">A Community of Love and Support</h3>
                  <p className="my-4">"Subra Trust isn't just a facility; it's a tight-knit community where residents and children alike thrive.</p>
                  <p className="my-4">Witnessing the bonds formed and the smiles shared reaffirms our decision to entrust our loved ones to such a caring environment."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  {/* <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/> */}
                  <div className="space-y-0.5 font-medium  text-left">
                      <div>Mark D</div>
                      {/* <div className="text-sm font-light text-gray-500 ">CTO at Google</div> */}
                  </div>
              </figcaption>    
          </figure>
      </div>
      </div>
   </section>
  )
}

export default Testimonials