"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import PageHeader from "@/components/features/page-header";
import ShopListOne from "@/components/partials/list/shop-list-one";
import Pagination from "@/components/features/pagination";
import ShopSidebarOne from "@/components/partials/sidebar/shop-sidebar-one";

import { scrollToPageContent } from "@/utils";

import data from "@/data/products.json";
import Link from "next/link";

function CategoryPageComponent({ products }) {
  const [firstLoading, setFirstLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  const type = "2cols";
  const query = router?.query;

  const loading = false;
  const error = null;
  const perPage = 6;
  const totalCount = products?.length;

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }

  // useEffect( () => {
  //     getProducts( {
  //         variables: {
  //             searchTerm: query?.searchTerm,
  //             color: query?.color ? query?.color.split( ',' ) : [],
  //             size: query?.size ? query?.size.split( ',' ) : [],
  //             brand: query?.brand ? query?.brand.split( ',' ) : [],
  //             minPrice: parseInt( query?.minPrice ),
  //             maxPrice: parseInt( query?.maxPrice ),
  //             category: query?.category,
  //             sortBy: query?.sortBy ? query?.sortBy : 'default',
  //             page: query?.page ? parseInt( query?.page ) : 1,
  //             perPage: perPage,
  //             list: true
  //         }
  //     } );

  //     scrollToPageContent();
  // }, [ query, perPage ] )

  useEffect(() => {
    if (products) setFirstLoading(true);
  }, [products]);

  function onSortByChange(e) {
    let queryObject = router.query;
    let url = router.pathname.replace("[type]", "2cols") + "?";
    for (let key in queryObject) {
      if (key !== "type" && key !== "sortBy") {
        url += key + "=" + queryObject[key] + "&";
      }
    }

    router.push(url + "sortBy=" + e.target.value);
  }

  function toggleSidebar() {
    if (
      document.querySelector("body").classList.contains("sidebar-filter-active")
    ) {
      document.querySelector("body").classList.remove("sidebar-filter-active");
    } else {
      document.querySelector("body").classList.add("sidebar-filter-active");
    }
  }

  function hideSidebar() {
    document.querySelector("body").classList.remove("sidebar-filter-active");
  }

  if (error) {
    return <div></div>;
  }

  return (
    <main className="main shop">
      <PageHeader title="Category" subTitle="Shop" />
      <nav className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Category</li>
            {query?.search ? (
              <li className="breadcrumb-item">
                <span>Search - {query?.searchTerm}</span>
              </li>
            ) : (
              ""
            )}
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row skeleton-body">
            <div
              className={`col-lg-9 skel-shop-products ${
                !loading ? "loaded" : ""
              }`}
            >
              <div className="toolbox">
                <div className="toolbox-left">
                  {!loading && products ? (
                    <div className="toolbox-info">
                      Showing
                      <span>
                        {" "}
                        {products?.length} of {totalCount}
                      </span>{" "}
                      Products
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                        onChange={onSortByChange}
                        value={query?.sortBy ? query?.sortBy : "default"}
                      >
                        <option value="default">Default</option>
                        <option value="featured">Most Popular</option>
                        <option value="rating">Most Rated</option>
                        <option value="new">Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-layout">
                    <Link
                      href="/sidebar/list"
                      className={`btn-layout ${type == "list" ? "active" : ""}`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="10" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="10" height="4" />
                      </svg>
                    </Link>

                    <Link
                      href="/sidebar/2cols"
                      className={`btn-layout ${
                        type == "2cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="10" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                      </svg>
                    </Link>

                    <Link
                      href="/sidebar/3cols"
                      className={`btn-layout ${
                        type == "3cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                      </svg>
                    </Link>

                    <Link
                      href="/sidebar/4cols"
                      className={`btn-layout ${
                        type == "4cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="22" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="18" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                        <rect x="18" y="6" width="4" height="4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <ShopListOne
                products={products}
                perPage={perPage}
                loading={loading}
              ></ShopListOne>

              {totalCount > perPage ? (
                <Pagination perPage={perPage} total={totalCount}></Pagination>
              ) : (
                ""
              )}
            </div>

            <aside
              className={`col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${
                !loading || firstLoading ? "loaded" : ""
              }`}
            >
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <StickyBox className="sticky-content" offsetTop={70}>
                <ShopSidebarOne toggle={toggle}></ShopSidebarOne>
              </StickyBox>
              {toggle ? (
                <button
                  className="sidebar-fixed-toggler"
                  onClick={toggleSidebar}
                >
                  <i className="icon-cog"></i>
                </button>
              ) : (
                ""
              )}
              <div
                className="sidebar-filter-overlay"
                onClick={hideSidebar}
              ></div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CategoryPageComponent;
