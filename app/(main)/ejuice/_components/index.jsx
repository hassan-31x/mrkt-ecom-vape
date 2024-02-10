"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import PageHeader from "@/components/features/page-header";
import ShopListOne from "@/components/partials/shop/list/shop-list-one";
import Pagination from "@/components/features/pagination";
import ShopSidebarOne from "@/components/partials/shop/sidebar/shop-sidebar-one";

import Link from "next/link";

function CategoryPageComponent({ products: data }) {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState(data);


  const router = useRouter();

  const path = usePathname()
  const searchParams = useSearchParams()
  const sortBy = searchParams.get('sortBy')

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

  useEffect(() => {
    if (!sortBy) setProducts(data)

    if (sortBy === "rating") {
      setProducts(data.sort((a, b) => b?.ratings - a?.ratings))
    }

    if (sortBy === "new") {
      setProducts(data.sort((a, b) => new Date(b?._createdAt) - new Date(a?._createdAt)))
    }

  }, [sortBy])

  
  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }


  function onSortByChange(e) {
    const url = path + "?"
    const query = e.target.value

    if (query === "default") {
      router.push(url)
      return
    }

    router.push(url + "sortBy=" + query);
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
      <PageHeader title="Shop" subTitle="Ejuice" />
      <nav className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Ejuice</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row skeleton-body">
            <div
              className={`w-full skel-shop-products ${
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
                        value={sortBy ? sortBy : "default"}
                      >
                        <option value="default">Default</option>
                        <option value="rating">Most Rated</option>
                        <option value="new">Date</option>
                      </select>
                    </div>
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

            {/* <aside
              className={`col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${
                !loading ? "loaded" : ""
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
            </aside> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CategoryPageComponent;
