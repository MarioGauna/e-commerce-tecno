import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from '../components/Item.js';
import Loading from "../utilidades/Loading.js";

const ItemOferta = ({item})=> {

        const responsive = {
                desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 3
                },
                tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2
                },
                mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1
                }
        };

        return (
                <div className="carouselCont">
                        <div className="ofertaTitle">
                                <h1 className="lightSpeedIn">Ofertas de la Semana</h1>
                        </div>
                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                transitionDuration={2000}
                >
                        {
                        item
                        ?
                        item.map(elem =><Item key={elem.id} item={elem}/>)
                        :
                        <Loading/>
                        }
                </Carousel>
                </div>
        )
}

export default ItemOferta;