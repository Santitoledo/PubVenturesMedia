import './clients.css';
import logo2 from '../assets/img/clientes.png';

function Clients() {
  return (
    <div className='contain1'>

        <div className='animate__animated animate__backInRight'>
          <div id="box">
              <div id="boxClients">
                  <h1 id='title2'>Clients</h1>
                  <div id="boxImgClients">
                         <img src={logo2} alt="logo" id="img2"/>
                 </div>
              </div>
          </div>
        </div>

    </div>
  );
}

export default Clients;