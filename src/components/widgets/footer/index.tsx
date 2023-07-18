import Image from "next/image";


const Footer = () => {
  return(
      <footer className='min-h-screen bg-tertiary-color p-[30px]'>
          <div className='flex flex-col items-center justify-center pt-10'>
              <Image src={"/logo.png"} alt={"Wagwan"} width={40} height={40} className="md:w-20 md:h-20 mb-10"/>
              <div className='text-center mb-20 md:mb-[150px] lg:max-w-[50%]'>
                  <h4 className='heading-h4 !font-light pb-8 '>
                      Are you a change maker?
                      Work with us.
                  </h4>
                  <h4 className='heading-h4 !font-light'>Wagwan@gmail.com</h4>
                  <h4 className='heading-h4 !font-light'>+123-456-7890</h4>
              </div>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  <div>
                      <h5 className="heading-h5 !font-light pb-4">FOLLOW US</h5>
                      <ul>
                          <li className="heading-h6 !font-light pb-3">Instagram</li>
                          <li className="heading-h6 !font-light pb-3">Twitter</li>
                          <li className='heading-h6 !font-light '>LinkedIn</li>
                      </ul>
                  </div>
                  <div>
                      <h5 className="heading-h5 !font-light pb-4">GENERAL ENQUIRES</h5>
                      <ul>
                          <li className="heading-h6 !font-light pb-3">hello@raggededge.com</li>
                          <li className='heading-h6 !font-light '>See job openings </li>
                      </ul>
                  </div>
                  <div>
                      <h5 className="heading-h5 !font-light pb-4">FIND US</h5>
                      <ul>
                          <li className="heading-h6 !font-light">The Bindery
                              51-53 Hatton Garden
                              London EC1N 8HN</li>
                      </ul>
                  </div>
                  <div>
                      <h5 className="heading-h5 !font-light pb-4">STAY UP TO DATE</h5>
                      <ul>
                          <li className='heading-h6 !font-light '>Sign up to news</li>
                      </ul>
                  </div>
              </div>
              <div className='relative w-full flex items-end justify-between mt-7 xl:mt-[100px]'>
                  <div>
                      <ul className='flex flex-col gap-3 xl:gap-5 xl:flex-row'>
                          <li className='heading-h6  xl:text-lg !font-light'>Work</li>
                          <li className='heading-h6 xl:text-lg !font-light'>About</li>
                          <li className='heading-h6 xl:text-lg !font-light'>Culture</li>
                          <li className='heading-h6 xl:text-lg !font-light'>Latest</li>
                          <li className='heading-h6 xl:text-lg !font-light'>Contact</li>
                          <li className='heading-h6 xl:text-lg !font-light'>Planet</li>
                          <li className='heading-h6 xl:text-lg !font-light'>Legal</li>
                      </ul>
                  </div>
                  <div className='absolute bottom-[30px] right-[-24px] -rotate-90 xl:bottom-[50px]'>
                      <button className='heading-h6 xl:text-lg !font-light border-0 bg-transparent '>
                          Back To Top
                      </button>
                  </div>
              </div>
          </div>
      </footer>
  )
}
export default Footer
