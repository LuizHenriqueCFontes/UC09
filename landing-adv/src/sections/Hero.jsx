import Button from "../components/Button";

function Hero(){
    return(
        <section className="hero">
            <div className="container hero-content">
                <h2>Defesa jurídica estratégica com ética e excelência</h2>

                <p>
                    Defesa jurídica estratégica com ética e excelência
                </p>

                <Button text={"Agendar Consulta"} />
            </div>
        </section>

    );
}

export default Hero;