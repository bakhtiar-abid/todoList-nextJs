import style from "./SecondaryButton.module.css";

const SecondaryButton = ({ children, onClick }) => {
   return (
      <div>
         <button
            onClick={(e) => typeof onClick == "function" && onClick(e)}
            className={style["delete-button"]}
         >
            {children}
         </button>
      </div>
   );
};

export default SecondaryButton;