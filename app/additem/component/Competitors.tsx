import MarketPlaceCard from "@/components/MarketPlaceCard";
import MarketPlaceCardFront from "@/components/MarketPlaceCardFront";
import CardDesign from "@/components/ui/CardDesign/CardDesign";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Competitors = () => {
  return (
    
    <>
    <h1
          className="text-2xl font-bold"
          style={{
            background:
              "var(--Gradient-1, linear-gradient(111deg, #F66A4B 15.87%, #A24AE7 60.65%, #4859F3 89.14%))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Top Industry Players
        </h1>
        <div className="flex gap-2 h-full  ">
          <Carousel className="w-full mr-10 ">
            <CarouselContent className="flex ">
              <>
                <CarouselItem className="flex gap-6">
                  <CardDesign
                    front={
                      <MarketPlaceCard
                        product={{
                          url: "/ip/Straight-Talk-Google-Pixel-6A-128GB-6GB-RAM-Black-Prepaid-Smartphone-Locked-to-Straight-Talk/2092871893",
                          image:
                            "https://i5.walmartimages.com/asr/09c5b3b9-ce10-4d99-9923-fc9fe79a3fbc.ddad6abd349efddf8d225013edf461a4.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
                          price: { price: 194.9, currency: "$" },
                          title:
                            "Straight Talk Google Pixel 6A, 128GB, 6GB RAM, Black - Prepaid Smartphone [Locked to Straight Talk]",
                          rating: { count: 858, rating: 3.8 },
                          seller: { name: "H&C HOMEGOODS" },

                          product_id: "2092871893",
                        }}
                      />
                    }
                    back={
                      <MarketPlaceCardFront
                        product={{
                          url: "/ip/Straight-Talk-Google-Pixel-6A-128GB-6GB-RAM-Black-Prepaid-Smartphone-Locked-to-Straight-Talk/2092871893",
                          image:
                            "https://i5.walmartimages.com/asr/09c5b3b9-ce10-4d99-9923-fc9fe79a3fbc.ddad6abd349efddf8d225013edf461a4.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
                          price: { price: 194.9, currency: "$" },
                          title: "Straight Talk Google Pixel 6A",
                          rating: { count: 858, rating: 3.8 },
                          seller: { name: "H&C HOMEGOODS" },

                          product_id: "2092871893",
                        }}
                      />
                    }
                  />

                  <CardDesign
                    front={
                      <MarketPlaceCard
                        product={{
                          url: "/ip/Straight-Talk-Apple-iPhone-SE-2022-3rd-Gen-5G-64GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk/616074177",
                          image:
                            "https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-SE-2022-3rd-Gen-5G-64GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk_09ed12de-92c5-449f-8e7f-8125bf5d17d1.c055f1517bd70806914f222dbefb18ef.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                          price: { price: 179, currency: "$" },
                          title:
                            "Straight Talk Apple iPhone SE (2022-3rd Gen) 5G, 64GB, Midnight - Prepaid Smartphone [Locked to Straight Talk]",
                          rating: { count: 2215, rating: 4.3 },
                          seller: { name: "Walmart.com" },
                          product_id: "616074177",
                        }}
                      />
                    }
                    back={
                      <MarketPlaceCardFront
                        product={{
                          url: "/ip/Straight-Talk-Apple-iPhone-SE-2022-3rd-Gen-5G-64GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk/616074177",
                          image:
                            "https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-SE-2022-3rd-Gen-5G-64GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk_09ed12de-92c5-449f-8e7f-8125bf5d17d1.c055f1517bd70806914f222dbefb18ef.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                          price: { price: 179, currency: "$" },
                          title: "Straight Talk Apple iPhone SE",
                          rating: { count: 2215, rating: 4.3 },
                          seller: { name: "Walmart.com" },
                          product_id: "616074177",
                        }}
                      />
                    }
                  />
                </CarouselItem>
              </>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
    </>
  )
}

export default Competitors