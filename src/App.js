
import './App.css';


let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function (){
  let DesplazamientoActual = window.pageXOffset;
  if(ubicacionPrincipal >= DesplazamientoActual){
    document.getElementById('contain').style.top='0';
  }
  else{
    document.getElementById('contain').style.top = '-100px';
  }
  ubicacionPrincipal = DesplazamientoActual;
}

function App() {
  return (
    <div className='contain'>

        <div className='animate__animated animate__backInRight'>
          <div id="box">
              <div id="boxtitle">
                  <h1 id='title1'>Combining Ad Tech with Human Relationships</h1>
                  <h3>web.media.consulting</h3>
              </div>
          </div>
        </div>

    </div>
    
  );
}


export default App;
