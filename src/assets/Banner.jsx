import banner from "../image/banner-3.jpg";
import "../assets/Banner.css";
export default function Banner(){
    return(
        <>
        <main>
            <section className="banner-section">
                    <img src={banner} alt="Fresh Cart Banner" className="banner-img"/>
                    <div className="btn">
                    <button className=" btn-1">Order Now</button>
                    <button className=" btn-1">Explore More</button>
                    </div> 
            </section>
            
        </main>
        </>
    )
}
