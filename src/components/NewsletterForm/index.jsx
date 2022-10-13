import './styles.css'

const Hero = (props) => {
    return (
        <div className="NewsletterForm">
            <div>
                <div className="NewsletterForm__title">
                    {props.title}
                </div>
                <div className="NewsletterForm__subtitle">
                    {props.subtitle}
                </div>
            </div>

            <form action={props.formspreeUrl} method="POST">
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
                    {props.children}
                    <button className="button__form">{props.buttonText}</button>
                </form>
        </div>
    )
}

export default Hero;