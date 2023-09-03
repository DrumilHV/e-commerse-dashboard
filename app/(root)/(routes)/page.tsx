"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/model";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    // <div className="p-4">
    //   {/* <UserButton afterSignOutUrl="/" /> */}
    //   Root Page
    // </div>
    null
  );
};
export default SetupPage;
