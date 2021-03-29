import Navbar from "./Navbar"
import StorageIcon from '@material-ui/icons/Storage';
import AndroidIcon from '@material-ui/icons/Android';
import LanguageIcon from '@material-ui/icons/Language';
import CloudIcon from '@material-ui/icons/Cloud';
import GitHubIcon from '@material-ui/icons/GitHub';
import BorderColorIcon from '@material-ui/icons/BorderColor';
const Skills=()=>{
    return (
        <div className="container bg-dark p-0"> 
            <div class="row">
                <div class="col-md-3">
                    <Navbar/>
                </div>
                <div className="col text-center text-light  mx-4">
                    <div className="row m-5">
                        <div className="col h3">
                            <StorageIcon className="icon" />
                            Database 
                        </div>
                        <div className="col h3">
                            <AndroidIcon className="icon" />
                            Android Development
                        </div>
                        <div className="col h3">
                            <LanguageIcon className="icon" /> <br></br>
                            Web Development
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className="col h3">
                            <CloudIcon className="icon" /> <br/>
                            Cloud computing
                        </div>
                        <div className="col h3">
                            <GitHubIcon className="icon" /> <br/>
                            Git 
                        </div>
                        <div className="col h3">
                            <BorderColorIcon className="icon" />
                            Logo design
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills