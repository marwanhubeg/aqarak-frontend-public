const PropertyCard = {
    render(property) {
        return `
            <div class="property-card">
                <div class="card-image">
                    <img src="${property.main_image || 'https://via.placeholder.com/300x200'}" 
                         alt="${property.title}">
                    ${property.is_featured ? '<span class="featured-badge"><i class="fas fa-crown"></i> مميز</span>' : ''}
                </div>
                
                <div class="card-content">
                    <h3 class="card-title">${property.title}</h3>
                    <p class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${property.address || property.city}
                    </p>
                    
                    <div class="card-details">
                        <span><i class="fas fa-bed"></i> ${property.bedrooms || 0}</span>
                        <span><i class="fas fa-bath"></i> ${property.bathrooms || 0}</span>
                        <span><i class="fas fa-vector-square"></i> ${property.area || 0} م²</span>
                    </div>
                    
                    <div class="card-footer">
                        <span class="card-price">${property.price_formatted || property.price + ' جنيه'}</span>
                        <a href="/property/${property.id}" class="btn-card" data-link>
                            تفاصيل <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderGrid(properties) {
        if (!properties || properties.length === 0) {
            return '<p style="text-align: center; color: #666;">لا توجد عقارات</p>';
        }
        return properties.map(p => this.render(p)).join('');
    }
};

window.PropertyCard = PropertyCard;
