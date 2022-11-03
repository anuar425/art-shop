import Image from "next/image";
import { useEffect } from "react";

function NextImage(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <Image
        alt="Picture of the author"
        width={800}
        height={800}
        objectFit="contain"
        layout="fixed"
        {...props}
      />
    </div>
  );
}

export default NextImage;
