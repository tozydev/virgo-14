import './Pricing.css';
export function Pricing (){
    const pricingPlans = [
        { name: 'UTH Basic', price: '$30', features: ['đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ'] },
        { name: 'UTH Insider', price: '$40', features: ['đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ'] },
        { name: 'UTH Influencer', price: '$70', features: ['đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ'] },
        { name: 'UTH VIP', price: '$100', features: ['đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ', 'đang suy nghĩ'] },
    ];
    
    return (
        <section className="pricing">
        <h2>Summer Hair UTH Offers</h2>
        <p>We believe great hair should be accessible to everyone, no matter the budget</p>
        <div className="pricing-plans">
            {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-plan ${plan.name === 'UTH Influencer' ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                ))}
                </ul>
                <button>Book {plan.name.split(' ')[1]}</button>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Pricing; 