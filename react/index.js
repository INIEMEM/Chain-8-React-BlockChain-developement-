const NavBar = () =>
  {
    return (
      <nav className='nav'>
        <div style={{
          color: 'white'
        }}>Logo</div>
        <ul className = 'nav-ul'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      
    )
  }

  const Hero = () => {
    return(
      <section className="hero-section">
        <p>welcome to</p>
        <p>my site</p>
        <div>
          <button>Download CV</button> 
          <button>Hire me</button>
          
        </div>
      </section>
    )
  }

  const App = () =>
    {
      return(
      <div>
        
        <NavBar /> 
        <Hero/>
        <Services/>
        <Footer/>
      </div>)
    }

ReactDOM.render(<App/>,  document.getElementById('root'))
