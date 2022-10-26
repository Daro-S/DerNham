import {blurHashToDataURL} from './blurhashDataURL';

type Options = {
  width: number;
  height: number;
};

export function buildImageUrl(path?: string, opts?: Options): string {
  if (!path) return `${process.env.NEXT_PUBLIC_ASSET_URL}/noimage.jpeg`;

  if (opts) {
    return `${process.env.NEXT_PUBLIC_ASSET_URL}/${opts.width}x${opts.height}/${path}`;
  }

  return `${process.env.NEXT_PUBLIC_ASSET_URL}/${path}`;
}

export function buildImageUrlThumb(path?: string): string {
  return buildImageUrl(path, {width: 720, height: 480});
}

type ThumbOpt = {
  path?: string;
  blurhash?: string;
};
export function buildThumb({path, blurhash}: ThumbOpt) {
  return {
    url: buildImageUrlThumb(path),
    blurDataURL: blurHashToDataURL(blurhash),
  };
}
