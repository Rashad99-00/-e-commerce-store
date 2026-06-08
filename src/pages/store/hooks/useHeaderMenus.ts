import {useState,} from "react";

export const useHeaderMenus = () => {
  const [
    categoryMenuDismissed,
    setCategoryMenuDismissed,
  ] = useState(false);

  const [
    discountMenuOpen,
    setDiscountMenuOpen,
  ] = useState(false);

  const [
    newProductsOpen,
    setNewProductsOpen,
  ] = useState(false);

  const closeCategoryMenu = () => {
    setCategoryMenuDismissed(true);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const resetCategoryMenu = () => {
    setCategoryMenuDismissed(false);
  };

  const closeDiscountMenu = () => {
    setDiscountMenuOpen(false);
  };

  const closeNewProductsMenu = () => {
    setNewProductsOpen(false);
  };

  const toggleDiscountMenu = () => {
    setDiscountMenuOpen(
      (isOpen) => !isOpen
    );
    setNewProductsOpen(false);
  };

  const toggleNewProductsMenu = () => {
    setNewProductsOpen(
      (isOpen) => !isOpen
    );
    setDiscountMenuOpen(false);
  };

  return {
    categoryMenuDismissed,
    closeCategoryMenu,
    closeDiscountMenu,
    closeNewProductsMenu,
    discountMenuOpen,
    newProductsOpen,
    resetCategoryMenu,
    toggleDiscountMenu,
    toggleNewProductsMenu,
  };
};
