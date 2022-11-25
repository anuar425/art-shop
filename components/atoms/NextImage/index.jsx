import Image from "next/image";
import { useEffect } from "react";

function NextImage(props) {
  useEffect(() => {
    // console.log(props);
  }, []);
  return (
    <div>
      <Image
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
        position="relative"
        {...props}
      />
    </div>
  );
}

export default NextImage;
