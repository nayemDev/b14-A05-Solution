
import BannerLogo from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex   justify-around pt-15  '>
            <div className=''> 
                <div className='text-6xl font-bold pt-20'>
                    <h1>Build Your Ideal</h1>
                    <span className='text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span>
                </div>
                <div>
                    <h2 className='text-2xl font-light pt-10 pl-[5px]'>
                    Explore frontend, backend, database, and tooling options, <br />
                    compare them side by side, and put together the stack that fits Your <br />
                    next project.
                    </h2>
                </div>
                
                <div className='flex gap-5 pt-5'>
                    <button className="px-8 py-5 rounded-xl text-white font-semibold text-xl
                      bg-gradient-to-r from-orange-500 to-pink-500
                     hover:opacity-90 cursor-pointer transition">
                      Explore Technologies
                     </button>

                     <button className="w-72 px-8 py-5 rounded-xl text-gray-700 font-normal text-xl
                       border-2 border-gray-300
                       hover:bg-gray-50 cursor-pointer transition">
                           Learn More    
                     </button>

                </div>
                
            </div>
            <div>
                    <img src={BannerLogo} alt="" />
                </div>
        </div>
    );
};

export default Banner;