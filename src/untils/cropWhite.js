function cropWhiteBorders(imageSrc, callback) {
  const img = new Image();
  img.src = imageSrc;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let top = 0;
    let bottom = canvas.height;
    let left = 0;
    let right = canvas.width;

    // Определение верхнего края
    outer: for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const offset = (y * canvas.width + x) * 4;
        if (
          data[offset + 0] !== 255 ||
          data[offset + 1] !== 255 ||
          data[offset + 2] !== 255
        ) {
          top = y;
          break outer;
        }
      }
    }

    // Определение нижнего края
    outer: for (let y = canvas.height - 1; y >= 0; y--) {
      for (let x = 0; x < canvas.width; x++) {
        const offset = (y * canvas.width + x) * 4;
        if (
          data[offset + 0] !== 255 ||
          data[offset + 1] !== 255 ||
          data[offset + 2] !== 255
        ) {
          bottom = y;
          break outer;
        }
      }
    }

    // Определение левого края
    outer: for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const offset = (y * canvas.width + x) * 4;
        if (
          data[offset + 0] !== 255 ||
          data[offset + 1] !== 255 ||
          data[offset + 2] !== 255
        ) {
          left = x;
          break outer;
        }
      }
    }

    // Определение правого края
    outer: for (let x = canvas.width - 1; x >= 0; x--) {
      for (let y = 0; y < canvas.height; y++) {
        const offset = (y * canvas.width + x) * 4;
        if (
          data[offset + 0] !== 255 ||
          data[offset + 1] !== 255 ||
          data[offset + 2] !== 255
        ) {
          right = x;
          break outer;
        }
      }
    }

    // Обрезка изображения
    const croppedWidth = right - left;
    const croppedHeight = bottom - top;

    const croppedCanvas = document.createElement("canvas");
    const croppedCtx = croppedCanvas.getContext("2d");

    croppedCanvas.width = croppedWidth;
    croppedCanvas.height = croppedHeight;

    croppedCtx.drawImage(
      canvas,
      left,
      top,
      croppedWidth,
      croppedHeight,
      0,
      0,
      croppedWidth,
      croppedHeight
    );

    // Возврат обработанного изображения
    callback(croppedCanvas.toDataURL());
  };
}

export default cropWhiteBorders;
