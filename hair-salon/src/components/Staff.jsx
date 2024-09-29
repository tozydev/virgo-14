import './Staff.css';
export function Staff (){
    const staffMembers = [
        { name: 'MCK', experience: '10 years experience', image: '/path-to-mara-image.jpg' },
        { name: 'Wrxdie', experience: '8 years experience', image: '/path-to-jess-image.jpg' },
        { name: 'Tlinh', experience: '15 years experience', image: '/path-to-dana-image.jpg' },
    ];
    
    return (
        <section className="staff">
            <h2>Meet With Our Professional Staff</h2>
                <div className="staff-members">
                    {staffMembers.map((member, index) => (
                        <div key={index} className="staff-member">
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.experience}</p>
                    </div>
                    ))}
                </div>
        </section>
    );
}

export default Staff;   