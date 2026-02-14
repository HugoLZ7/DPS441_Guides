import React, { useState } from "react";
import { headerStyles } from "../styles/header.styles";
import { cartStyles } from "../styles/cart.styles";
import { CircleX, ShoppingCart, ShoppingBag } from "lucide-react";

export const Header = ({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
}) => {
    const [active, setActive] = useState(false);
  return (
    <header className={headerStyles.header} data-purpose="main-header">
      <h1 className={headerStyles.title}>Tienda de Libros</h1>

      <div
        className={headerStyles.cartTrigger}
        data-purpose="cart-icon-container"
        id="cart-trigger"
      >
        <ShoppingCart className={headerStyles.cartIcon} />
        <span className={headerStyles.badge} id="cart-count">
          2
        </span>
      </div>

      <div
        className={cartStyles.dropdown}
        data-purpose="cart-dropdown"
        id="cart-modal"
      >
        <div id="cart-items-container">
          <div className={cartStyles.section} id="cart-filled-state">
            <div className={cartStyles.sectionTitle}>
              <p className={cartStyles.sectionTitle}>Tu Carrito</p>
              <div className="space-y-4" id="cart-items-list">
                
                <div className={cartStyles.itemRow}>
                  <div className={cartStyles.itemContainer}>
                    <span className={cartStyles.itemTitle}>
                      El Señor de los Anillos
                    </span>
                    <span className={cartStyles.itemPrice}>$100</span>
                  </div>
                  <button
                    className={cartStyles.removeBtn}
                    data-purpose="remove-item"
                  >
                    <CircleX className="w-5 h-5" />
                  </button>
                </div>

                <div className={cartStyles.itemRow}>
                  <div className={cartStyles.itemContainer}>
                    <span className={cartStyles.itemTitle}>
                      Cien años de soledad
                    </span>
                    <span className={cartStyles.itemPrice}>$190</span>
                  </div>
                  <button
                    className={cartStyles.removeBtn}
                    data-purpose="remove-item"
                  >
                    <CircleX className="w-5 h-5" />
                  </button>
                </div>

                <div className={cartStyles.totalRow}>
                  <span className={cartStyles.totalLabel}>Total:</span>
                  <span className={cartStyles.totalValue}>$290</span>
                </div>

                <div className={cartStyles.actions}>
                  <button className={cartStyles.clearBtn} id="clear-cart">
                    Vaciar carrito
                  </button>
                  <button className={cartStyles.payBtn}>
                    Pagar
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className={cartStyles.emptyState} id="cart-empty-state">
            <ShoppingBag className={cartStyles.emptyIcon} />
            <p className={cartStyles.emptyText}>
              ¡Tu carrito está vacío!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

