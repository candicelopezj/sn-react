import './realestate.css'
import surf from './'
import house from './real-estate-hero.jpeg'
import icon1 from './house__icon.svg'
import icon2 from './expand__icon.svg'
import surfing from './surfing__sunset.jpg'
import { useState, useEffect } from "react";

const query = `
{
    realEstateCollection {
      items {
        title
        price
        description
        squareFootage
        typeOfProperty
        location
        id
      }
    }
  }
`;


const RealEstate = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/3i04xqrcd8f9/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer nV2Ia5_OP4kx92aAp3mS6ItlH19Oi6mqVynE-bPK0H4",
                },
                body: JSON.stringify({ query }),
            })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }
                setProperties(data.realEstateCollection.items);
            });
    }, []);

    return (
        <div>
            <section class="hero__container">
                <div class="hero__img">
                    <img src={surfing} alt="" />
                </div>
                <div class="hero__wrapper">
                    <h3 class="hero__title">
                        Welcome to Nosara's real estate search engine
                    </h3>
                    <div class="hero__subtitle">
                        With the most listings, walkthroughs of homes and aerial videos plus an interactive map view... Surfing Nosara is home base for any property search in the Nosara area.
                    </div>
                </div>
            </section>
            <section class="real__estate-form">
                <div class="real__estate-container">
                    <div>
                        <label class="form__label" for="">
                            Price
                        </label>
                        <div class="form__box">
                            <select class="form__box" name="prices" id="" placeholder="All Prices">
                                <option value="">
                                    All Prices
                                </option>
                                <option value="">
                                    Under $50k
                                </option>
                                <option value="">
                                    $50k-$100k
                                </option>
                                <option value="">
                                    $100k-$200k
                                </option>
                                <option value="">
                                    $200k-$400k
                                </option>
                                <option value="">
                                    $400k-$600k
                                </option>
                                <option value="">
                                    $600k-1M
                                </option>
                                <option value="">
                                    Above 1M
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="form__label" for="">
                            Property Type
                        </label>
                        <div>
                            <select>
                                <option value="">
                                    All Property Types
                                </option>
                                <option value="">
                                    Home
                                </option>
                                <option value="">
                                    Condo
                                </option>
                                <option value="">
                                    Lot
                                </option>
                                <option value="">
                                    Business
                                </option>
                                <option value="">
                                    Finca
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="form__label" for="">
                            Area
                        </label>
                        <div>
                            <select>
                                <option value="">
                                    All Areas
                                </option>
                                <option value="">
                                    Playa Guiones
                                </option>
                                <option value="">
                                    Playa Pelada
                                </option>
                                <option value="">
                                    Guiones Ridge
                                </option>
                                <option value="">
                                    Garza
                                </option>
                                <option value="">
                                    Ostional
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="form__label" for="">
                            Bedrooms
                        </label>
                        <div>
                            <select>
                                <option value="">
                                    Bedrooms
                                </option>
                                <option value="">
                                    1+
                                </option>
                                <option value="">
                                    2+
                                </option>
                                <option value="">
                                    3+
                                </option>
                                <option value="">
                                    4+
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="form__label" for="">
                            Sort by
                        </label>
                        <div>
                            <select>
                                <option value="">
                                    Price: High to Low
                                </option>
                                <option value="">
                                    Price: Low to High
                                </option>
                                <option value="">
                                    Featured
                                </option>
                                <option value="">
                                    Oldest
                                </option>
                                <option value="">
                                    Newest
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form__box">
                        <label class="form__label" for="">
                            Keyword or ID
                        </label>
                        <div>
                            <input type="text" placeholder="Keyword or ID">
                            </input>
                        </div>
                    </div>
                </div>

            </section>
            <section class="grid__promotion-container">
                <div id="grid">
                    <div class="grid__cards">
                        {
                            properties.map((property) =>
                                <div class="grid__card">
                                    <div class="grid__imgs">
                                        <img src={house} alt="" />
                                    </div>
                                    <div class="grid__info">
                                        <div class="grid__details">
                                            <div class="grid__card-details">
                                               ${property.price}
                                            </div>
                                            <div class="grid__card-details">
                                                {property.location}
                                            </div>
                                        </div>
                                        <div class="grid__card-title">
                                            {property.title}
                                        </div>
                                        <div class="grid__card-icons">
                                            <div class="grid__icon-details">
                                                <img class="grid__icons" src={icon1} alt="" /> 
                                                 {property.typeOfProperty}
                                            </div>
                                            <div class="grid__icon-details">
                                                <img class="grid__icons" src={icon2} alt="" /> 
                                                {property.squareFootage}
                                                <sup>2</sup>
                                            </div>
                                        </div>
                                        <div class="grid__description">
                                           {property.description}
                                        </div>
                                        <div class="id">
                                           #{property.id}
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        {console.log(properties)}

                    </div>
                    <div class="grid__button grid__button-text">
                        <a href="/">
                            <div class="grid__button">
                                see more featured real estate
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RealEstate;