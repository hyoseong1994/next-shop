import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Next Shop
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex space-x-5">
          <li className="flex-initial">
            <Link href="/wishlist">
              <div className="flex items-center">
                <Image
                  src="/images/icons/cart.png"
                  alt="장바구니"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          </li>
          <li className="flex-initial">
            <Link href="/mypage">
              <Image
                src="/images/icons/mypage.png"
                alt="장바구니"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
