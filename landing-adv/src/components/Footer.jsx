function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h3>Neves Advocacia</h3>
                    <p>
                        Excelência jurídica com estratégia e compromisso.
                        Atuação personalizada para empresas e pessoas físicas. 
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Áreas de Atuação</h4>
                    <ul>
                        <li>Direito Civil</li>
                        <li>Direito Trabalhista</li>
                        <li>Direito Empresarial</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contato</h4>
                    <p>Email: contato@nevesadvocacia.com</p>
                    <p>Telefone: (11) 99999-9999</p>
                    <p>São Paulo - SP</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Neves Advocacia. Todos os direitos reservados.</p>
            </div>
        </footer>

    );
}

export default Footer;