const PropertiesPage = {
    async render() {
        const main = document.getElementById('main-content');
        const params = new URLSearchParams(window.location.search);
        
        const filters = {
            q: params.get('q') || '',
            page: params.get('page') || 1
        };
        
        main.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
            </div>
        `;
        
        try {
            const response = await API.searchProperties(filters);
            
            main.innerHTML = `
                <div class="container">
                    <h1 class="section-title">جميع <span>العقارات</span></h1>
                    <div class="properties-grid">
                        ${PropertyCard.renderGrid(response.data.data)}
                    </div>
                </div>
            `;
        } catch (error) {
            main.innerHTML = `
                <div style="text-align: center; padding: 100px 20px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #ef4444;"></i>
                    <p style="margin-top: 20px;">حدث خطأ في تحميل العقارات</p>
                </div>
            `;
        }
    }
};

window.PropertiesPage = PropertiesPage;
