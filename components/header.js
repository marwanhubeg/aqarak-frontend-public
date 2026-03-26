const Header = {
    render() {
        return `
            <div class="container">
                <nav class="navbar">
                    <a href="/" class="logo" data-link>
                        <div class="logo-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <span class="logo-text">عقار زين</span>
                    </a>
                    
                    <div class="nav-menu">
                        <a href="/" class="nav-link" data-link>الرئيسية</a>
                        <a href="/properties" class="nav-link" data-link>العقارات</a>
                        <a href="/features" class="nav-link" data-link>المميزات</a>
                        <a href="/pricing" class="nav-link" data-link>الباقات</a>
                        <a href="/blog" class="nav-link" data-link>المدونة</a>
                        <a href="/faq" class="nav-link" data-link>الأسئلة</a>
                        <a href="/contact" class="nav-link" data-link>اتصل بنا</a>
                    </div>
                    
                    <div class="auth-buttons">
                        <a href="/login" class="nav-link" data-link>تسجيل دخول</a>
                        <a href="/register" class="nav-link" data-link>حساب جديد</a>
                    </div>
                </nav>
            </div>
        `;
    },
    
    init() {
        document.getElementById('header').innerHTML = this.render();
    }
};

window.Header = Header;
