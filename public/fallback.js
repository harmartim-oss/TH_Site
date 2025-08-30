<!-- GitHub Pages deployment fallback -->
<script>
// Fallback script for GitHub Pages deployment issues
(function() {
    'use strict';
    
    // Check if React app has loaded
    let reactCheckCount = 0;
    const maxChecks = 10;
    
    function checkReactApp() {
        const rootElement = document.getElementById('root');
        
        if (!rootElement) {
            console.error('Root element not found');
            showFallbackContent();
            return;
        }
        
        // Check if React has rendered content
        if (rootElement.children.length === 0 && reactCheckCount < maxChecks) {
            reactCheckCount++;
            setTimeout(checkReactApp, 500);
        } else if (rootElement.children.length === 0) {
            console.warn('React app failed to load, showing fallback');
            showFallbackContent();
        }
    }
    
    function showFallbackContent() {
        const fallbackHTML = `
            <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff; padding: 2rem;">
                <div style="max-width: 600px; text-align: center;">
                    <img src="/assets/th_logo-5o64kHzm.png" alt="Tim Harmar Legal Logo" style="width: 120px; height: 120px; margin: 0 auto 2rem; border-radius: 50%; object-fit: cover;" onerror="this.style.display='none'">
                    
                    <h1 style="color: #0a2351; font-size: 2.5rem; margin-bottom: 1rem; font-weight: 700;">Tim Harmar: Legal and Consulting Services</h1>
                    
                    <p style="color: #17907f; font-size: 1.125rem; margin-bottom: 2rem; font-weight: 600;">Excellence in Legal Solutions</p>
                    
                    <p style="color: #4b5563; font-size: 1.125rem; margin-bottom: 2rem; line-height: 1.6;">
                        Award-winning legal expertise specialized in civil litigation, privacy and cybersecurity law, intellectual property, and business strategy consulting in Sault Ste. Marie, Ontario.
                    </p>
                    
                    <div style="background: #f0fdfa; border: 1px solid #14b8a6; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">
                        <h3 style="color: #0f766e; margin-bottom: 1rem; font-size: 1.25rem;">Our Legal Services Include:</h3>
                        <ul style="color: #0f766e; text-align: left; display: inline-block; line-height: 1.8;">
                            <li>• Civil Litigation</li>
                            <li>• Privacy & Cybersecurity Law</li>
                            <li>• Intellectual Property</li>
                            <li>• Business Start Up & Strategy</li>
                        </ul>
                    </div>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                        <a href="tel:+17059435049" style="background: #17907f; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
                            📞 +1 (705) 943-5049
                        </a>
                        <a href="mailto:kburton@timharmar.com?subject=Legal Consultation Inquiry" style="background: #0a2351; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
                            ✉️ kburton@timharmar.com
                        </a>
                    </div>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 1rem;">
                        <strong>Professional Standards:</strong> 15+ years experience • Supreme Court of Canada approved • Award-winning legal expertise
                    </p>
                    
                    <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <button onclick="location.reload()" style="background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.875rem;">
                            Reload Page
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.innerHTML = fallbackHTML;
    }
    
    // Start checking after page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(checkReactApp, 1000);
        });
    } else {
        setTimeout(checkReactApp, 1000);
    }
})();
</script>