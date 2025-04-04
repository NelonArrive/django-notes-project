import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	variable: '--font-poppins',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Best one for notes from Nelon Arrive'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
