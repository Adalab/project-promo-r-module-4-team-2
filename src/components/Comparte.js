import '../styles/components/Comparte.scss';
const Comparte = (props) => {

    const renderLink = (event) => {
        event.preventDefault();
        props.handleClickCreate()

    }
    const renderShare = () => {
        if (props.shareIsOpen === true) {
            return (
                <section className="buttonComparte js-share">
                    <button className="linkComparte js-linkCreated" onClick={renderLink}>
                        <i className="fa-regular fa-address-card"></i>Crear Tarjeta
                    </button>
                    <article className={props.hiddenShare ? 'cardCreated hidden' : 'cardCreated'}>
                        <div className={props.fetchResponse !== ('') ? "cardCreated__div" : "cardCreated__div hidden"}>
                            <a
                                className="cardCreated_link js-shareUrl"
                                href={props.fetchResponse}
                                target="_blank" rel='noreferrer'
                            >{props.fetchResponse}</a>
                            <a className="cardCreated_button js-twitter" target="_blank" rel='noreferrer' href={`https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20${props.fetchResponse}`}>
                                <i className="fa-brands fa-twitter" ></i>Compartir en
                                twitter
                            </a>
                        </div>
                        <h3 className={props.fetchResponse === ('') ? "cardCreated_text" : "cardCreated_text hidden"}>Faltan datos por rellenar, no seas vago.</h3>
                    </article>
                </section >
            );
        }
    };
    return (
        <fieldset className="share">
            <section
                className="buttonShare js-shareClick"
                onClick={props.handleToggleShare}
            >
                <p className="buttonShare__title">
                    <i className="fa-solid fa-share-nodes"></i> Comparte
                </p>
                <img
                    src={props.src}
                    className={`buttonShare__arrow js-arrow-share ${props.arrowRotateShare}`}
                    alt=""
                />
            </section>
            {renderShare()}
        </fieldset>
    )
};
export default Comparte;