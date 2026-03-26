const HomePage = {
    async render() {
        const main = document.getElementById('main-content');
        
        main.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
            </div>
        `;
        
        try {
            // جلب البيانات من API
            const stats = await API.getStats();
            const featured = await API.getFeatured();
            
            main.innerHTML = `
                <!-- Hero Section -->
                <section class="hero">
                    <div class="container">
                        <h1 class="hero-title">ابحث عن <span>عقار أحلامك</span> بذكاء</h1>
                        <p class="hero-subtitle">منصة عقارية ذكية تستخدم الذكاء الاصطناعي</p>
                        
                        <!-- Search Bar -->
                        <div class="search-container">
                            <form onsubmit="HomePage.search(event)">
                                <input type="text" 
                                       id="searchInput"
                                       placeholder="ابحث عن عقار..."
                                       class="search-input">
                                <button type="submit" class="search-btn">
                                    <i class="fas fa-search"></i>
                                    بحث
                                </button>
                            </form>
                        </div>
                        
                        <!-- Stats -->
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-number">${stats.data.properties_count}+</div>
                                <div class="stat-label">عقار</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">${stats.data.brokers_count}+</div>
                                <div class="stat-label">وسيط</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">${stats.data.deals_count}+</div>
                                <div class="stat-label">صفقة</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">${stats.data.cities_count}+</div>
                                <div class="stat-label">مدينة</div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Featured Properties -->
                <section class="featured-section">
                    <div class="container">
                        <h2 class="section-title">عقارات <span>مميزة</span></h2>
                        <div class="properties-grid" id="featuredGrid">
                            ${PropertyCard.renderGrid(featured.data)}
                        </div>
                    </div>
                </section>
            `;
        } catch (error) {
            main.innerHTML = `
                <div style="text-align: center; padding: 100px 20px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #ef4444;"></i>
                    <p style="margin-top: 20px;">حدث خطأ في تحميل البيانات</p>
                </div>
            `;
        }
    },
    
    search(event) {
        event.preventDefault();
        const query = document.getElementById('searchInput').value;
        if (query.trim()) {
            Router.navigate(`/properties?q=${encodeURIComponent(query)}`);
        }
    }
};

window.HomePage = HomePage;
