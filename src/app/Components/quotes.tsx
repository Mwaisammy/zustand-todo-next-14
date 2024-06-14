import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Qoutes({ data }: { data?: Qoute[] }) {
  return (
    <div className="">
      <div>
        <Image
          src={"/quotes-logo.png"}
          alt="logo"
          width={200}
          height={200}
          quality={100}
          className=" object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-screen max-w-screen-lg">
        <h3 className="font-bold text-2xl tracking-wider">{data[0]?.quote}</h3>
        <h4 className="italic">{data?.[0].author}</h4>
        <Button>Generate qoute</Button>
      </div>
    </div>
  );
}

export default Qoutes;

// import React from "react";

// function Qoutes() {
//   return <div>Qoutes</div>;
// }

// export default HQoutes
