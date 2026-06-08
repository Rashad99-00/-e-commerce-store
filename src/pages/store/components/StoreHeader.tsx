import {Link, NavLink,} from "react-router-dom";
import { STORE_NAV_LINKS,} from "../constants/store.constants";
import { useHeaderMenus,} from "../hooks/useHeaderMenus";
import {useStoreHeaderData,} from "../hooks/useStoreHeaderData";
import HeaderCategoryMenu from "./HeaderCategoryMenu";
import HeaderDiscountMenu from "./HeaderDiscountMenu";
import HeaderNewProductsMenu from "./HeaderNewProductsMenu";

function StoreHeader() {
  const {
    categories,
    discountCategories,
    latestProducts,
  } = useStoreHeaderData();

  const {
    categoryMenuDismissed,
    closeCategoryMenu,
    closeDiscountMenu,
    closeNewProductsMenu,
    discountMenuOpen,
    newProductsOpen,
    resetCategoryMenu,
    toggleDiscountMenu,
    toggleNewProductsMenu,
  } = useHeaderMenus();

  return (
    <header className="market-header">
      <div className="market-header-top">
        <Link
          className="market-brand"
          to="/"
        >
          VOLT<span>MART</span>
        </Link>
      </div>

      <nav className="market-nav">
        <HeaderCategoryMenu
          categories={categories}
          dismissed={categoryMenuDismissed}
          onClose={closeCategoryMenu}
          onReset={resetCategoryMenu}
        />

        {STORE_NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            end={link.end}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}

        <HeaderDiscountMenu
          categories={discountCategories}
          isOpen={discountMenuOpen}
          onClose={closeDiscountMenu}
          onToggle={toggleDiscountMenu}
        />

        <HeaderNewProductsMenu
          products={latestProducts}
          isOpen={newProductsOpen}
          onClose={closeNewProductsMenu}
          onToggle={toggleNewProductsMenu}
        />
      </nav>
    </header>
  );
}

export default StoreHeader;
