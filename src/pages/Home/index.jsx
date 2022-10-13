import './home.css';
import NewsletterForm from '../../components/NewsletterForm';
import house from "../../images/grid__picture-house.jpeg";
import icon from '../../images/bathroom1.svg'
import Hero from '../.././components/Hero'
import Layout from '../Layout';
import newsletter from '../../images/newsletter__img.jpeg'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const query = `{
    heroCollection(where: {target_contains: "Homepage"}, order: target_ASC) {
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
  }
`;

const Home = (props) => {
    const [heroItems, setHeroItems] = useState([]);

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
        });
    }, []);
    return (
    <Layout >
        <Helmet>
            <title>Nosara Costa Rica</title>
        </Helmet>
        <div>   
        <Hero data={heroItems[0] || {}}/>
        <Hero data={heroItems[1] || {}}/> 
        
        <section className="grid__promotion-container">
            <div id="grid">
                <div className="grid__cards">
                    <div className="grid__card">
                        <div className="grid__imgs">
                            <img src={process.env.PUBLIC_URL + '/grid__picture-house.jpeg'} alt=""/>
                        </div>
                        <div className="grid__info">
                            <div className="grid__details">
                                <div className="grid__card-details">
                                    $659,000
                                </div>
                                <div className="grid__card-details">
                                    Playa Guiones
                                </div>
                            </div>
                            <div className="grid__card-title">
                                Elevated Lot in K-Section close to the beach, Bodhi Tree and downtown Guiones
                            </div>
                            <div className="grid__card-icons">
                                <div className="grid__icon-details">
                                    <img className="grid__icons" src={icon} alt=""/> Lot
                                </div>
                                <div className="grid__icon-details">
                                    <img className="grid__icons" src={icon}  alt=""/> 1100 m
                                    <sup>2</sup>
                                </div>
                            </div>
                            <div className="grid__description">
                                This beautiful flat property is located in the community of Highlands at Esperanza bordering
                                a small seasonal creek tucked off the main road and bordered with beautiful large trees.
                            </div>
                        </div>
    
                    </div>
                    <div className="grid__card">
                        <div className="grid__imgs">
                            <img src={house} alt=""/>
                        </div>
                        <div className="grid__info">
                            <div className="grid__info">
                                <div className="grid__details">
                                    <div className="grid__card-detils">
                                        $50,000
                                    </div>
                                    <div className="grid__card-details">
                                        Esperanza
                                    </div>
                                </div>
                                <div className="grid__card-title">
                                    Highlands at Esperanza Private Jungle Property
                                </div>
                                <div className="grid__card-icons">
                                    <div className="grid__icon-details">
                                        <img className="grid__icons" src={icon}  alt=""/> Lot
                                    </div>
                                    <div className="grid__icon-details">
                                        <img className="grid__icons" src={icon} alt=""/> 900 ft
                                        <sup>2</sup>
                                    </div>
                                </div>
                                <div className="grid__description">
                                    Amazing opportunity to own a commercial property directly across from Bodhi Tree Yoga
                                    Resort and Cascada Restaurant on Route 160. The location would put your business/mixed
                                    use project less than 200 meters from the main entrance to Playa Guiones at the Café de
                                    Paris intersection.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__card">
                        <div className="grid__imgs">
                            <img src={house}  alt=""/>
                        </div>
                        <div className="grid__info">
                            <div className="grid__info">
                                <div className="grid__details">
                                    <div className="grid__card-details">
                                        $99,000
                                    </div>
                                </div>
                                <div className="grid__card-title">
                                    EE-83-2, One Commercial Lot Remaining, Route 160
                                </div>
                                <div className="grid__card-icons">
                                    <div className="grid__icon-details">
                                        <img className="grid__icons" src={icon}  alt=""/> Lot
                                    </div>
                                    <div className="grid__icon-details">
                                        <img className="grid__icons" src={icon}  alt=""/> 777 m
                                    </div>
                                </div>
                                <div className="grid__description">
                                    Incredible white sand beaches with crystal clear water with spectacular snorkeling and
                                    much more surround this tropical paradise located in San Juanillo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid__button grid__button-text">
                    <a href="/">
                        <div className="grid__button">
                            see more featured real estate
                        </div>
                    </a>
                </div>
            </div>
        </section>
         <Hero data={heroItems[2] || {}}/>
        <section className="grid__promotion-rentals--container">
            <div id="grid">
                <div className="grid__promotion-rentals--cards">
                    <div className="grid__promotion-rentals--card">
                        <div className="grid__promotion-rentals--imgs">
                            <img src={house}  alt=""/>
                        </div>
                        <div className="grid__promotion-rentals--info">
                            <div className="grid__promotion-rentals--details">
                                <div className="grid__promotion-rentals--card-details">
                                    $1,750.00
                                </div>
                            </div>
                            <div className="grid__promotion-rentals--card-title">
                                Casa con Patio 1
                            </div>
                            <div className="grid__promotion-rentals--icons">
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 3
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon}alt=""/> 2
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 6
                                </div>
                            </div>
                            <div className="grid__description">
                                Casas con Patio is a brand new complex that just finished in December 2021 a modern tropical
                                architectural complex, and it is only a 5 minute walk to Playa Pelada, Nosara, Costa Rica.
                            </div>
                        </div>
    
                    </div>
                    <div className="grid__promotion-rentals--card">
                        <div className="grid__promotion-rentals--imgs">
                            <img src={house} alt=""/>
                        </div>
                        <div className="grid__promotion-rentals--info">
                            <div className="grid__promotion-rentals--details">
                                <div className="grid__promotion-rentals--card-details">
                                    $2,500.00
                                </div>
                            </div>
                            <div className="grid__promotion-rentals--card-title">
                                Casa Sol y Luna
                            </div>
                            <div className="grid__promotion-rentals--icons">
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 3
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 2
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 6
                                </div>
                            </div>
                            <div className="grid__description">
                                We are happy to present Casa Sol y Luna in Guiones South. A beautiful 4 bedroom house
                                located right on the beach! It is the perfect home for those who want the experience beach
                                life.
                            </div>
                        </div>
    
                    </div>
                    <div className="grid__promotion-rentals--card">
                        <div className="grid__promotion-rentals--imgs">
                            <img src={house} alt=""/>
                        </div>
                        <div className="grid__promotion-rentals--info">
                            <div className="grid__promotion-rentals--details">
                                <div className="grid__promotion-rentals--card-details">
                                    $5,000.00
                                </div>
                            </div>
                            <div className="grid__promotion-rentals--card-title">
                                Villa Infinity View
                            </div>
                            <div className="grid__promotion-rentals--icons">
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 3
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 2
                                </div>
                                <div className="grid__detail-icons">
                                    <img className="icons" src={icon} alt=""/> 6
                                </div>
                            </div>
                            <div className="grid__description">
                                Good to know: COVID tests easily accessible in Nosara. We advise making an appointment in
                                advance and we can provide a document with all FAQs. All stays include a professional
                                disinfectant service performed prior to your arrival.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid__button grid__button-text">
                    <a href="/">
                        <div className="grid__button">
                            see more featured rentals
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section className="hero__container">      
            <div className="hero__img">
                <img src={newsletter} alt=""/>
            </div>
             <NewsletterForm
                        title="Enquire About This Property Now"
                        subtitle="We will get back to you fast, our usual response time is in the same hour! If there is any other property, or specific criteria you're interested in, include that below and we will be glad to help."
                        formspreeUrl="https://formspree.io/f/xpznzyjq"
                        buttonText="Sign Up for latest listings!"
                    >
             </NewsletterForm>
        </section>
        </div>
    </Layout>
    )
}

export default Home;