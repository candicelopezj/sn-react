import "./styles.css"
import { useState, useEffect } from 'react';
import NewsletterForm from '../../components/NewsletterForm';
import img from "../../images/location.svg"
import Layout from "../Layout";
import beds from "../../images/bedrooms1.svg"
import bath from "../../images/bathroom1.svg"
import people from "../../images/person.svg"
import house from '../../images/real-estate-hero.jpeg'
import {  useParams } from 'react-router-dom';



const PropertyDetailPage = (props) => {
    let { slug } = useParams();
    const [properties, setProperties] = useState({});
    const query = ` 
     {
        propertiesCollection(where: {slug_contains: "${slug}"}, order: target_ASC) {
            items 
       {
         id
         map 
         video
         title
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
                body: JSON.stringify({ query })
            })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }
                console.log(data)
                setProperties(data.propertiesCollection.items[0]);
            });

    }, [query]);


    return (

        <Layout>
            <section className="detailpage__hero-container">
                <div className="detailpage__hero-img">
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
                <div className="detailpage__hero-wrapper">
                    <div className="detailpage__id">
                       {properties.id}
                    </div>
                    <div className="detailpage__hero-subtitle">
                        {properties.price}
                    </div>
                    <h3 className="detailpage__hero-title">
                        {properties.title}
                    </h3>
                    <div className="detailpage__location">
                        <img src={img} alt="" />
                        <div>
                            {properties.location}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="detailpage__description-wrapper">
                    <div>
                        <strong className="detailpage__description-title">

                        </strong>
                        <div className="detailpage__description-body">
                            {properties.descriptionOfProperty?.json ? properties.descriptionOfProperty?.json?.content[0].content[0].value : null} 
                        
                        </div>
                    </div>
                    <NewsletterForm 
                        title="Enquire About This Property Now" 
                        subtitle="We will get back to you fast, our usual response time is in the same hour! If there is any other property, or specific criteria you're interested in, include that below and we will be glad to help."
                        formspreeUrl="https://formspree.io/f/xpznzyjq"
                        buttonText="Sign Up for latest listings!"
                    >
                        <div className="form__details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                select important features
                                </label>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features"/>
                                    <label className="form__label-checkbox" type="text">Walk to Surf</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features"/>
                                    <label className="form__label-checkbox" type="text">Ocean View</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features"/>
                                    <label className="form__label-checkbox" type="text">Pool</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features"/>
                                    <label className="form__label-checkbox" type="text">Near Restaurants/Bars</label>
                                </div>
                            </div>
                        </div>
                        <div className="form__details">
                        <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    budget 
                                </label>
                                <select id="budget"  name="budget">
                                    <option>$500k-$100k</option>
                                    <option>$100k-$150k</option>
                                    <option>$150k-$200k</option>
                                    <option>$200k-$400k</option>
                                    <option>$400k-$600k</option>
                                    <option>$600k-$1M</option>
                                    <option>$1M-$Above $1M</option>
                                </select>
                            </div>
                        <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    timeframe
                                </label>
                                <select id="guest"  name="guest">
                                    <option>Now!!</option>
                                    <option>Under 3 months</option>
                                    <option>Under 6 months</option>
                                    <option>This Year</option>
                                    <option>Sometime</option>
                                </select>
                            </div>
                        </div>
                        <div className="form__details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    next trip to nosara
                                </label>
                                <select id="guest"  name="guest">
                                    <option>1 - 3 months</option>
                                    <option>3 - 6 months</option>
                                    <option>6 - 12 months</option>
                                    <option>12+ months</option>
                                </select>
                            </div>
                        </div>
                    </NewsletterForm>
                    

                </div>
            </section>
            <section>
                <div className="detailpage-container">
                    <div className="detailpage-map">
                        <iframe className="detailpage__video" src={properties.video} height="200" width="300" title={properties.video}></iframe>
                    </div>
                    <div className="detailpage-video"
                        dangerouslySetInnerHTML={{ __html: `<iframe class="detailpage__map" src=${properties.map} </iframe>` }}
                    />
                </div>
            </section>
        </Layout>

    )

}

export default PropertyDetailPage;