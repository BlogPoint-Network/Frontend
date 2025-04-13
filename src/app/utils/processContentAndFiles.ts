type ImageData = {
  name: string;
  file: File;
};

type ProcessedContent = {
  content: string;
  images: ImageData[];
};

const extractBase64Data = (base64String: string): { mime: string; data: string } | null => {
  const match = base64String.match(/^data:(image\/\w+);base64,(.+)$/);
  return match ? { mime: match[1], data: match[2] } : null;
};

export const processHtmlContent = (content: string): ProcessedContent => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  const images: ImageData[] = [];
  let imgCounter = 1;

  doc.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (src && src.startsWith("data:image/")) {
      const base64Data = extractBase64Data(src);
      if (base64Data) {
        const byteCharacters = atob(base64Data.data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const file = new File([byteArray], `img${imgCounter}.jpg`, { type: base64Data.mime });

        images.push({ name: `img${imgCounter}`, file });
        img.replaceWith(`img${imgCounter}`);
        imgCounter++;
      }
    }
  });

  return { content: doc.body.innerHTML, images };
};
