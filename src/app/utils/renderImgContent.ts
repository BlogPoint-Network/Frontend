import { IContentImage } from '@app-types';

export const renderImgContent = (
  content: string,
  images: IContentImage[],
) => {
  let renderedContent = content;

  images.forEach(image => {
    const imgTag = `<img src="${image.url}" alt="${image.name}" style="max-width: 100%; height: auto;"/>`;
    renderedContent = renderedContent.replace(`<${image.name}>`, imgTag);
  });

  return renderedContent;
};
