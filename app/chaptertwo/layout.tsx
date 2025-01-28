export const metadata = {
    title: 'Chapter 2',
    description: 'One of the firsts anime project on Abstract Chain',
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
  