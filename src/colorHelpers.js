import chroma from 'chroma-js';

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

function generateScale(color) {
	return chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(2)]).colors(9);
}

function generateColor(color, name, shade) {
	return {
		name: name + ' ' + shade,
		colorHex: color,
		colorRgb: chroma(color).css(),
		colorRgba: chroma(color).alpha(1).css('rgba'),
		colorHsl: chroma(color).css('hsl'),
		overlayTextColorBool: chroma(color).luminance() < 0.5 ? true : false
	};
}

function generatePalette({ paletteName, id, emoji, colors }) {
	const shades = colors.reduce((obj, color) => {
		const scale = generateScale(color.color);
		levels.forEach((level, i) => {
			if (!obj[level]) obj[level] = [];
			obj[level].push(generateColor(scale[i], color.name, levels[i]));
		});
		return obj;
	}, {});
	return { paletteName, id, emoji, shades };
}

export default generatePalette;
