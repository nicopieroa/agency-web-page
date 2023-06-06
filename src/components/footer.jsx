export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-logoContainer'>
                <a href='#home'>
                    <img src="/images/logo.png" alt="Web Logo" className='logoImg' />
                </a>
            </div>

            <section className='webLinks'>
                <a href="#¿Quiénes Somos?">¿Quiénes Somos?</a>
                <a href="#¿Qué Ofrecemos?">¿Qué Ofrecemos?</a>
                <a href="#Novedades">Novedades</a>
            </section>

            <section className='contact-socialMedia'>
                <a>
                    <img src="/images/whatsapp.svg" alt="Contacto vía whatsapp" />
                </a>
                <a>
                    <img src="/images/email.svg" alt="Contacto vía email" />
                </a>
            </section>

        </footer>
    )
}