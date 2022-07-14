import classes from "./Content.module.css";
import Card from "./Card";
const Content = () => {
  return (
    <Card>
      <div className={classes.content}>
        <h1>Ducati Motorcycles</h1>
        <p>
          Have a long legacy stemming back almost a century to the company’s
          founding in 1926. From their beginnings as a manufacturer of radio and
          electronic equipment in Italy to their current status as a subsidiary
          of the German Volkswagen Group, Ducati has produced a range of
          high-quality, powerful motorcycles with innovative designs and modern
          technology. As a premier Ducati dealer in Florida, BMW Motorcycles of
          Jacksonville is located in Orange Park, where we have a wide selection
          of Ducati motorcycles for sale. Visit us to see our used Ducati
          inventory after you check out the fascinating history of this renowned
          motorcycle company.
        </p>
        <h1>The Ducati Brothers</h1>
        <p>
          Three brothers in Bologna, Italy, were the founders of the Società
          Scientifica Radio Brevetti Ducati: Adriano, Bruno and Marcello Ducati,
          along with their father Antonio. The company began as a manufacturer
          of radio components because of Adriano’s experiments with burgeoning
          radio technology. The Ducatis were very successful throughout the
          1930s in this field, but World War II halted production when the
          Germans occupied the Ducati factory in 1943. The brothers had hidden
          many of their machines, but this was to little avail, since Allied
          bombing destroyed their plant in Borgo Panigale in October of 1944.
          This event forced the three brothers to rethink their strategy while
          beset by financial problems stemming from the war and loss of income,
          resulting in their company being taken over by the Italian government.
          After a gift of twelve trucks from the Allies bestowed upon them by
          Bologna mayor Giuseppe Dozza, the brothers decided to diversify their
          production since the delicate and intricate radio and electronic parts
          they produced before were too complex. Thus, the company began to make
          four-stroke engines and then they saw the production of their first
          motorcycle in 1945. This bike, called the Cucciolo, was a true
          innovation, designed by Aldo Farinelli during the war. Farinelli
          mounted a propulsion motor on a bicycle, but the company he worked
          with, SIATA, couldn’t handle demand for the bike. Ducati stepped in as
          the manufacturer of the Cucciolo, which became very successful upon
          its release in 1946. In July 1949, Ducati manufactured the first
          complete motorcycle, the Ducati 60. These successes cemented Ducati as
          a motorcycle manufacturer, and the motorcycle division split off in
          1954, called Ducati Meccanica SpA. The brothers owned Ducati until
          1948, when hardship forced them to cede their company to the Italian
          government, after which the company was transferred several times.
        </p>
      </div>
    </Card>
  );
};

export default Content;
