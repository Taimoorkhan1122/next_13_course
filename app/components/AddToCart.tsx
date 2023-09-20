"use client";

import { useRouter } from "next/navigation";

const AddToCart = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/", { scroll: true });
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
