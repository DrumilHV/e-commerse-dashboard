"use client";

import { useState, useEffect } from "react";

import { StoreModal } from "@/components/Modals/store-modal";
export const ModalProivder = () => {
  const [isMounted, setIsMounted] = useState(false);

  //  use the following trick for hydration Error that is when the component is loaded in clinet side
  // but not yet in the server side , we can return null till the useEffect() is called and this will prevent
  // hyderation error
  useEffect(() => {
    setIsMounted(true);
  });
  // when
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
