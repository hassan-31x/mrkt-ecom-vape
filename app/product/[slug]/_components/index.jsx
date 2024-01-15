"use client"

import StickyBox from 'react-sticky-box';

import Breadcrumb from '@/components/partials/product/breadcrumb';
import GallerySticky from '@/components/partials/product/gallery/gallery-sticky';
import DetailOne from '@/components/partials/product/details/detail-one';
import InfoThree from '@/components/partials/product/info-tabs/info-three';
import RelatedProductsOne from '@/components/partials/product/related/related-one';

import data from '@/data/products.json'

function ProductPageComponent (props) {
    const slug = { props };
    if ( !slug ) return <div></div>;

    const loading = false
    const error = null

    const product = data?.products?.find( item => item.slug === slug );
    const related = data?.products?.find( item => item.slug === slug );
    const prev = data?.products?.find( item => item.slug === slug );
    const next = data?.products?.find( item => item.slug === slug );
    // const product = data && data.product.single;
    // const related = data && data.product.related;
    // const prev = data && data.product.prev;
    // const next = data && data.product.next;

    if ( error ) {
        return <div></div>
    }

    return (
        <div className="main">
            <Breadcrumb prev={ prev } next={ next } current="Sticky Info" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div className={ `row skel-pro-single sticky ${loading ? '' : 'loaded'}` }>
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {
                                    !loading ?
                                        <GallerySticky product={ product } />
                                        : ""
                                }
                            </div>

                            <div className="col-md-6">
                                <StickyBox className="sticky-content" offsetTop={ 70 }>
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1 mt-2 mt-md-0"></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>
                                    {
                                        !loading ?
                                            <>
                                                <DetailOne product={ product } />
                                                <InfoThree product={ product } />
                                            </>
                                            : ""
                                    }
                                </StickyBox>
                            </div>
                        </div>
                    </div>

                    <RelatedProductsOne products={ related } loading={ loading } />
                </div >
            </div >
        </div >
    )
}

export default ProductPageComponent;
