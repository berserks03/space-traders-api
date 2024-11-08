interface FeatureProps {
    icon: string;
    title: string;
    description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
    <div className='feature-item'>
        <span className='feature-icon'>{icon}</span>
        <h3 className='feature-title'>{title}</h3>
        <p className='feature-description'>{description}</p>
    </div>
);

export default Feature;
