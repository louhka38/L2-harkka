const pad = (hex) => (hex.length === 1 ? "0" + hex : hex);

export const componentToHex = (c) => {
    return pad(c.toString(16));
}

export const rgbToHex = (r,g,b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * Hex to RGB
 * @param {string} hex in 7-character format e.g. #000fff
 * @returns {number[]} [r,g,b]
 */
export const hexToRGB = (hex) => {
    const red = parseInt(hex.substring(1,3), 16);
    const green = parseInt(hex.substring(3,5), 16);
    const blue = parseInt(hex.substring(5,7), 16);
    return [red, green, blue];
}