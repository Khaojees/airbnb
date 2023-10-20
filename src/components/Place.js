import MyData from '../data/MyData'; 
const Place =()=>{
      return(
            <div> 
                  <div className='free-area'></div>
                  <div className="displaytotalprice">
                        <div>
                              <span>Display total price</span>
                              <span>Include all fees, before taxes</span>
                        </div>
                        <label class="switch">
                              <input type="checkbox"></input>
                              <div class="slider">
                                    <div class="circle"></div> 
                              </div>
                        </label>


                  </div>
                  <div className=''>
                        <div className='showmenu'>
                        {MyData.map((item)=>{
                              return <div key={item.id} className='menuitem'>
                                    <img src={item.image_url}/>
                                    <p><b>{item.place}</b></p>
                                    <p className='lightfont'>{item.description}</p>
                                    <p className='lightfont'>{item.date}</p>
                                    <p><b>&#3647;{item.price}</b> night</p>
                              </div>
                        })}
                        </div>
                  </div>
                  
            </div>
      )
}
export default Place