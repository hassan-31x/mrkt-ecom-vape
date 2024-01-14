import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
// import SlideToggle from 'react-slide-toggle';

import Qty from "@/components/features/qty";

import { canAddToCart, isInWishlist } from "@/utils";
import Link from "next/link";

function DetailOne(props) {
  const router = useRouter();
  const ref = useRef(null);
  const { product } = props;
  const [qty, setQty] = useState(1);
  const [qty2, setQty2] = useState(1);
  const [colorArray, setColorArray] = useState([]);
  const [sizeArray, setSizeArray] = useState([]);
  const [variationGroup, setVariationGroup] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState({
    color: null,
    colorName: null,
    price: null,
    size: "",
  });
  const [showClear, setShowClear] = useState(false);
  const [showVariationPrice, setShowVariationPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(99999);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    let min = 99999;
    let max = 0;

    setVariationGroup(
      product.variants.reduce((acc, cur) => {
        cur.size.map((item) => {
          acc.push({
            color: cur.color,
            colorName: cur.color_name,
            size: item.name,
            price: cur.price,
          });
        });
        if (min > cur.price) min = cur.price;
        if (max < cur.price) max = cur.price;
        return acc;
      }, [])
    );

    if (product.variants?.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, [product]);

  useEffect(() => {
    setSelectedVariant({ color: null, colorName: null, price: null, size: "" });
    setQty(1);
    setQty2(1);
  }, [router?.query.slug]);

  useEffect(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);

  useEffect(() => {
    scrollHandler();
  }, [router?.pathname]);

  useEffect(() => {
    setShowClear(
      selectedVariant.color || selectedVariant.size != "" ? true : false
    );
    setShowVariationPrice(
      selectedVariant.color && selectedVariant.size != "" ? true : false
    );
    let toggle = ref.current.querySelector(".variation-toggle");

    if (toggle) {
      if (
        selectedVariant.color &&
        selectedVariant.size != "" &&
        toggle.classList.contains("collapsed")
      ) {
        toggle.click();
      }

      if (
        !(selectedVariant.color && selectedVariant.size != "") &&
        !toggle.classList.contains("collapsed")
      ) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function scrollHandler() {
    if (router?.pathname.includes("/product/default")) {
      let stickyBar = ref.current.querySelector(".sticky-bar");
      if (
        stickyBar.classList.contains("d-none") &&
        ref.current.getBoundingClientRect().bottom < 0
      ) {
        stickyBar.classList.remove("d-none");
        return;
      }
      if (
        !stickyBar.classList.contains("d-none") &&
        ref.current.getBoundingClientRect().bottom > 0
      ) {
        stickyBar.classList.add("d-none");
      }
    }
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router?.push("/pages/wishlist");
    }
  }

  function refreshSelectableGroup() {
    let tempArray = [...variationGroup];
    if (selectedVariant.color) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.color !== cur.color) {
          return acc;
        }
        return [...acc, cur];
      }, []);
    }

    setSizeArray(
      tempArray.reduce((acc, cur) => {
        if (acc.findIndex((item) => item.size == cur.size) !== -1) return acc;
        return [...acc, cur];
      }, [])
    );

    tempArray = [...variationGroup];
    if (selectedVariant.size) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.size !== cur.size) {
          return acc;
        }
        return [...acc, cur];
      }, []);
    }

    setColorArray(
      product.variants.reduce((acc, cur) => {
        if (tempArray.findIndex((item) => item.color == cur.color) == -1) {
          return [
            ...acc,
            {
              color: cur.color,
              colorName: cur.color_name,
              price: cur.price,
              disabled: true,
            },
          ];
        }
        return [
          ...acc,
          {
            color: cur.color,
            colorName: cur.color_name,
            price: cur.price,
            disabled: false,
          },
        ];
      }, [])
    );
  }

  function selectColor(e, item) {
    e.preventDefault();
    if (item.color == selectedVariant.color) {
      setSelectedVariant({
        ...selectedVariant,
        color: null,
        colorName: null,
        price: item.price,
      });
    } else {
      setSelectedVariant({
        ...selectedVariant,
        color: item.color,
        colorName: item.colorName,
        price: item.price,
      });
    }
  }

  function selectSize(e) {
    if (e.target.value == "") {
      setSelectedVariant({ ...selectedVariant, size: "" });
    } else {
      setSelectedVariant({ ...selectedVariant, size: e.target.value });
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }

  function onChangeQty2(current) {
    setQty2(current);
  }

  function clearSelection(e) {
    e.preventDefault();
    setSelectedVariant({
      ...selectedVariant,
      color: null,
      colorName: null,
      size: "",
    });
    refreshSelectableGroup();
  }

  function onCartClick(e, index = 0) {
    e.preventDefault();
    if (e.currentTarget.classList.contains("btn-disabled")) return;

    let newProduct = { ...product };
    if (product.variants?.length > 0) {
      newProduct = {
        ...product,
        name:
          product.name +
          " - " +
          selectedVariant.colorName +
          ", " +
          selectedVariant.size,
        price: selectedVariant.price,
      };
    }
    props.addToCart(newProduct, index == 0 ? qty : qty2);
  }

  if (!product) {
    return <div></div>;
  }

  return (
    <div className="product-details" ref={ref}>
      <h1 className="product-title">{product.name}</h1>

      <div className="ratings-container">
        <div className="ratings">
          <div
            className="ratings-val"
            style={{ width: product.ratings * 20 + "%" }}
          ></div>
          <span className="tooltip-text">{product.ratings.toFixed(2)}</span>
        </div>
        <span className="ratings-text">( {product.review} Reviews )</span>
      </div>

      {product.stock == 0 ? (
        <div className="product-price">
          <span className="out-price">
            {minPrice == maxPrice ? (
              <span>${product.price.toFixed(2)}</span>
            ) : (
              <span>
                ${minPrice.toFixed(2)}&ndash;${maxPrice.toFixed(2)}
              </span>
            )}
          </span>
        </div>
      ) : minPrice == maxPrice ? (
        <div className="product-price">${minPrice.toFixed(2)}</div>
      ) : product.variants?.length == 0 ? (
        <div className="product-price">
          <span className="new-price">${minPrice.toFixed(2)}</span>
          <span className="old-price">${maxPrice.toFixed(2)}</span>
        </div>
      ) : (
        <div className="product-price">
          ${minPrice.toFixed(2)}&ndash;${maxPrice.toFixed(2)}
        </div>
      )}

      <div className="product-content">
        <p>{product.short_desc}</p>
      </div>

      {product.variants?.length > 0 ? (
        <>
          <div className="details-filter-row details-row-size">
            <label>Color:</label>

            <div className="product-nav product-nav-dots">
              {colorArray.map((item, index) => (
                <a
                  href="#"
                  className={`${
                    (item.color == selectedVariant.color ? "active " : "") +
                    (item.disabled ? "disabled" : "")
                  }`}
                  style={{ backgroundColor: item.color }}
                  key={index}
                  onClick={(e) => selectColor(e, item)}
                ></a>
              ))}
            </div>
          </div>

          <div className="details-filter-row details-row-size">
            <label htmlFor="size">Size:</label>
            <div className="select-custom">
              <select
                name="size"
                className="form-control"
                value={selectedVariant.size}
                onChange={selectSize}
              >
                <option value="">Select a size</option>
                {sizeArray.map((item, index) => (
                  <option value={item.size} key={index}>
                    {item.size}
                  </option>
                ))}
              </select>
            </div>

            <Link href="#" className="size-guide mr-4">
              <i className="icon-th-list"></i>size guide
            </Link>
            {showClear ? (
              <a href="#" onClick={clearSelection}>
                clear
              </a>
            ) : (
              ""
            )}
          </div>
          {/* <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div>
                                    <button className={ `d-none variation-toggle ${toggleState.toLowerCase()}` } onClick={ onToggle }></button>
                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <div className="product-price">
                                            ${ selectedVariant.price ? selectedVariant.price.toFixed( 2 ) : 0 }
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle> */}
        </>
      ) : (
        ""
      )}

      <div className="details-filter-row details-row-size">
        <label htmlFor="qty">Qty:</label>
        <Qty changeQty={onChangeQty} max={product.stock} value={qty}></Qty>
      </div>

      <div className="product-details-action">
        <a
          href="#"
          className={`btn-product btn-cart ${
            !canAddToCart(props.cartlist, product, qty) ||
            (product.variants?.length > 0 && !showVariationPrice)
              ? "btn-disabled"
              : ""
          }`}
          onClick={(e) => onCartClick(e, 0)}
        >
          <span>add to cart</span>
        </a>
        <div className="details-action-wrapper">
          {isInWishlist(props.wishlist, product) ? (
            <Link
              href="/shop/wishlist"
              className="btn-product btn-wishlist added-to-wishlist"
            >
              <span>Go to Wishlist</span>
            </Link>
          ) : (
            <a
              href="#"
              className="btn-product btn-wishlist"
              onClick={onWishlistClick}
            >
              <span>Add to Wishlist</span>
            </a>
          )}
        </div>
      </div>

      <div className="product-details-footer">
        <div className="product-cat w-100 text-truncate">
          <span>Category:</span>
          {product.category.map((cat, index) => (
            <span key={index}>
              <Link
                href={{
                  pathname: "/shop/sidebar/list",
                  query: { category: cat.slug },
                }}
              >
                {cat.name}
              </Link>
              {index < product.category?.length - 1 ? "," : ""}
            </span>
          ))}
        </div>

        <div className="social-icons social-icons-sm">
          <span className="social-label">Share:</span>
          <Link href="#" className="social-icon" title="Facebook">
            <i className="icon-facebook-f"></i>
          </Link>
          <Link href="#" className="social-icon" title="Twitter">
            <i className="icon-twitter"></i>
          </Link>
          <Link href="#" className="social-icon" title="Instagram">
            <i className="icon-instagram"></i>
          </Link>
          <Link href="#" className="social-icon" title="Pinterest">
            <i className="icon-pinterest"></i>
          </Link>
        </div>
      </div>
      <div className="sticky-bar d-none">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <figure className="product-media">
                <Link href={`/product/default/${product.slug}`}>
                  <img
                    src={product.sm_pictures[0].url}
                    alt="product"
                    width={product.sm_pictures[0].width}
                    height={product.sm_pictures[0].height}
                  />
                </Link>
              </figure>
              <h3 className="product-title">
                <Link href={`/product/default/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
            </div>
            <div className="col-6 justify-content-end">
              {selectedVariant.color && selectedVariant.size != "" ? (
                <div className="product-price">
                  $
                  {selectedVariant.price ? selectedVariant.price.toFixed(2) : 0}
                </div>
              ) : product.stock == 0 ? (
                <div className="product-price">
                  <span className="out-price">${product.price.toFixed(2)}</span>
                </div>
              ) : minPrice == maxPrice ? (
                <div className="product-price">${minPrice.toFixed(2)}</div>
              ) : product.variants?.length == 0 ? (
                <div className="product-price">
                  <span className="new-price">${minPrice.toFixed(2)}</span>
                  <span className="old-price">${maxPrice.toFixed(2)}</span>
                </div>
              ) : (
                <div className="product-price">
                  ${minPrice.toFixed(2)}&ndash;${maxPrice.toFixed(2)}
                </div>
              )}
              <Qty
                changeQty={onChangeQty2}
                max={product.stock}
                value={qty2}
              ></Qty>
              <div className="product-details-action">
                <a
                  href="#"
                  className={`btn-product btn-cart ${
                    !canAddToCart(props.cartlist, product, qty) ||
                    (product.variants?.length > 0 && !showVariationPrice)
                      ? "btn-disabled"
                      : ""
                  }`}
                  onClick={(e) => onCartClick(e, 1)}
                >
                  <span>add to cart</span>
                </a>
                {isInWishlist(props.wishlist, product) ? (
                  <Link
                    href="/shop/wishlist"
                    className="btn-product btn-wishlist added-to-wishlist"
                  >
                    <span>Go to Wishlist</span>
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="btn-product btn-wishlist"
                    onClick={onWishlistClick}
                  >
                    <span>Add to Wishlist</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
