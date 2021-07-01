const numberCount = 10;
const colorCountMax = 200;
const colorCountMin = 100;

const config = {
	randomNumber: Math.floor(Math.random() * numberCount) + 1,
	// eslint-disable-next-line max-len
	randomTheme: Math.floor(Math.random() * (colorCountMax - colorCountMin)) + colorCountMin,
	boxTheme: ['zebra', 'rainbow'],
};

export default config;
