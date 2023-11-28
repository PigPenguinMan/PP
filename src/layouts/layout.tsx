import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import styles from "../styles/mainlayout.module.css";

const MainLayout = () => {
  return (
    <main className={styles.main_layout}>
      <Navbar />
        <section>

        <Outlet />
        </section>

    </main>
  );
};

export default MainLayout;
