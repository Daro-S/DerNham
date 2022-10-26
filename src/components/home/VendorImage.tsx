import React from "react";
import { buildThumb } from "~/utils";
import Image, { ImageProps } from "next/image";

type imageProps = ImageProps & {
  src: string;
  blurhash: string;
};

export const VendorImage = ({ src, blurhash, alt, ...props }: imageProps) => {
  const thumb = buildThumb({ blurhash, path: src });

  return (
    <Image
      //fetch image from api
      {...props}
      src={thumb.url}
      layout="fixed"
      blurDataURL={thumb.blurDataURL}
      alt={alt}
      objectFit="cover"
    />
  );
};
