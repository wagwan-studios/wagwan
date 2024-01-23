// import HeroVideo from './hero-video.mp4';

function Hero() {
    return(
        <section className={`md:h-[800px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[250px] h-[500px] text-center flex justify-center pt-[100px] px-10 bg-no-repeat bg-cover`}>
            <div className='md:max-w-[90%] lg:max-w-[80%] xl:max-w-[50%] text-center flex flex-col items-center video-container'>
            <video autoPlay muted loop className="myVideo">
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>
                <h1 className='pb-3 heading-h1 text-primary-color lg:pb-10'>WAGWAN STUDIOS</h1>
                <p className='heading-h6 text-primary-color pb-7 lg:pb-[55px]'>
                    We build engaging user experience for early-stage startups by connecting the dots between users’ needs and the
                    client’s business model.
                </p>
                <button className='primary-button max-w-[172px] md:max-w-[250px]'>GET STARTED</button>
            </div>
        </section>
    )
}
export default Hero
