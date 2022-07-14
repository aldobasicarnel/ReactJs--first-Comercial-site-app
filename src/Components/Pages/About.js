import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.about}>
      <h1 className={classes.title}>Use of the site - terms and conditions</h1>
      <h3 className={classes.utitle}>Definitions.</h3>
      <p className={classes.paragraph}>
        "Ducati" means Ducati Motor Holding S.p.A. – A Sole Shareholder Company
        - A Company subject to the Management and Coordination activities of
        AUDI, Via Cavalieri Ducati n. 3, Bologna, Italy. “Site” means the web
        site www.ducati.com owned and managed by Ducati. "User" or "You" means
        any visitor or user of the Site. The sections of the Site are operated
        directly by Ducati or by third parties each time expressly indicated.
        This agreement describes the terms and conditions relevant to the use of
        the Site and the products and services available through this Site.
        These terms and conditions describe User responsibilities and, among
        other things, they limit the liability of Ducati. Before using the Site,
        please read all of this agreement carefully. BY ACCESSING ANY PART OR
        AREAS OF THE SITE, THE USER AGREES TO BE LEGALLY BOUND BY THESE TERMS
        AND CONDITIONS AND TO ABIDE BY THEM. IF YOU DO NOT AGREE WITH ANY PART
        OF THESE TERMS AND CONDITIONS, YOU ARE NOT ALLOWED TO USE THE SITE.
      </p>
      <h3 className={classes.utitle}>Copyright notice.</h3>
      <p className={classes.paragraph}>
        The User acknowledges that information, data, software, photographs,
        graphs, video, wallpapers, typefaces, graphics, music, sounds, images,
        illustrations, designs, icons, texts and other material on the Site are
        Ducati’s and/or third parties’ copyrighted works. Duplications,
        reproductions, even if partial, downloading, storage, publication or
        diffusion by any mean and in general any acts of disposition or use of
        information or material retrieved from this Site, in all forms, by media
        and technologies now existing or developed in the future, are forbidden,
        failing expressly advice to the contrary.
      </p>
      <h3 className={classes.utitle}>Trademark notice.</h3>
      <p className={classes.paragraph}>
        "Ducati" and "Ducati Corse" are figurative and denominative trademarks
        of Ducati Motor Holding S.p.A., as the logos used in the Site are
        registered by Ducati Motor Holding S.p.A. Trademarks and logos of third
        parties used in the Site are exclusive property of the respective
        owners. The use and reproduction in any form and way of these trademarks
        and logos are forbidden.
      </p>
    </div>
  );
};

export default About;
