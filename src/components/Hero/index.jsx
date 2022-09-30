import './hero.css'

const Hero = (props) => {
    return (
        <section className="hero__container">
            <div className="hero__img">
                {props.data?.image?.url && (
                    <img src={props.data.image?.url} alt="" />
                )}
            </div>
            <div className="hero__wrapper">
                <h3 className="hero__title">
                    {props.data?.title}
                </h3>
                <div className="hero__subtitle">
                    {props.data?.subtitle}
                </div>
                {props.data?.linkUrl && (
                    <div className="hero__button hero__button-text">
                        <a href={props.data?.linkUrl}>
                            <div className="hero__button">
                                {props.data?.linkLabel}
                            </div>
                        </a>
                    </div>
                )}


            </div>
        </section>

    )
}

export default Hero;