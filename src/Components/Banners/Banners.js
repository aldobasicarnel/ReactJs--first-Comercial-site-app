import classes from "./Banners.module.css";
import img5 from "./images5.jpg";

const Banners = (props) => {
  return (
    <div className={classes.banner}>
      <div className={classes.text}>
        <p>{props.title}</p>
        <h2>{props.text}</h2>
        <p>{props.p}</p>
      </div>
      <div className={classes.photo}>
        <img src={img5} alt="ducati" />
      </div>
    </div>
  );
};

export default Banners;
