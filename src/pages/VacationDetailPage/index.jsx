import "./styles.css"
import {useState, useEffect} from 'react';
import img from "../../images/location.svg"
import Layout from "../Layout";
import beds from "../../images/bedrooms1.svg"
import bath from "../../images/bathroom1.svg"
import people from "../../images/person.svg"
import house from '../../images/real-estate-hero.jpeg'
import { useSearchParams, useParams } from 'react-router-dom';
import { getByTitle } from "@testing-library/react";



const VacationDetailPage = (props) => {
    const [searchParams] = useSearchParams();
    const parametros = searchParams.get('id')
    let { slug } = useParams();
     const [properties, setProperties] = useState({});
     const query = ` 
     {
         rentalsCollection(where: {slug_contains: "${slug}"}, order: target_ASC)
         {
             items 
             {
               id
               rentalName
               descriptionOfProperty 
               {
                 json
               }
                image
                {
                       title
                       contentType
                       fileName
                       url
                }
               price
               location
               
             } 
         }
     }
     `;
     useEffect(() => {
         window
             .fetch(`https://graphql.contentful.com/content/v1/spaces/3i04xqrcd8f9/`, {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: "Bearer nV2Ia5_OP4kx92aAp3mS6ItlH19Oi6mqVynE-bPK0H4",
                 },
                 body: JSON.stringify({query})
             })
             .then((response) => response.json())
             .then(({ data, errors }) => {
                 if (errors) {
                     console.error(errors);
                 }
                 console.log(data)
                setProperties(data.rentalsCollection.items[0]);
             });
     
     }, []);
 



    return (

        <Layout>
            <section className="hero__container">
                <div className="hero__img">
                    <img src={house} alt="" />
                    <div className="detailpage__icons">
                        <div className="grid__icon-details">
                            <img className="grid__icons" src={beds} alt="" />
                            3 Bedrooms
                        </div>

                        <div className="grid__icon-details">
                            <img className="grid__icons" src={bath} alt="" />
                            4 Bathrooms
                        </div>
                        <div className="grid__icon-details">
                            <img className="grid__icons" src={people} alt="" />
                            6 Sleeps
                        </div>
                    </div>
                </div>
                <div>
                    {parametros}
                </div>
                <div className="hero__wrapper">
                    <div className="id">
                    {properties.id}
                    </div>
                    <div className="hero__subtitle">
                        {properties.price}
                    </div>
                    <h3 className="hero__title">
                    {properties.rentalName}
                    </h3>
                    <div className="location">
                        <img src={img} alt="" />
                        <div>
                            {properties.location}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="description-wrapper">
                    <div>
                        <strong className="description-title">

                        </strong>
                        <div className="description-body">
                            Jade Nosara is an inspiring retreat nestled where the jungle meets the
                            Pacific Ocean at Playa Guiones, a place for exploration of what is natural within ourselves,
                            and the transcendent natural beauty of the flora, fauna, and wildlife that surrounds us there.
                            This award-winning property was created by architect Donald Loria Prendas.
                            The main house is a great space for cooking a meal or having
                            a private chef prepare a meal for your group.
                            The terrace ends where the pool begins. Our guests spend time together in this peaceful space.
                            Come enjoy mindful ping pong or Bocce Ball.
                        </div>
                    </div>
                    <div className="newsletter__info">
                        <div>
                            <div className="newsletter__title">
                                Book Your Vacation Home Now
                            </div>
                            <div className="newsletter__subtitle">
                                We will get back to you fast, our usual response time is less than an hour!
                            </div>
                        </div>
                        <form action="https://formspree.io/f/xpznzyjq" method="POST">
                            <div className="form__details">
                                <div className="form__detail">
                                    <label className="form__label" htmlFor="emailaddress">
                                        first name
                                        <span className="form__star">*</span>
                                    </label>
                                    <input id="fname" className="input__form" type="text" name="fname" placeholder="First" />
                                </div>
                                <div className="form__detail">
                                    <label className="form__label" htmlFor="phonenumber">
                                        last name
                                        <span className="form__star">*</span>
                                    </label>
                                    <input id="lastname" className="input__form" type="text" name="lastname" placeholder="Last" />
                                </div>
                            </div>
                            <div className="form__details">
                                <div className="form__detail">
                                    <label className="form__label" htmlFor="emailaddress">
                                        email
                                        <span className="form__star">*</span>
                                    </label>
                                    <input id="emailaddress" className="input__form" type="text" name="emailaddress"
                                        placeholder="Email Address" />
                                </div>
                                <div className="form__detail">
                                    <label className="form__label" htmlFor="phonenumber">

                                        phone
                                    </label>
                                    <input id="phonenumber" className="input__form" type="text" name="phonenumber"
                                        placeholder="Phone Number" />
                                </div>
                            </div>
                            <button className="button__form">Sign Up</button>
                        </form>
                    </div>

                </div>
            </section>
        </Layout>

    )

}

export default VacationDetailPage;