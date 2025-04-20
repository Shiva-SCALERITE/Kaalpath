const Footer = () => {
    return (
      <>
        <div className="h-0.5 bg-cyan-400"></div>
      <footer className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-3 shadow-lg'>
      <div className="text-center">
        <p className='font-semibold' style={{ fontFamily: "'Montserrat', sans-serif" }}>
        &copy; 2023 <span className='text-cyan-400'>Kaalpath</span>. All rights reserved.
        </p>
      </div>
      {/* <nav className='flex justify-center gap-8 mt-4'>
        {/* Uncomment and update links as needed */}
        {/* <Link to='/privacy' className='hover:text-cyan-400 transition-all duration-300'>Privacy Policy</Link>
        <Link to='/terms' className='hover:text-cyan-400 transition-all duration-300'>Terms of Service</Link>
        <Link to='/contact' className='hover:text-cyan-400 transition-all duration-300'>Contact Us</Link> */}
      {/* </nav> */}
      </footer>
      </>
    );
  };
  export default Footer;

  