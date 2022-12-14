import "./styles.css"
import { useState, useEffect } from 'react';
import NewsletterForm from '../../components/NewsletterForm';
import img from "../../images/location.svg"
import Layout from "../Layout";
import beds from "../../images/bedrooms1.svg"
import bath from "../../images/bathroom1.svg"
import people from "../../images/person.svg"
import house from '../../images/real-estate-hero.jpeg'
import { useParams } from 'react-router-dom';



const VacationDetailPage = (props) => {
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
               video 
               map
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
                setProperties(data.rentalsCollection.items[0]);
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
                        {properties.rentalName}
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
                            <p>
                                Jade Nosara is an inspiring retreat nestled where the jungle meets the
                                Pacific Ocean at Playa Guiones, a place for exploration of what is natural within ourselves,
                                and the transcendent natural beauty of the flora, fauna, and wildlife that surrounds us there.
                                This award-winning property was created by architect Donald Loria Prendas.
                                The main house is a great space for cooking a meal or having
                                a private chef prepare a meal for your group.
                                The terrace ends where the pool begins. Our guests spend time together in this peaceful space.
                                Come enjoy mindful ping pong or Bocce Ball.
                            </p>
                            <p>
                                Jade Nosara is an inspiring retreat nestled where the jungle meets the
                                Pacific Ocean at Playa Guiones, a place for exploration of what is natural within ourselves,
                                and the transcendent natural beauty of the flora, fauna, and wildlife that surrounds us there.
                                This award-winning property was created by architect Donald Loria Prendas.
                                The main house is a great space for cooking a meal or having
                                a private chef prepare a meal for your group.
                                The terrace ends where the pool begins. Our guests spend time together in this peaceful space.
                                Come enjoy mindful ping pong or Bocce Ball.
                            </p>
                            <p>
                                Jade Nosara is an inspiring retreat nestled where the jungle meets the
                                Pacific Ocean at Playa Guiones, a place for exploration of what is natural within ourselves,
                                and the transcendent natural beauty of the flora, fauna, and wildlife that surrounds us there.
                                This award-winning property was created by architect Donald Loria Prendas.
                                The main house is a great space for cooking a meal or having
                                a private chef prepare a meal for your group.
                                The terrace ends where the pool begins. Our guests spend time together in this peaceful space.
                                Come enjoy mindful ping pong or Bocce Ball.
                            </p>

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
                                <label className="form__label" htmlFor="dates">
                                    estimated dates
                                </label>
                                <div className="form-detail__dates">
                                    <input id="dates" className="input__form" placeholder="Start Date" type="date" name="dates" />
                                    <input id="dates" className="input__form" placeholder="End Date" type="date" name="dates" />
                                </div>
                            </div>
                        </div>
                        <div className="form__details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    number of guests
                                </label>
                                <select id="guest" name="guest">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9+</option>
                                </select>
                            </div>
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    budget (per week)
                                </label>
                                <select id="budget" name="budget">
                                    <option>$500-$1000</option>
                                    <option>$1000-$1500</option>
                                    <option>$1500-2000</option>
                                    <option>$2000+</option>
                                </select>
                            </div>
                        </div>
                        <div className="form__details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    select important features
                                </label>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features" />
                                    <label className="form__label-checkbox" type="text">Walk to Surf</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features" />
                                    <label className="form__label-checkbox" type="text">Ocean View</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features" />
                                    <label className="form__label-checkbox" type="text">Pool</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="features" name="features" />
                                    <label className="form__label-checkbox" type="text">Near Restaurants/Bars</label>
                                </div>
                            </div>
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    activities
                                </label>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="activities" name="activities" />
                                    <label className="form__label-checkbox" type="text">Surf Lessons</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="activities" name="activities" />
                                    <label className="form__label-checkbox" type="text">Yoga</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="activities" name="activities" />
                                    <label className="form__label-checkbox" type="text">Fishing</label>
                                </div>
                                <div className="form__checkbox">
                                    <input type="checkbox" id="activities" name="activities" />
                                    <label className="form__label-checkbox" type="text">Horseback Riding</label>
                                </div>
                            </div>
                        </div>
                        <div className="form_details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    Private Security Information
                                </label>
                                <div className="form__detailpage-checkbox">
                                    <div className="form__checkbox">
                                        <input className="checkbox__round" type="checkbox" id="activities" name="activities" />
                                        <label className="form__label-checkbox" type="text">Yes</label>
                                    </div>
                                    <div className="form__checkbox">
                                        <input className="checkbox__round" type="checkbox" id="activities" name="activities" />
                                        <label className="form__label-checkbox" type="text">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form_details">
                            <div className="form__detail">
                                <label className="form__label" htmlFor="numberofguest">
                                    Message
                                </label>
                                <div className="form__detailpage-checkbox">
                                    <div className="form__checkbox">
                                        <textarea className="form__check-comments" placeholder="Questions or Comments" type="text" id="activities" name="activities" />
                                    </div>
                                </div>
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

export default VacationDetailPage;