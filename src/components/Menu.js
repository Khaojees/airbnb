import airbnbLogo from '../images/airbnbLogo.svg'
import { BiSearch,BiMenu,BiFilterAlt } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import IconData from '../data/IconData';

const Menu=()=>{
      
      return(
            <main className='fixmenu'>
                  <div className="underline">
                  <div className="firstTab">
                        <div>
                              <a href="#"><img src={airbnbLogo} alt="img" className="webLogo"/></a>
                        </div>
                        <div className="searchBar">                              
                              <div>
                                    <div>Anywhere</div>
                                    <div>Any week</div>
                                    <div>Add guests</div>  
                              </div>
                              <div><BiSearch/></div>
                        </div>
                        <div className="personal-section">
                              <div>Airbnb your home</div>
                              <div><GrLanguage/></div>
                              <div>
                                    <div><BiMenu/></div>
                                    <div>P</div>
                              </div>
                        </div>
                  </div>
                  </div>
                  <div className="underline">
                  <div className='secondtab'>

                        <div className='icon-container'>
                              <div className='scroll-icon'><AiOutlineLeft/></div>
                                    <div className='child-container'>  
                                          {IconData.map((item)=>{
                                                return <div key={item.id} className='col-12'>
                                                            <img src={item.image_url}/>
                                                            <p>{item.name}</p>
                                                      </div>
                                          })}
                                    </div>
                              <div className='scroll-icon'><AiOutlineRight/></div>
                        </div>
                        


                        <div className='filter'>
                              <div><BiFilterAlt/></div>
                              <span>Filter</span>
                        </div>                
                  </div>
                  </div>
                  
            </main>
            
      )
}
export default Menu