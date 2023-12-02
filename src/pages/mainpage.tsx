import MainAboutMe from '../components/main/aboutme';
import MainAboutProject from '../components/main/aboutpj';
import Any from '../components/main/anything';
import MainPlan from '../components/main/plan';
import '../styles/mainpage.css'

const MainPage = () => {
    return ( 
        <div className="main_wrap">
            <MainAboutMe/>
            <MainAboutProject/>
            <MainPlan/>
            <Any/>
        </div>
     );
}
 
export default MainPage;