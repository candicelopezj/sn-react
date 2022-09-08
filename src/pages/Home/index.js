import './home.css';
import logo from './surfing__sunset.jpg'
import house from './grid__picture-house.jpeg';
import icon from './bathroom1.svg'
import newsletter from './newsletter__img.jpeg'
const Home = () => {
    return (
        <div>   
        <section class="hero__container">
        <div class="hero__img">
            <img src={logo} alt=""/>
        </div>
        <div class="hero__wrapper">
            <h3 class="hero__title">
                Everything Nosara
                Starts Here
            </h3>
            <div class="hero__subtitle">
                Nosara's real estate, vacation and surf hub.
            </div>
            <div class="hero__button hero__button-text">
                <a href="/">
                    <div class="hero__button">
                        Book your vacation home today
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section class="second__hero-container">
        <div class="second__hero-img">
            <img src={house} alt=""/>h
        </div>
        <div class="second__hero-wrapper">
            <h3 class="second__hero-title">
                This Week's Featured Nosara Real Estate
            </h3>
            <div class="second__hero-subtitle">
                With the most experience, most listings and even aerial drone footage, every Nosara search
                starts here.
            </div>
        </div>
    </section>
    <section class="grid__promotion-container">
        <div id="grid">
            <div class="grid__cards">
                <div class="grid__card">
                    <div class="grid__imgs">
                        <img src={house} alt=""/>
                    </div>
                    <div class="grid__info">
                        <div class="grid__details">
                            <div class="grid__card-details">
                                $659,000
                            </div>
                            <div class="grid__card-details">
                                Playa Guiones
                            </div>
                        </div>
                        <div class="grid__card-title">
                            Elevated Lot in K-Section close to the beach, Bodhi Tree and downtown Guiones
                        </div>
                        <div class="grid__card-icons">
                            <div class="grid__icon-details">
                                <img class="grid__icons" src={icon} alt=""/> Lot
                            </div>
                            <div class="grid__icon-details">
                                <img class="grid__icons" src={icon}  alt=""/> 1100 m
                                <sup>2</sup>
                            </div>
                        </div>
                        <div class="grid__description">
                            This beautiful flat property is located in the community of Highlands at Esperanza bordering
                            a small seasonal creek tucked off the main road and bordered with beautiful large trees.
                        </div>
                    </div>

                </div>
                <div class="grid__card">
                    <div class="grid__imgs">
                        <img src={house} />
                    </div>
                    <div class="grid__info">
                        <div class="grid__info">
                            <div class="grid__details">
                                <div class="grid__card-detils">
                                    $50,000
                                </div>
                                <div class="grid__card-details">
                                    Esperanza
                                </div>
                            </div>
                            <div class="grid__card-title">
                                Highlands at Esperanza Private Jungle Property
                            </div>
                            <div class="grid__card-icons">
                                <div class="grid__icon-details">
                                    <img class="grid__icons" src={icon}  alt=""/> Lot
                                </div>
                                <div class="grid__icon-details">
                                    <img class="grid__icons" src={icon} alt=""/> 900 ft
                                    <sup>2</sup>
                                </div>
                            </div>
                            <div class="grid__description">
                                Amazing opportunity to own a commercial property directly across from Bodhi Tree Yoga
                                Resort and Cascada Restaurant on Route 160. The location would put your business/mixed
                                use project less than 200 meters from the main entrance to Playa Guiones at the Café de
                                Paris intersection.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid__card">
                    <div class="grid__imgs">
                        <img src={house}  alt=""/>
                    </div>
                    <div class="grid__info">
                        <div class="grid__info">
                            <div class="grid__details">
                                <div class="grid__card-details">
                                    $99,000
                                </div>
                            </div>
                            <div class="grid__card-title">
                                EE-83-2, One Commercial Lot Remaining, Route 160
                            </div>
                            <div class="grid__card-icons">
                                <div class="grid__icon-details">
                                    <img class="grid__icons" src={icon}  alt=""/> Lot
                                </div>
                                <div class="grid__icon-details">
                                    <img class="grid__icons" src={icon}  alt=""/> 777 m
                                </div>
                            </div>
                            <div class="grid__description">
                                Incredible white sand beaches with crystal clear water with spectacular snorkeling and
                                much more surround this tropical paradise located in San Juanillo.
                            </div>
                        </div>
                    </div>
                </div>
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
    <section class="third__hero-container">
        <div class="third__hero-img">
            <img src={house}  alt=""/>
        </div>
        <div class="third__hero-wrapper">
            <h3 class="third__hero-title">
                This Week's Featured Nosara Vacation Rentals
            </h3>
            <div class="third__hero-subtitle">
                A Hassle-free vacation. With the most exclusive and newest rental homes in Nosara plus our expert team
                on hand to assist you, we’ve got you covered. Book with us at no extra fee.
            </div>
        </div>
    </section>
    <section class="grid__promotion-rentals--container">
        <div id="grid">
            <div class="grid__promotion-rentals--cards">
                <div class="grid__promotion-rentals--card">
                    <div class="grid__promotion-rentals--imgs">
                        <img src={house}  alt=""/>
                    </div>
                    <div class="grid__promotion-rentals--info">
                        <div class="grid__promotion-rentals--details">
                            <div class="grid__promotion-rentals--card-details">
                                $1,750.00
                            </div>
                        </div>
                        <div class="grid__promotion-rentals--card-title">
                            Casa con Patio 1
                        </div>
                        <div class="grid__promotion-rentals--icons">
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 3
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 2
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 6
                            </div>
                        </div>
                        <div class="grid__description">
                            Casas con Patio is a brand new complex that just finished in December 2021 a modern tropical
                            architectural complex, and it is only a 5 minute walk to Playa Pelada, Nosara, Costa Rica.
                        </div>
                    </div>

                </div>
                <div class="grid__promotion-rentals--card">
                    <div class="grid__promotion-rentals--imgs">
                        <img src={house} alt=""/>
                    </div>
                    <div class="grid__promotion-rentals--info">
                        <div class="grid__promotion-rentals--details">
                            <div class="grid__promotion-rentals--card-details">
                                $2,500.00
                            </div>
                        </div>
                        <div class="grid__promotion-rentals--card-title">
                            Casa Sol y Luna
                        </div>
                        <div class="grid__promotion-rentals--icons">
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon}/> 3
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 2
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 6
                            </div>
                        </div>
                        <div class="grid__description">
                            We are happy to present Casa Sol y Luna in Guiones South. A beautiful 4 bedroom house
                            located right on the beach! It is the perfect home for those who want the experience beach
                            life.
                        </div>
                    </div>

                </div>
                <div class="grid__promotion-rentals--card">
                    <div class="grid__promotion-rentals--imgs">
                        <img src={house} alt=""/>
                    </div>
                    <div class="grid__promotion-rentals--info">
                        <div class="grid__promotion-rentals--details">
                            <div class="grid__promotion-rentals--card-details">
                                $5,000.00
                            </div>
                        </div>
                        <div class="grid__promotion-rentals--card-title">
                            Villa Infinity View
                        </div>
                        <div class="grid__promotion-rentals--icons">
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 3
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 2
                            </div>
                            <div class="grid__detail-icons">
                                <img class="icons" src={icon} /> 6
                            </div>
                        </div>
                        <div class="grid__description">
                            Good to know: COVID tests easily accessible in Nosara. We advise making an appointment in
                            advance and we can provide a document with all FAQs. All stays include a professional
                            disinfectant service performed prior to your arrival.
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid__button grid__button-text">
                <a href="/">
                    <div class="grid__button">
                        see more featured rentals
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section class="newsletter">
        <div class="newsletter__img">
            <img src={newsletter} alt=""/>
        </div>
        <div class="newsletter__info">
            <div class="newsletter__title">
                <h2>
                    Would you like to receive our Newsletter?
                </h2>
            </div>
            <form action="https://formspree.io/f/xpznzyjq" method="POST">
                <div class="form__details">
                    <div class="form__detail">
                        <label class="form__label" for="emailaddress">
                            first name
                            <span class="form__star">*</span>
                        </label>
                        <input id="fname" class="input__form" type="text" name="fname" placeholder="First"/>
                    </div>
                    <div class="form__detail">
                        <label class="form__label" for="phonenumber">
                            last name 
                            <span class="form__star">*</span>
                        </label>
                        <input id="lastname" class="input__form" type="text" name="lastname" placeholder="Last"/>
                    </div>
                </div>
                <div class="form__details">
                    <div class="form__detail">
                        <label class="form__label" for="emailaddress">
                            email
                            <span class="form__star">*</span>
                        </label>
                        <input id="emailaddress" class="input__form" type="text" name="emailaddress"
                            placeholder="Email Address"/>
                    </div>
                    <div class="form__detail">
                        <label class="form__label" for="phonenumber">

                            phone
                        </label>
                        <input id="phonenumber" class="input__form" type="text" name="phonenumber"
                            placeholder="Phone Number"/>
                    </div>
                </div>
                <button class="button__form">Sign Up</button>
            </form>
        </div>
    </section>
    </div>
    )
}

export default Home;