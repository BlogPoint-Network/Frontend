interface ImageData {
  id: string;
  src: string;
}

export function transformHtmlWithImages(content: string): {
  transformedHtml: string;
  images: ImageData[];
} {
  let imageIndex = 1;
  const images: ImageData[] = [];

  const transformedHtml = content.replace(
    /<img\b[^>]*src=['"]([^'"]+)['"][^>]*>/g,
    (_, src) => {
      const imgId = `img${imageIndex}`;
      images.push({ id: imgId, src });
      imageIndex++;
      return `<${imgId}>`;
    },
  );

  return { transformedHtml, images };
}
