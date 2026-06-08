import {Link,} from "react-router-dom";

const shopLinks = [
  {
    label: "Ana səhifə",
    to: "/",
  },
  {
    label: "Məhsullar",
    to: "/products",
  },
];

const supportLinks = [
  "Çatdırılma şərtləri",
  "Zəmanət və servis",
  "Ödəniş üsulları",
  "Qaytarılma qaydası",
];

function StoreFooter() {
  return (
    <footer className="market-footer">
      <div className="market-footer-inner">
        <div className="market-footer-brand">
          <Link
            className="market-brand"
            to="/"
          >
            VOLT<span>MART</span>
          </Link>
          <p>
            Smartfon, aksesuar və ev elektronikası üçün
            rahat, etibarlı və sürətli alış-veriş məkanı.
          </p>
        </div>

        <nav className="market-footer-column">
          <h3>Mağaza</h3>
          {shopLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="market-footer-column">
          <h3>Dəstək</h3>
          {supportLinks.map((link) => (
            <span key={link}>
              {link}
            </span>
          ))}
        </div>

        <div className="market-footer-column market-footer-contact">
          <h3>Əlaqə</h3>
          <a href="mailto:info@voltmart.az">
            info@voltmart.az
          </a>
          <p>
            Bakı şəhəri, Nizami küçəsi 24
          </p>
          <span>
            Hər gün: 09:00 - 21:00
          </span>
        </div>
      </div>

      <div className="market-footer-bottom">
        <small>© 2026 VoltMart. Bütün hüquqlar qorunur.</small>
        <div className="market-footer-payments">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Nağd</span>
        </div>
      </div>
    </footer>
  );
}

export default StoreFooter;
