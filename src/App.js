import "./App.css";
import { BrowserRouter } from "react-router-dom";

const policy = [
  "The privacy of your personal information is very important to us. To better protect your privacy, we provide this document explaining our online and software information practices and the choices you can make about that way your information is collected and used. You are hereby advised that your continued use of any BOOM GAMES product constitutes your acceptance of this Privacy Policy. Any applicable current and prior revisions, and any amendments thereto. This document reflects our Privacy Policy as of August 1, 2023. We reserve the right to amend our Privacy Policy at any time without notice to you, and such amendments will take effect from the date listed in this document. Please check back regularly for updates.",
  "We will only collect personal information where it is reasonably necessary to do so for the conduct of our business. Any information that we collect will be fair and lawful and will not be intrusive. We do not collect any information that can be used to identify you as an individual. Information is only collected when it is essential to the function of the application.",
  "In no circumstances do we collect any information related to your email, legal name, address, current location, contacts or media. We do not collect any sensitive personal information. Please continue reading to see how this applies to 3rd party content and services.",
  "We may collect information regarding the device you use to access the software, applications and/or services. This can include its model, operating system, screen resolution and other technical information. None of this information can be used to directly identify you as an individual. By using our software, applications and/or services, you agree to these terms.",
  "Our software, applications and/or services may use third party content or services (such as advertisements). These third party companies may use and collect anonymous data about your interests to customize content and advertising. Some of this interest and location data may be linked to your device, but it is not linked to your identity. This privacy policy does not apply to such third party companies, and you should view the privacy policies of these third party companies below.",
  "We take reasonable steps to secure your personally identifiable information against unauthorized access or disclosure. However,  no security or encryption method can be guaranteed to protect information from hackers or human error. Therefore, there is a possibility that your information maybe be subject to unauthorized access, and you assume this risk. You are responsible for protecting any password selected by you (if applicable), or issued to you by us, in order to prevent unauthorized access to your personal information.",
  "Our software, applications and/or services may contain links to other sites. If you click on a third-party link, you will be directed to that site. Please not that these external sites are not operated by us. We have no control and assume no responsibility for the the content, privacy policies or practices used by any 3rd party sites or services. Please review the privacy policy of any 3rd party sites or services you visit.",
  "To operate the service, we also may make identifiable and anonymous information available to third parties in these limited circumstances: (1) with your express consent, (2) when we have a good faith belief it is required by law, (3) when we have a good faith belief it is necessary to protect our rights or property, or (4) to any successor or purchaser in a merger, acquisition, liquidation, dissolution or sale of assets. Your consent will not be required for disclosure in these cases, but we will attempt to notify you, to the extent permitted by law to do so.",
  "If you have any questions or concerns about our privacy policy, please contact us at",
];

const advertisers = [
  { name: "Apple", link: "http://www.apple.com/privacy/" },
  { name: "Google", link: "https://play.google.com/about/play-terms.html" },
];
function App() {
  return (
    <BrowserRouter basename="/">
      <main className="main">
        <h1 className="title">Dev Boom Games</h1>
        <h3 className="description">Privacy Policy</h3>
        {policy.map((item, index) => (
          <>
            <p className="text">
              {item}{" "}
              {index === policy.length - 1 && (
                <a href="mailto:dev.boom.games@gmail.com">
                  dev.boom.games@gmail.com
                </a>
              )}
            </p>
            {index === 4 && (
              <ul>
                {advertisers.map(({ name, link }) => (
                  <li>
                    <p className="link">{name}:</p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </main>
      <footer>
        <p>
          Copyright ©{new Date().getFullYear()} BOOM GAMES. All rights reserved.
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
