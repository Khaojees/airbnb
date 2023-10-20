import { GrLanguage } from "react-icons/gr";
import { AiOutlineUp } from "react-icons/ai";
const MyFooter=()=>{


      return(
            <div className="footer-margin">
                  <div className="footer-container">
                        <div className="footer-left">
                              <p>&#169; 2023 Airbnb, Inc.</p>
                              <a href="#">Terms</a>
                              <a href="#">Sitemap</a>
                              <a href="#">Privacy</a>
                              <a href="#">Your Privacy Choices</a>
                        </div>
                        <div className="footer-right">
                              <p><GrLanguage/> <a href="#">English &#40;US&#41;</a></p>
                              <p>&#3647; <a href="#">THB</a></p>
                              <p><a href="#">Support & resources <AiOutlineUp/></a></p>
                        </div>
                  </div>
            </div>
      )
}
export default MyFooter