import SocialLinks from "./SocialLinks";
import { ABOUT } from "../constants";
import logo from "../assets/logo.png";
export default function Footer() {
  return <footer className="site-footer section-wrap"><a href="#home" className="brand footer-brand" aria-label="Back to Bryan Encarnacion home"><img src={logo} alt="" width={72} height={72} /></a><p>© {new Date().getFullYear()} {ABOUT.name}</p><SocialLinks /></footer>;
}
