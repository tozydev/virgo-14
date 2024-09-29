import '../style/Services.css';
import React, { useState } from 'react';
export function Services({ servicesList }) {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredServices = servicesList.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="services">
            <h2>Các dịch vụ tóc của chúng tôi</h2>
            <div className="search-bar">
            <input
                type="text"
                placeholder="Tìm kiếm dịch vụ"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            </div>
            {searchTerm && (
            <div className="services-list">
                {filteredServices.map(service => (
                <div key={service.id} className="service-item">
                    <h3>{service.name}</h3>
                    <p className="price">{service.price}</p>
                    <p>{service.description}</p>
                </div>
                ))}
            </div>
            )}
            {searchTerm && filteredServices.length === 0 && (
            <p className="no-results">Không tìm thấy dịch vụ</p>
            )}
            {!searchTerm && (
            <p className="search-prompt">Nhập vào tên dịch vụ tóc bạn tìm kiếm</p>
            )}
        </section>
    );
}

export default Services;