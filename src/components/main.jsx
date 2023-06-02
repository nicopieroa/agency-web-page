import { Article } from "./article";

export function Main() {

    return (
        <main className='main'>
            <section className='whoWeAre-container'>
                <h1>¿Quienes Somos?</h1>

                <p>Salud Legal es una organización especializada principalmente en la
                    representación institucional de empresas y organizaciones que se dedican
                    a prestar servicio de asesoramiento en salud y legal.</p>
                <p>Abordamos todos los aspectos institucionales con el objetivo de lograr optimizar
                    la prestación del servicio y alcanzar los stándares más altos de calidad y
                    seguridad en la actividad diaría.</p>
            </section>

            <section className='wahtWeOffer-container'>
                <h1>¿Qué ofrecemos?</h1>

                <p>Ofrecemos un asesoramiento jurídico-lega constante, buscando medios alternativos
                    que lleven a paliar, evitar y minimizar todo tipo de conflictos relacionados.</p>
            </section>

            <section className='articlesSection'>
                <h1>Novedades </h1>

                <div className='articlesContainer'>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </section>
        </main>
    )
}
