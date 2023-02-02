import React from "react";
import  styles  from "./CSS/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        src="https://fontmeme.com/permalink/230202/cb6bd3df64d17f66b0021c1654cc80e6.png"
        alt="Cargando..."
      />
    </div>
  );
};

export default Loader;