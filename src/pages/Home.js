import { Fragment, useContext } from "react";
import { NavBar,  } from "../components";
import styles from "../Styles/home.module.css";
import { GlobalContext } from "../context/GlobalState";
function Home(props) {
  const { user } = useContext(GlobalContext);
  console.log(user);
  return (
    <Fragment className={styles.homepage}>
      <NavBar />
    </Fragment>
  );
}

export default Home;
