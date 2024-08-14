"use client"
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { description } from "@/lib/description";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Review = () => {
    const [inDisabledPhase,setinDisabledPhase]=useState(true)
    const router=useRouter()
    const handleEdit=()=>{
        setinDisabledPhase(!inDisabledPhase)
    }
  return (
    <section
        id="form-details"
        className="bg-gray-100 rounded-sm px-[60px] py-6 h-[33vh] overflow-hidden"
      >
        <h1 className="text-3xl">Review Items</h1>
        <div className="p-4 grid md:grid-cols-3 gap-y-3 grid-cols-1 ">
          <div>
            <Label htmlFor="name" className="text-sm">
              Item Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={
                "Samsung Galaxy S24 Ultra 256GB Unlocked Android Cell Phone with 200MP Camera, Titanium Gray"
              }
              disabled={inDisabledPhase}
              className="border-none !w-[250px] overflow-ellipsis !cursor-text !bg-gray-50"
            />
          </div>
          <div>
            <Label htmlFor="category" className="text-sm">
              Category
            </Label>
            <Input
              id="category"
              type="text"
              placeholder="Name"
              value={"Cell Phones"}
              disabled={inDisabledPhase}
              className="border-none !w-[250px] overflow-ellipsis !cursor-text !bg-gray-50"
            />
          </div>
          <div>
            <Label htmlFor="fulfillment-type" className="text-sm">
              Fulfillment Type
            </Label>
            <Input
              id="fulfillment-type"
              type="text"
              placeholder="Name"
              value={"Walmart Fulfilled"}
              disabled={inDisabledPhase}
              className="border-none !w-[250px] overflow-ellipsis !cursor-text !bg-gray-50"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-sm">
              Description
            </Label>
            <Textarea
        
              id="description"
              placeholder="Name"
              value={description}
              disabled={inDisabledPhase}
              className="w-[300px] h-[86px] border-none overflow-ellipsis !cursor-text !bg-gray-50 resize-none"
            />
          </div>
          <div>
            <Label htmlFor="brand" className="text-sm">
              Brand
            </Label>
            <Input
              type="text"
              id="brand"
              placeholder="Brand"
              value={"Samsung"}
              disabled={inDisabledPhase}
              className="w-[250px] border-none overflow-ellipsis !cursor-text !bg-gray-50 resize-none"
            />
          </div>
          <div>
            <Label htmlFor="condition" className="text-sm">
              Condition
            </Label>
            <Input
              id="condition"
              type="text"
              placeholder="Name"
              value={"Restored"}
              disabled={inDisabledPhase}
              className="border-none !w-[250px] overflow-ellipsis !cursor-text !bg-gray-50"
            />
          </div>
         
        </div>
        <footer className="flex fixed w-full items-center h-[8vh] left-0 bottom-0 border-t px-20 shadow-2xl bg-slate-50 justify-between p-8 z-50">
      <Button className="w-[74px] h-8 bg-white border-[1px] border-black hover:bg-gray-100 text-black rounded-[28px] font-bold" onClick={()=>{
        router.push("/marketplace")
      }}>
          Cancel
        </Button>
      <div className="flex gap-4"> 
        <Button className="w-[74px] h-8 bg-white border-[1px] border-black hover:bg-gray-100 text-black rounded-[28px] font-bold" onClick={handleEdit}>
         {inDisabledPhase?"Edit":"Done"} 
        </Button>
       {inDisabledPhase && <Button className="w-[100px] h-8 bg-walmart hover:bg-walmart/80 rounded-[28px] font-bold">
          Submit
        </Button>}
      </div>
    </footer>
      </section>

  )
}

export default Review