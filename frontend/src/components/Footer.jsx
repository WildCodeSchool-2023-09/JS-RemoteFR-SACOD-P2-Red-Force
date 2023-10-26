function Footer() {
  return (
    <div className="footer-section">
      <img src="./assets/Trivality_Logo_Officiel.svg" alt="logo" />
      <div className="footer-column">
        <p className="footer-column-title">A propos</p>
        <p className="footer-about-text">
          Ce site est un prototype d'exercice dessiné et développé dans le cadre
          d'une formation de Développeur Web et Mobile au sein de la Wild Code
          School sur le campus Remote de Septembre 2023.
        </p>
      </div>
      <div className="footer-column">
        <ul>
          <li>
            <p className="footer-column-title">Légale</p>
          </li>
          <li>
            <p
              title="Acceder à la page explicative des Cookies"
              className="footerlinks"
            >
              Cookies
            </p>
          </li>
          <li>
            <p title="Acceder aux Mentions Légales" className="footerlinks">
              Mentions Légales
            </p>
          </li>
          <li>
            <p
              title="Acceder aux Politiques de Confidentialité"
              className="footerlinks"
            >
              Politique de Confidentialité
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>
            <p className="footer-column-title">Developpeurs</p>
          </li>
          <li>
            <a
              title="Acceder au profil GitHub de Baptiste"
              href="https://github.com/Batsave"
              className="footerlinks"
            >
              Baptiste
            </a>
          </li>
          <li>
            <a
              title="Acceder au profil GitHub de Diogo"
              href="https://github.com/diogo596"
              className="footerlinks"
            >
              Diogo
            </a>
          </li>
          <li>
            <a
              title="Acceder au profil GitHub de Océane"
              href="https://github.com/Midunighto"
              className="footerlinks"
            >
              Océane
            </a>
          </li>
          <li>
            <a
              title="Acceder au profil GitHub de Souhir"
              href="https://github.com/souhirfar"
              className="footerlinks"
            >
              Souhir
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
