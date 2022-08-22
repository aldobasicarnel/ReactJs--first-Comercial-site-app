import Banners from "./Banners";

import classes from "./CardBanner.module.css";

const dummy_banners = [
  {
    id: "b1",
    title: "Moto GP",
    text: "Italian GP: The Ducati Lenovo Team ready to hit the track.",
    p: "Everything ready for the highly antiipated round at the Mugello Circuit",
  },
];
const CardBanner = () => {
  return (
    <div className={classes.cardBanner}>
      <div>
        {dummy_banners.map((banner) => (
          <Banners
            key={banner.id}
            title={banner.title}
            text={banner.text}
            p={banner.p}
          />
        ))}
      </div>
    </div>
  );
};
export default CardBanner;
