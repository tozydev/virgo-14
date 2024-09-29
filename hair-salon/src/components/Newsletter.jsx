import './Newsletter.css';
export function Newsletter () {
    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <h2>Subscribe to the UTH Newsletter</h2>
                <p>Join our newsletter and get the insider scoop on events, products, and special offers</p>
                <form>
                    <input type="email" placeholder="Email address" required />
                    <button type="submit">Subscribe</button>
                </form>
                <div className="social-icons">
                    <a href="#" className="social-icon">Instagram</a>
                    <a href="#" className="social-icon">Twitter</a>
                    <a href="#" className="social-icon">Facebook</a>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;  