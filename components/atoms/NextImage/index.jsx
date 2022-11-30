import Image from "next/image";
import { useEffect } from "react";

function NextImage(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Image
      alt="Picture of the author"
      objectFit="contain"
      layout="fill"
      {...props}
    />
  );
}

export default NextImage;
