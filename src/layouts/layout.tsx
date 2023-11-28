import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import styles from '../styles/mainlayout.module.css'

const MainLayout = () => {
    return ( 
        <div className={styles.main_layout}>
            <Navbar/>
            <Outlet/>

        </div>
     );
}
 
export default MainLayout;