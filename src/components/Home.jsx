import {NavLink} from "react-router-dom"
import Navbar from "./Navbar"
import Avtar from "./avataaars.png"
const Home= () =>{
    return (
        <div className="container bg-dark p-0"> 
            <div class="row">
                <div class="col-md-3">
                    <Navbar/>
                </div>
                <div class="col text-center text-light  mx-4">
                    <img src={Avtar} alt="profile" className="profileContent " />
                    <p>
                        Hey this is Akash Verma.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem porro, quas eveniet consequuntur unde.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt vero iste cupiditate ad, ipsum provident corporis tempore eum quis veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quam, aliquid qui sit eius consequatur assumenda sequi, nostrum quisquam excepturi harum totam aspernatur deserunt, eos aperiam fugit hic omnis minima? Lorem, ipsum dolor.
                    </p>
                    <div class="btn btn-outline-warning mx-5 my-3" onClick={ () => alert("You just hired me ") }> Hire Me </div>
                    <NavLink to="/contact" class="btn btn-outline-danger"> Contact Me  </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Home