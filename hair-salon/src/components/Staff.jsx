import '../style/Staff.css';
import mck from '../image/mck.jpg';
import wxrdie from '../image/wxrdie.jpg';
import tlinh from '../image/tlinh.jpg';
export function Staff (){
    const staffMembers = [
        { name: 'MCK', experience: '3 years experience', image: mck },
        { name: 'Tlinh', experience: '2 years experience', image: tlinh },
        { name: 'Wxrdie', experience: '9 years experience', image:  wxrdie},
    ];
    
    return (
        <section className="staff">
            <h2>Meet With Our Professional Staff</h2>
                <div className="staff-members">
                    {staffMembers.map((member, index) => (
                         <div key={index} className="staff-member"> {/*key này chỉ là tạm thời, vì key sau này có thể đc get từ be */}
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