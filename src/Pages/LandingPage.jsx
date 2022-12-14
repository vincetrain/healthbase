import './LandingPage.css'
import {Link} from "react-router-dom";
import HomePicture from "../Assets/LandingPagePictureNew.jpg"

function Home(){    
    return (
    <div className="homeContainer">
        <header className="homeHeader" id="header">
            <div className='headerMain'>
                <div className="headerText">
                    <h1>Welcome to HealthBase.</h1>
                    <p>Helping medical professionals communicate.</p>
                </div>
                <div className="headerButtons">
                    <Link to="/signup" className="button">SIGN UP</Link>
                    <Link to="/login" className="button">LOGIN</Link> 
                </div>
            </div>
            <img className="headerPicture" src={HomePicture} alt=""/>
        </header>

        <div className='textsection'>
            <section id="aboutus">
                <section id="purpose">
                    <h1>Our Purpose.</h1>
                    <p>HealthBase aims to provides a secure and centralized database for medical professionals to use, increasing the efficiency and effectiveness of communication between all healthcare businesses. With all your patient's data held securely on the cloud, managing and viewing important patient info is as easy as a click of a button.</p>
                </section>

                <ul id="benefits">
                    <li>
                        <h1>Effortless Accessibility</h1>
                        <p>HealthBase provides a single, centralized database for patient records. This allows for easier access to a patient's medical history, including past diagnoses and treatments. As a result, this helps to reduce the need for multiple requests from different healthcare providers, saving time and improving patient care.</p>
                    </li>
                    <li>
                        <h1>Refined Data Accuracy</h1>
                        <p>With a centralized database, practitioners from any of the patient's institutions are able to modify their medical records. This helps to reduce errors due to outdated or inaccurate information, and can also help inform decisions about patient treatments, improving healthcare outcomes.</p>
                    </li>
                    <li>
                        <h1>Enhanced Data Security</h1>
                        <p>HealthBase allows for the secure transfer of patient information between different healthcare providers. When using a central repository, patient data is more secure and protected from unauthorized access. </p>
                    </li>
                    <li>
                        <h1>Cloud-based Solution</h1>
                        <p>Uploading patient records on the cloud reduces the need for resources such as fax machines or paper. Therefore, HealthBase can help to reduce equipment and improve overall operational efficiency in healthcare organizations.</p>
                    </li>
                </ul>
            </section>
        </div>

    </div>
    )
}

export default Home;