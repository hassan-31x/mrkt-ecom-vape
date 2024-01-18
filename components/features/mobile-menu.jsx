import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import SlideToggle from 'react-slide-toggle';
import Link from 'next/link';

function MobileMenu () {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState( "" );

    // useEffect( () => {
    //     router?.events.on( 'routeChangeComplete', hideMobileMenu );
    // }, [] )

    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router?.push( {
            pathname: '/sidebar/list',
            query: {
                searchTerm: searchTerm,
                category: ""
            }
        } );
    }

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={ hideMobileMenu }><i className="icon-close"></i></span>

                <form action="#" method="get" onSubmit={ onSubmitSearchForm } className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="text" className="form-control" value={ searchTerm } onChange={ onSearchChange } name="mobile-search" id="mobile-search" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <nav className="mobile-nav">
                    <ul className="mobile-menu">
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="/">
                                        Home
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><a href="http://d-themes.com/demo-1/" target="_blank">01 - furniture store</a></li>
                                        <li><a href="http://d-themes.com/demo-2/" target="_blank">02 - furniture store</a></li>
                                        <li><a href="http://d-themes.com/demo-3/" target="_blank">03 - electronic store</a></li>
                                        <li><a href="http://d-themes.com/demo-4/" target="_blank">04 - electronic store</a></li>
                                        <li><a href="http://d-themes.com/demo-5/" target="_blank">05 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-6/" target="_blank">06 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-7/" target="_blank">07 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-8/" target="_blank">08 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-9/" target="_blank">09 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-10/" target="_blank">10 - shoes store</a></li>
                                        <li><a href="http://d-themes.com/demo-11/" target="_blank">11 - furniture simple store</a></li>
                                        <li><a href="http://d-themes.com/demo-12/" target="_blank">12 - fashion simple store</a></li>
                                        <li><a href="http://d-themes.com/demo-13/" target="_blank">13 - market</a></li>
                                        <li><a href="http://d-themes.com/demo-14/" target="_blank">14 - market fullwidth</a></li>
                                        <li><a href="http://d-themes.com/demo-15/" target="_blank">15 - lookbook 1</a></li>
                                        <li><a href="http://d-themes.com/demo-16/" target="_blank">16 - lookbook 2</a></li>
                                        <li><a href="http://d-themes.com/demo-17/" target="_blank">17 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-18/" target="_blank">18 - fashion store (with sidebar)</a></li>
                                        <li><a href="http://d-themes.com/demo-19/" target="_blank">19 - games store</a></li>
                                        <li><a href="http://d-themes.com/demo-20/" target="_blank">20 - book store</a></li>
                                        <li><a href="http://d-themes.com/demo-21/" target="_blank">21 - sport store</a></li>
                                        <li><a href="http://d-themes.com/demo-22/" target="_blank">22 - tools store</a></li>
                                        <li><a href="http://d-themes.com/demo-23/" target="_blank">23 - fashion left navigation store</a></li>
                                        <li><a href="http://d-themes.com/demo-24/" target="_blank">24 - extreme sport store</a></li>
                                        <li><a href="http://d-themes.com/demo-25/" target="_blank">25 - jewelry store</a></li>
                                        <li><a href="http://d-themes.com/demo-26/" target="_blank">26 - market store</a></li>
                                        <li><a href="http://d-themes.com/demo-27/" target="_blank">27 - fashion store</a></li>
                                        <li><a href="http://d-themes.com/demo-28/" target="_blank">28 - food market store</a></li>
                                        <li><a href="http://d-themes.com/demo-29/" target="_blank">29 - t-shirts store</a></li>
                                        <li><a href="http://d-themes.com/demo-30/" target="_blank">30 - headphones store</a></li>
                                        <li><a href="http://d-themes.com/demo-31/" target="_blank">31 - yoga store</a></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="/sidebar/list">
                                        Shop
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><Link href="/sidebar/list">Shop List</Link></li>
                                        <li><Link href="/sidebar/2cols">Shop Grid 2 Columns</Link></li>
                                        <li><Link href="/sidebar/3cols">Shop Grid 3 Columns</Link></li>
                                        <li><Link href="/sidebar/4cols">Shop Grid 4 Columns</Link></li>
                                        <li><Link href="/market"><span>Shop Market<span className="tip tip-new">New</span></span></Link></li>
                                        <li><Link href="/nosidebar/boxed"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                                        <li><Link href="/nosidebar/fullwidth">Shop Fullwidth No Sidebar</Link></li>
                                        <li><Link href="/category/boxed">Product Category Boxed</Link></li>
                                        <li><Link href="/category/fullwidth"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                        <li><Link href="/cart">Cart</Link></li>
                                        <li><Link href="/checkout">Checkout</Link></li>
                                        <li><Link href="/wishlist">Wishlist</Link></li>
                                        <li><Link href="/dashboard">My Account</Link></li>
                                        <li><Link href="#">Lookbook</Link></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="/product/default/dark-yellow-lace-cut-out-swing-dress" className="sf-with-ul">
                                        Product
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>
                                    <ul ref={ setCollapsibleElement }>
                                        <li><Link href="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</Link></li>
                                        <li><Link href="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</Link></li>
                                        <li><Link href="/product/extended/yellow-tie-strap-block-heel-sandals"><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                        <li><Link href="/product/gallery/beige-metal-hoop-tote-bag">Gallery</Link></li>
                                        <li><Link href="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</Link></li>
                                        <li><Link href="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</Link></li>
                                        <li><Link href="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</Link></li>
                                        <li><Link href="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</Link></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="#">
                                        Pages
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>
                                    <ul ref={ setCollapsibleElement }>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="/pages/about" className="sf-with-ul">About <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>

                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/pages/about">About 01</Link></li>
                                                        <li><Link href="/pages/about-2">About 02</Link></li>
                                                    </ul>
                                                </li>

                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="/pages/contact" className="sf-with-ul">Contact <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>

                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/pages/contact">Contact 01</Link></li>
                                                        <li><Link href="/pages/contact-2">Contact 02</Link></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <li><Link href="/pages/login">Login</Link></li>
                                        <li><Link href="/pages/faq">FAQs</Link></li>
                                        <li><Link href="/pages/404">Error 404</Link></li>
                                        <li><Link href="/pages/coming-soon">Coming Soon</Link></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="/blog/classic">
                                        Blog
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><Link href="/blog/classic">Classic</Link></li>
                                        <li><Link href="/blog/listing" >Listing</Link></li>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="#" className="sf-with-ul">Grid <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/blog/grid/2cols">Grid 2 columns</Link></li>
                                                        <li><Link href="/blog/grid/3cols">Grid 3 columns</Link></li>
                                                        <li><Link href="/blog/grid/4cols">Grid 4 columns</Link></li>
                                                        <li><Link href="/blog/grid/sidebar">Grid sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="#" className="sf-with-ul">Masonry <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/blog/masonry/2cols">Masonry 2 columns</Link></li>
                                                        <li><Link href="/blog/masonry/3cols">Masonry 3 columns</Link></li>
                                                        <li><Link href="/blog/masonry/4cols">Masonry 4 columns</Link></li>
                                                        <li><Link href="/blog/masonry/sidebar">Masonry sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="#" className="sf-with-ul">Mask <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/blog/mask/grid">Blog Mask Grid</Link></li>
                                                        <li><Link href="/blog/mask/masonry">Blog Mask Masonry</Link></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <Link href="/blog/single/default/cras-ornare-tristique-elit." className="sf-with-ul">Single Post <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></Link>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><Link href="/blog/single/default/cras-ornare-tristique-elit.">Default with sidebar</Link></li>
                                                        <li><Link href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">Fullwidth no sidebar</Link></li>
                                                        <li><Link href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">Fullwidth with sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <Link href="/elements" className="sf-with-ul">
                                        Elements
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </Link>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><Link href="/elements/products">Products</Link></li>
                                        <li><Link href="/elements/typography">Typography</Link></li>
                                        <li><Link href="/elements/titles">Titles</Link></li>
                                        <li><Link href="/elements/banners">Banners</Link></li>
                                        <li><Link href="/elements/categories">Product Category</Link></li>
                                        <li><Link href="/elements/video-banners">Video Banners</Link></li>
                                        <li><Link href="/elements/buttons">Buttons</Link></li>
                                        <li><Link href="/elements/accordions">Accordions</Link></li>
                                        <li><Link href="/elements/tabs">Tabs</Link></li>
                                        <li><Link href="/elements/testimonials">Testimonials</Link></li>
                                        <li><Link href="/elements/blog-posts">Blog Posts</Link></li>
                                        <li><Link href="/elements/cta">Call to Action</Link></li>
                                        <li><Link href="/elements/icon-boxes">Icon Boxes</Link></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                    </ul>
                </nav>

                <div className="social-icons">
                    <Link href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></Link>
                    <Link href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></Link>
                    <Link href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></Link>
                    <Link href="#" className="social-icon" title="Youtube"><i className="icon-youtube"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;