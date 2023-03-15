import headImg from './images/slide03.jpg'
import boxImg1 from './images/pic02.jpg'
import boxImg2 from './images/pic03.jpg'
import bridgeImg from './images/pic01.jpg'
import galleryImg1 from './images/slide05.jpg'
import galleryImg2 from './images/slide03.jpg'
import galleryImg3 from './images/slide02.jpg'
import galleryImg4 from './images/slide04.jpg'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


export const Home = () => {
  return (
    <div className='main-container'>
      <main>
        <img className='head-img' src={headImg} />
        <div className='heading-div'><h1 className='heading-one'>Here is heading one</h1></div>
        
        <div className='sections'>
              <section className='box'>
              <img className='box-img' src={boxImg1} />
              <p className='pre-heading'>Inspiring text about nature</p>
              <hr className='hr-bar'/>
              <h3 className='heading-3'>Exciting heading about nature</h3>
              <p className='post-heading'>Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
              <button className='btn btn-box'>Learn more</button>
            </section>
            <section className='box'>
              <img className='box-img' src={boxImg2} />
              <p className='pre-heading'>Inspiring text about nature</p>
              <hr className='hr-bar' />
              <h3 className='heading-3'>Exciting heading about nature</h3>
              <p className='post-heading'>Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
              <button className='btn btn-box'>Learn more</button>
            </section>
        </div>
        <div className='bridge'>
          <img src={bridgeImg} className='box-img bridge-img' />
          <div className='bridge-text'>
            <p>Mattis elementum sapien pretium tellus</p>
            <hr className='hr-bar' />
            <h3>Vestibulum sit </h3>
          </div>
        </div>
        <div className='after-bridge-text'>
            <p>Nam vel ante sit amet libero scelerisque facilisis eleifend vitae urna</p>
            <hr className='hr-bar' />
            <h3>Morbi maximus justosit </h3>
        </div>
        <div className='gallery'>
          <img className='box-img gallery-img' src={galleryImg1} />
          <img className='box-img gallery-img' src={galleryImg2} />
          <img className='box-img gallery-img' src={galleryImg3} />
          <img className='box-img gallery-img' src={galleryImg4} />
        </div>
      </main>
      <footer id='footer'>
        <div className='icons'>
          <a className='icon'  href='https://www.facebook.com' target='_blank'><FaFacebook/></a>
          <a href='https://www.twitter.com' target='_blank'><FaTwitter className='icon' /></a>
          <a href='https://www.instagram.com' target='_blank'><FaInstagram className='icon' /></a>
          <a href='https://www.youtube.com' target='_blank'><FaYoutube className='icon' /></a>
          
        </div>
        <p className='footer-text'>Follow us on social media</p>
      </footer>
    </div>
  )
}