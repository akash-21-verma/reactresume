import Navbar from "./Navbar"
const Contact=()=>{
    return (
        <div className="container bg-dark p-0"> 
            <div className="row">
                <div className="col-md-3">
                    <Navbar/>
                </div>
                <div className="col text-center text-light  mx-4">
                    <div className=" text-light h3 my-3">
                        Hey there, <br/> leave your details here and I will contact u Soon :)
                    </div>
                    <input type="text" placeholder="Enter Name" className="form-control my-5" />
                    <input type="text" placeholder="Enter E-mail" className="form-control my-5" />
                    <input type="text" placeholder="Enter Topic " className="form-control my-5" />
                    <div className="btn btn-outline-light"> Contact Me  </div>
                </div>
            </div>

        </div>
    )
}
export default Contact