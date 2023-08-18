import '../App.css'
const Header = () => {
  return (
    <>
    <div className='header-cointainer'>
    <div className="waviy">
       <span style={{"--i":1}}>T</span>
       <span style={{"--i":2}}>h</span>
       <span className='space'  style={{"--i":3}}>e</span>

       <span style={{"--i":4}}>H</span>
       <span style={{"--i":5}}>o</span>
       <span style={{"--i":6}}>l</span> 
       <span className='space'  style={{"--i":7}}>y</span>

       <span style={{"--i":8}}>Q</span>
       <span style={{"--i":9}}>u</span>
       <span style={{"--i":10}}>r</span>
       <span style={{"--i":11}}>a</span>
       <span style={{"--i":12}}>n</span>
      </div>

     <div className='description-box'>
        <p>The Quran is glad tidings, for whom? Only for the true.  It's translated 
        into various languages ​​in a wonderful way with excellent views.
        (<i> Bengali, English, Chinese, Urdu, Russian, Spanish, Swedish, Turkish, Indonesian, French </i>)</p> 
      </div>
    </div>
    </>
  )
}

export default Header