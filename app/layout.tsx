import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lisa Mabley',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 