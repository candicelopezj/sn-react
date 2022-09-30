import './vacation.css'
import '../VacationDetailPage'
import Hero from '../../components/Hero';
import person from '../../images/person.svg'
import bedroom from '../../images/bedrooms1.svg'
import bathroom from '../../images/bathroom1.svg'
import Layout from '../Layout'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const query = `
// {
//     vacationRentalsCollection {
//       items {
//         nameOfProperty
//         price
//         howManyPeople
//         beds
//         baths
//         descriptionOfProperty
//         location
//         id
//       }
//     }
//   }
// `;

const query = `{
    heroCollection(where: {target_contains: "VacationHomes"}, order: target_ASC) {
        items {
            target
            id
            title
            subtitle
            linkLabel
            linkUrl
            image {
              title
              contentType
              fileName
              url
            }
          }
        }
        rentalsCollection {
          items {
            id
            rentalName
            price
            beds
            numberOfPeople
            descriptionOfProperty {
                json
              }
            baths
            location
            baths
            slug
            image {
              url
          }
         
        } 
      }
  }
  
`;

const VacationHomes = (props) => {
    const [heroItems, setHeroItems] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/3i04xqrcd8f9/`, {
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
            setHeroItems(data.heroCollection.items);
            setProperties(data.rentalsCollection.items);
        
        });
    }, []);

 

        
    return (
        
        <Layout>
            {heroItems && (
                <Hero data={heroItems[0]} />
            )}
            <div>
                <section className="real__estate-form">
                    <div className="real__estate-container">
                        <div>
                            <label className="form__label" htmlFor="">
                                Price
                            </label>
                            <div className="form__box">
                                <select className="form__box" name="prices" id="" placeholder="All Prices">
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
                            <label className="form__label" htmlFor="">
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
                            <label className="form__label" htmlFor="">
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
                            <label className="form__label" htmlFor="">
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
                            <label className="form__label" htmlFor="">
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
                        <div className="form__box">
                            <label className="form__label" htmlFor="">
                                Keyword or ID
                            </label>
                            <div>
                                <input type="text" placeholder="Keyword or ID">
                                </input>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="grid__promotion-container">
                    <div id="grid">
                        <div className="grid__cards">
                            {
                                properties.map((property) =>
                                    <Link to={`/VacationDetailPage/${property.slug}`} key={property.id} className="grid__card">
                                        <div className="grid__imgs">
                                            <img src={property.image.url} alt="" />
                                        </div>
                                        <div className="grid__info">
                                            <div className="grid__details">
                                                <div className="grid__card-details">
                                                    ${property.price}
                                                </div>
                                                <div className="grid__card-details">
                                                    {property.location}
                                                </div>
                                            </div>
                                            <div className="grid__card-title">
                                                {property.rentalName}
                                            </div>
                                            <div className="grid__card-icons">
                                                <div className="grid__icon-details">
                                                    <img className="grid__icons" src={bedroom} alt="" />
                                                    {property.beds}
                                                </div>
                                                <div className="grid__icon-details">
                                                    <img className="grid__icons" src={bathroom} alt="" />
                                                    {property.baths}
                                                </div>
                                                <div className="grid__icon-details">
                                                    <img className="grid__icons" src={person} alt="" />
                                                    {property.numberOfPeople}
                                                </div>
                                            </div>
                                          
                                            <div className="grid__description">
                                            {property.descriptionOfProperty?.json && (
                                                <div>
                                                     {property.descriptionOfProperty.json?.content[0].content[0].value}
                                                </div>
                                               )} 
                                            </div>
                                    
                                            <div className="id">
                                                #{property.id}
                                            </div>
                                        </div>

                                    </Link>
                                )
                            }

                        </div>
                        <div className="grid__button grid__button-text">
                            {/* <a href="/"> */}
                            <div className="grid__button">
                                see more featured real estate
                            </div>
                            {/* </a> */}
                        </div>
                    </div>
                </section>
            </div>

          
        </Layout>




    )
}

export default VacationHomes;