const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}

const StyleGuide = {
	fonts: {
		serif: 'Alegreya, serif',
		// sansSerif: 'Lato, sans-serif',
		sansSerif: 'Quicksand, sans-serif',
		size: '17px',
		lineHeight: '26px',
	},
	colors: {
		blueDefault: '#385565',
		blueLight: '#005584',
		blueDark: '#131d23',
		hilite: '#604656',

		textColor: '#131d23',
		linkColor: '#005584',
		linkHoverColor: '#131d23',

		black: '#000',
		darkgray: '#222',
		mediumgray: '#666',
		lightgray: '#aaa',
		palegray: '#efefef',
		white: '#fff',
	},
	device: {
		desktopL: `(max-width: ${size.desktop})`,
		desktop: `(max-width: ${size.desktop})`,
		laptopL: `(max-width: ${size.laptopL})`,
		laptop: `(max-width: ${size.laptop})`,
		tablet: `(max-width: ${size.tablet})`,
		mobileL: `(max-width: ${size.mobileL})`,
		mobileM: `(max-width: ${size.mobileM})`,
		mobileS: `(max-width: ${size.mobileS})`,

		// mobileS: `(min-width: ${size.mobileS})`,
		// mobileM: `(min-width: ${size.mobileM})`,
		// mobileL: `(min-width: ${size.mobileL})`,
		// tablet: `(min-width: ${size.tablet})`,
		// laptop: `(min-width: ${size.laptop})`,
		// laptopL: `(min-width: ${size.laptopL})`,
		// desktop: `(min-width: ${size.desktop})`,
		// desktopL: `(min-width: ${size.desktop})`
	},
	transitions: {
	  speed: '300ms',
	}
}

export default StyleGuide





// export type Color = Keys<typeof styleGuide.colors>

// export type FontSize = Keys<typeof styleGuide.fonts.sizes>

