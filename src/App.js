import Model from "./Model";
import ThreeScene from "./ThreeScene";

export default function App() {
   return(
	   <div className="App" style={{
        backgroundImage:`url("http://phresh-af.com/images/fire.gif")`,
        backgroundRepeat  : 'repeat',
        // backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}>
        <Model />
	   </div>
   )
}


