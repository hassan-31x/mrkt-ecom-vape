import Link from "next/link";

import PageHeader from "@/components/features/page-header";
import WishlistPageComponent from "./_componenets/index";

const WishlistPage = () => {
  return (
    <main className="main">
      <PageHeader title="Wishlist" subTitle="Shop" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Wishlist</li>
          </ol>
        </div>
      </nav>

      <WishlistPageComponent />
    </main>
  );
};

export default WishlistPage;
