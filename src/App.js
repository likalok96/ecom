import './App.css';

import Banner from './Main/Banner/Banner';
import ProductSwiper from './Main/ProductSwiper/ProductSwiper'


import ReviewSwiper from './Review/ReviewSwiper';

function App() {


  return (
    <div>

      <div className='main_content'>
            <Banner  />
            <li key='Food'><ProductSwiper opt={true} category={'Food'} title='Food' /></li>
            <li key='Health'><ProductSwiper opt={true} category={'Health'}  title='Health' /></li>
            <li key='Electronics'><ProductSwiper opt={true} category={'Electronics'}  title='Electronics' /></li>

            {<ReviewSwiper/>}
            
      </div>

    </div>
  )
}



export default App;
