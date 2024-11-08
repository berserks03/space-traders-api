import Feature from '../components/Feature';

export default function HomePage() {
    return (
        <div>
            <div title='A high-resolution, dark cosmic space background with stars, distant galaxies, and subtle nebula clouds' className='hero'>
                <h1 className='hero-title'>Ienirsti kosmosa tirdzniecības pasaulē</h1>
                <p className='hero-subtitle'>
                    Automatizē savu floti, izpēti kosmosu un apgūsti tirgošanās mākslu ar
                    SpaceTraders.io API.
                </p>
                <button className='hero-button'>Sākt spēlēt</button>
            </div>
            <section className='features'>
                <h2>Kas ir SpaceTraders?</h2>
                <div className='features-content'>
                    <Feature
                        icon='🪐'
                        title='Atklāj visumu'
                        description='Izpēti neskaitāmas planētas un zvaigžņu sistēmas.'
                    />
                    <Feature
                        icon='🚀'
                        title='Izveido floti'
                        description='Pārvaldi un attīsti savu kuģu floti.'
                    />
                    <Feature
                        icon='📈'
                        title='Tirgojies un pelni'
                        description='Pērc un pārdod resursus, lai kļūtu par galaktikas tirdzniecības magnātu.'
                    />
                </div>
            </section>
        </div>
    );
}
