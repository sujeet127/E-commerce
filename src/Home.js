import React from "react";
import "./home.css";
import FontAwesome from 'react-fontawesome'
import  logo from './myntraLogo.png'
export default class Fetch extends React.Component{
    state={
        loading:true,
        product:[],
        
        
    }
   async componentDidMount(){
        const url="https://demo7242716.mockable.io/products";
        const response= await fetch(url);
        const product_data= await response.json();
        
        this.setState({product:product_data.products});
        
       //printing array of products
        console.log(product_data.products);
        //printing  data of  single image 
        console.log(this.state.product[0].images[0].src);

    }
    render(){ 
        return <>
<div className = "header">
            <div><img src={logo}></img></div>
            
            <div className = "menu-list">
                <ul>
                    <li><a href="#">MEN</a></li>
                    <li><a href="#">WOMEN</a></li>
                    <li><a href="#">KIDS</a></li>
                    <li><a href="#">HOME & LIVING</a></li>
                    <li><a href="#">BEAUTY</a></li>
                </ul>
            </div>

            <div className="searchbar">
                <div></div>
                <input type="text" placeholder= "         Search for products,brands and more"></input>
            </div>

            <div className="cart-logo">
                <div><FontAwesome className='fa-solid fa-heart'/></div>
                <div><FontAwesome className='fa-solid fa-user'/></div>
                <div><FontAwesome className='fa-solid fa-sd-card'/></div>
            </div>

        </div>

        <div className = "product-path">
            <div>
                <p>Home / Clothing / Sweatshirts / <span><b>Sweatshirts for men</b></span></p>
                <b>Sweatshirt for men - </b>
            </div>
        </div>

        <div className = "filters">
            <h3>FILTERS</h3>
            <div className="filter-cont">
                <div className="brands">
                    <h4>BRANDS</h4>
                    <div>
                    <input type="checkbox" value="campussutra"/>
                    <label for="campussutra">campus sutra</label>
                    </div>
                    <div>
                    <input type="checkbox" value="puma"/>
                    <label for="puma">PUMA</label>
                    </div>
                    <div>
                    <input type="checkbox" value="roadster"/>
                    <label for="roadster">ROADSTER</label>
                    </div>
                    <div>
                    <input type="checkbox" value="hereandnow"/>
                    <label for="hereandnow">here & now</label>
                    </div>
                    <div>
                    <input type="checkbox" value="wrogn"/>
                    <label for="wrogn">WROGN</label>
                    </div>
                    <div>
                    <input type="checkbox" value="hnm"/>
                    <label for="hnm">H&M</label>
                    </div>
                </div>

                <div className="prices">
                    <h4>PRICES</h4>
                    <div>
                    <input type="checkbox" value="-4000"/>
                    <label for="-4000">Rs.349 to Rs.4262</label>
                    </div>
                    <div>
                    <input type="checkbox" value="-8000"/>
                    <label for="puma">Rs. 4262 to Rs. 8175</label>
                    </div>
                    <div>
                    <input type="checkbox" value="-12000"/>
                    <label for="roadster">Rs. 8175 to Rs. 12088</label>
                    </div>
                </div>
            
                <div className="colors">
                    <h4>COLORS</h4>
                    <div>  
                    <input type="checkbox" value="black"/>
                    {/* <span className="black">o</span>   */}
                    <label for="black">Black</label>
                    </div>
                    <div>
                    <input type="checkbox" value="navyblue"/>
                    <label for="navyblue">Navy Blue</label>
                    </div>
                    <div>
                    <input type="checkbox" value="olive"/>
                    <label for="olive">olive</label>
                    </div>
                    <div>
                    <input type="checkbox" value="grey"/>
                    <label for="grey">Grey</label>
                    </div>
                    <div>
                    <input type="checkbox" value="red"/>
                    <label for="red">Red</label>
                    </div>
                    <div>
                    <input type="checkbox" value="blue"/>
                    <label for="blue">Blue</label>
                    </div>
                </div>
            </div>

        </div>

        <div className="sort">
            <select>
                <option>Recommended</option>
                <option>Popularity</option>
                <option>Discount</option>
                <option>High to Low</option>
                <option>Low to High</option>
                <option>Customer rating</option>
            </select>
        </div>

        <div className = "products">
            
            {    
            this.state.product.map((e) => 
            <div>
                <img src={e.images[0].src}></img>
                <p>{e.brand}</p>
                <p className="productname">{e.product.substr(e.product.indexOf(" ")+1)}</p>
                <p>Rs. {e.price}</p>
            </div>)
            }   
        </div>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
         </>
        
        
        
    }
}