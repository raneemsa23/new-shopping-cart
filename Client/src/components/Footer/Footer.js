import React from "react";
import "../../css/Footer/Footer.css";
import { staticWords } from "../../staticWords";
export default function Footer() {
	return <div className="footer">
  
   &copy;{ staticWords.footerTitle} </div>;
}
