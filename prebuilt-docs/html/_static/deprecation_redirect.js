// Deprecation redirect for mogi-docs
(function() {
    'use strict';
    
    // Show deprecation banner
    function showDeprecationBanner() {
        var banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #ff6b6b;
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        `;
        
        banner.innerHTML = `
            ⚠️ This documentation is DEPRECATED. 
            <a href="https://dmadb.readthedocs.io/en/latest/getting-started.html" style="color: #fff; text-decoration: underline;">
                Click here for the new documentation
            </a>
            <span id="redirect-countdown" style="margin-left: 20px;">Redirecting in 10 seconds...</span>
            <button onclick="this.parentElement.style.display='none'" style="margin-left: 20px; background: rgba(255,255,255,0.3); border: none; color: white; padding: 5px 10px; cursor: pointer;">Dismiss</button>
        `;
        
        document.body.insertBefore(banner, document.body.firstChild);
        document.body.style.paddingTop = banner.offsetHeight + 'px';
        
        return banner;
    }
    
    // Countdown and redirect
    function startRedirectCountdown() {
        var countdown = 10;
        var countdownElement = document.getElementById('redirect-countdown');
        
        var interval = setInterval(function() {
            countdown--;
            if (countdownElement) {
                countdownElement.textContent = 'Redirecting in ' + countdown + ' seconds...';
            }
            
            if (countdown <= 0) {
                clearInterval(interval);
                window.location.href = 'https://dmadb.readthedocs.io/en/latest/getting-started.html';
            }
        }, 1000);
        
        // Allow users to cancel the redirect by interacting with the page
        document.addEventListener('click', function() {
            clearInterval(interval);
            if (countdownElement) {
                countdownElement.textContent = 'Auto-redirect cancelled.';
            }
        }, { once: true });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            showDeprecationBanner();
            startRedirectCountdown();
        });
    } else {
        showDeprecationBanner();
        startRedirectCountdown();
    }
})();
