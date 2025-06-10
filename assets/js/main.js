document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const couponsList = document.getElementById('couponsList');

    // Carregar cupons da API
    async function loadCoupons() {
        try {
            const response = await fetch('/api/coupons.php');
            const data = await response.json();
            displayCoupons(data);
        } catch (error) {
            console.error('Erro ao carregar cupons:', error);
        }
    }

    // Exibir cupons
    function displayCoupons(coupons) {
        couponsList.innerHTML = coupons.map(coupon => `
            <div class="col-md-4 mb-4">
                <div class="coupon-card">
                    <div class="store-name">${coupon.store}</div>
                    <div class="coupon-code" onclick="copyCoupon('${coupon.code}')">
                        ${coupon.code}
                    </div>
                    <div class="coupon-description">
                        ${coupon.description}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Iniciar carregamento
    loadCoupons();
});