import { Button } from "@/components/ui/button";
import { m } from "@/paraglide/messages.js";

const notFoundImgLight = "/not-found-light.png";
// // import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

export function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center h-screen justify-center p-4">
      <div className="w-64 sm:w-78 md:w-96 mx-auto">
        <AspectRatio ratio={1}>
          <img
            src={notFoundImgLight}
            alt="Not Found"
            // fill
            // priority
            sizes={"100%"}
          />
        </AspectRatio>
      </div>
      <p className="text-lg text-center mb-8">{m.oops_this_page_was_not_found()}</p>
      <Link to="/">
        <Button size={"lg"}>{m.return_home()}</Button>
      </Link>
    </div>
  );
}
