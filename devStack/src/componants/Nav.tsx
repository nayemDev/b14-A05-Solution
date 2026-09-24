import logo from '../assets/logo-text.png'
function Nav() {
  // const [count, setCount] = useState(0)

  return (
    <nav className='flex justify-between  mx-20 pt-8'h-20 >
          <div>
            <img src={logo} alt="" />
          </div>
          <div className=' flex justify-between gap-8 list-none'>
            <li className='text-[#DB2777]'><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </div>
          <div className='flex justify-center content-center w-[200px]'>
            <button className='w-[80px] cursor-pointer'>Sign In</button>
            <button className=' text-white rounded-[25px] bg-[#D91B7E] w-[90px] h-[40px] cursor-pointer' >Sign Up</button>
          </div>
          
          
    </nav>
    
  )
}

export default Nav
