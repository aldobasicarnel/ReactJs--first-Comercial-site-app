import classes from "./Banners.module.css";

const Banners = (props) => {
  return (
    <div className={classes.banner}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <p>{props.title}</p>
          <h2>{props.text}</h2>
          <p>{props.p}</p>
        </div>
        <div className={classes.photo}>{props.img}</div>
      </div>
    </div>
  );
};

export default Banners;
