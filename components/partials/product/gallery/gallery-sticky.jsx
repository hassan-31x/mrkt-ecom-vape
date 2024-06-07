"use client"

import { Magnifier } from "react-image-magnifiers";
import React, { useState, useEffect } from "react";
import LightBox from "react-image-lightbox";
import urlFor from "@/sanity/lib/image";

function GallerySticky(props) {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product?.pictures.length);
  }

  function movePrevPhoto() {
    setPhotoIndex(
      (photoIndex + product?.pictures.length - 1) % product?.pictures.length
    );
  }

  function openLightBox(e, index) {
    setIsOpen(true);
    setPhotoIndex(index);
  }

  function closeLightBox() {
    setIsOpen(false);
  }

  if (!product) {
    return <div></div>;
  }

  return (
    <>
      <div className="product-gallery product-gallery-separated">
        {product?.hot ? (
          <span className="product-label label-new">Hot</span>
        ) : (
          ""
        )}

        {product?.sale_price ? (
          <span className="product-label label-sale">Promo</span>
        ) : (
          ""
        )}

        {product?.featured ? (
          <span className="product-label label-top">Viral</span>
        ) : (
          ""
        )}

        {product?.stock == 0 ? (
          <span className="product-label label-out">Out of Stock</span>
        ) : (
          ""
        )}
        {product?.pictures?.map((item, index) => (
          <figure
            className="product-main-image"
            key={index}
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <Magnifier
              imageSrc={urlFor(item)?.url()}
              imageAlt="product"
              largeImageSrc={urlFor(item)?.url()} // Optional
              dragToMove={false}
              mouseActivation="hover"
              className="zoom-image position-relative overflow-hidden"
              cursorStyleActive="crosshair"
              width={264}
              height={270}
              style={{
                paddingTop: '100%',
              }}
            />

            <button
              id="btn-product-gallery"
              className="btn-product-gallery"
              onClick={(e) => openLightBox(e, index)}
            >
              <i className="icon-arrows"></i>
            </button>
          </figure>
        ))}
      </div>

      {isOpen ? (
        <LightBox
          mainSrc={
            urlFor(product?.pictures?.[photoIndex]).url()
          }
          nextSrc={
            urlFor(product?.pictures?.[(photoIndex + 1) % product?.pictures.length]).url()
          }
          prevSrc={
            urlFor(product?.pictures[
              (photoIndex + product?.pictures.length - 1) %
                product?.pictures.length
            ]).url()
          }
          onCloseRequest={closeLightBox}
          onMovePrevRequest={moveNextPhoto}
          onMoveNextRequest={movePrevPhoto}
          reactModalStyle={{
            overlay: {
              zIndex: 1041,
            },
          }}
          wrapperClassName="lightbox-modal"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default GallerySticky;
