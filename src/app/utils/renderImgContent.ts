export const renderImgContent = (
  content: string,
  images: { id: string; src: string }[],
) => {
  let renderedContent = content;

  images.forEach(image => {
    const imgTag = `<img src="${image.src}" alt="${image.id}" style="max-width: 100%; height: auto;"/>`;
    renderedContent = renderedContent.replace(`<${image.id}>`, imgTag);
  });

  return renderedContent;
};
