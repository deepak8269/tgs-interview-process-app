const BASE_SIZE_FACTOR = 0.0625;
const BASE_SPACING_FACTOR = 0.25;

export const spacingFactor = (factor) => `${BASE_SPACING_FACTOR * factor}rem`;

export const sizingFactor = (factor) => `${BASE_SIZE_FACTOR * factor}rem`;
