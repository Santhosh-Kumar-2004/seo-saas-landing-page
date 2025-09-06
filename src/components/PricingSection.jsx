import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "../styles/PricingSection.css";

export default function PricingSection() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <p className="pricing-subtitle">
        Choose the plan that best fits your business goals and scale with us.
      </p>

      <div className="pricing-cards">
        {/* Starter Plan */}
        <div className="pricing-card">
          <div className="plan-label">Starter</div>
          <p className="plan-desc">Perfect for freelancers and beginners</p>
          <h3 className="plan-price">$19<span>/mo</span></h3>
          <ul className="plan-features">
            <li><FaCheck className="tick"/> Basic analytics</li>
            <li><FaCheck className="tick"/> 5 projects</li>
            <li><FaCheck className="tick"/> Email support</li>
            <li><FaCheck className="tick"/> Community access</li>
            <li><FaCheck className="tick"/> Limited integrations</li>
          </ul>
          <button className="show-more">
            Show More <FaChevronDown />
          </button>
          <button className="plan-btn">Get Started</button>
        </div>

        {/* Growth Plan */}
        <div className="pricing-card">
          <div className="plan-label">Growth</div>
          <p className="plan-desc">Ideal for small to medium businesses</p>
          <h3 className="plan-price">$49<span>/mo</span></h3>
          <ul className="plan-features">
            <li><FaCheck className="tick"/> Advanced analytics</li>
            <li><FaCheck className="tick"/> Unlimited projects</li>
            <li><FaCheck className="tick"/> Priority support</li>
            <li><FaCheck className="tick"/> Team collaboration</li>
            <li><FaCheck className="tick"/> API access</li>
          </ul>
          <button className="show-more">
            Show More <FaChevronDown />
          </button>
          <button className="plan-btn">Upgrade Now</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <div className="plan-label">Premium</div>
          <p className="plan-desc">Best for enterprises and scaling companies</p>
          <h3 className="plan-price">$99<span>/mo</span></h3>
          <ul className="plan-features">
            <li><FaCheck className="tick"/> Full suite analytics</li>
            <li><FaCheck className="tick"/> Dedicated support</li>
            <li><FaCheck className="tick"/> Custom integrations</li>
            <li><FaCheck className="tick"/> Advanced security</li>
            <li><FaCheck className="tick"/> Unlimited users</li>
          </ul>
          <button className="show-more">
            Show More <FaChevronDown />
          </button>
          <button className="plan-btn">Go Premium</button>
        </div>
      </div>

      {/* Optional tagline */}
      <p className="pricing-note">
        No hidden fees. Cancel anytime. Flexible plans that grow with you.
      </p>
    </section>
  );
}
