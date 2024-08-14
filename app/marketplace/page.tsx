"use client";
import { ItemsTable } from "@/components/ItemsTable";
import AddModal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Marketplace = () => {
  const navigate = useRouter();
  return (
    <div className="w-full flex flex-col p-16">
      <div className="flex w-full justify-between ">
        <div className="text-3xl/[24px]"> Items</div>
        {/* <AddModal /> */}
        <Button
          className="bg-walmart hover:bg-walmart/80 px-10 rounded-3xl py-3"
          onClick={() => {
            navigate.push("/additem");
          }}
        >
          Add Item
        </Button>
      </div>
      <ItemsTable />
    </div>
  );
};

export default Marketplace;
