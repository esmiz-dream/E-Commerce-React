import React, { Component } from "react";
import { storeProducts } from "./data";
import { detailProduct } from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    modalOpen: false,
    modalProduct: detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    console.log(id, "add to cart is clicked");
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.increment(id);
    //this.state.cart=tempProducts[index];
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(id, this.state);
      }
    );
  };

  addItem = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count += 1;
    this.increment(id);
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    if (product.count > 1) {
      product.count -= 1;
    } else if (product.count === 1) {
      this.removeProduct(id);
    }
    this.decrement(id);

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  clearCart = () => {
    console.log("cart cleard");
    this.setState(() => {
      return {
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };
    }, this.setProducts());
  };

  removeProduct = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    // removedProduct.count = 0;
    removedProduct.inCart = false;
    // removedProduct.total = 0;
    const tempSubTotal =
      this.state.cartSubTotal - removedProduct.total * removedProduct.count;
    const tempTax = tempSubTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = tempSubTotal + tax;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
        cartSubTotal: tempSubTotal,
        cartTax: tempTax,
        cartTotal: total,
      };
    }, console.log("tempsubtotal", removedProduct.total));
  };

  openModal = (id) => {
    //console.log('modal opend');
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProdact: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    const product = this.getItem(id);
    const tempSubTotal = this.state.cartSubTotal + product.total;
    const tempTax = tempSubTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = tempSubTotal + tax;
    const tempProducts = this.state.products;

    this.setState(() => {
      return {
        cartSubTotal: tempSubTotal,
        cartTax: tax,
        cartTotal: total,
        products: tempProducts,
      };
    });
  };
  decrement = (id) => {
    const product = this.getItem(id);
    const tempSubTotal = this.state.cartSubTotal - product.total;
    const tempTax = tempSubTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = tempSubTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: tempSubTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addItem: this.addItem,
          removeItem: this.removeItem,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          history:this.props.history,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
