"use client";

import Basket from "@/components/Basket";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
// import ListProduct from "./ListProduct";

function AddModal() {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-walmart hover:bg-walmart/80 px-10 rounded-3xl py-3">Add Item</Button>
      </DialogTrigger>
      <DialogContent className=" w-full overflow-scroll max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <DialogDescription>
            <p>Content of your basket</p>
          </DialogDescription>
        </DialogHeader>
        {/* <ListProduct/> */}
      </DialogContent>
    </Dialog>
  );
}

export default AddModal;
