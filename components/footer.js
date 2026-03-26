const Footer = {
    render() {
        return `
            <div class="container">
                <div class="footer-grid">
                    <div>
                        <h3 class="footer-title">عقار زين</h3>
                        <p style="color: #94a3b8; line-height: 1.6;">
                            أول منصة عقارية ذكية في مصر تستخدم الذكاء الاصطناعي
                        </p>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">روابط سريعة</h3>
                        <ul class="footer-links">
                            <li><a href="/" data-link>الرئيسية</a></li>
                            <li><a href="/properties" data-link>العقارات</a></li>
                            <li><a href="/features" data-link>المميزات</a></li>
                            <li><a href="/pricing" data-link>الباقات</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">خدماتنا</h3>
                        <ul class="footer-links">
                            <li><a href="#">بيع وشراء</a></li>
                            <li><a href="#">تأجير</a></li>
                            <li><a href="#">استشارات</a></li>
                            <li><a href="#">تمويل</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">تواصل معنا</h3>
                        <ul class="footer-links">
                            <li><i class="fas fa-phone"></i> +20 127 783 1988</li>
                            <li><i class="fas fa-envelope"></i> info@zain.com</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>© 2026 عقار زين - جميع الحقوق محفوظة</p>
                </div>
            </div>
        `;
    },
    
    init() {
        document.getElementById('footer').innerHTML = this.render();
    }
};

window.Footer = Footer;
