import { Navbar,Footer } from '@/components';
import './globals.css'


export const metadata = {
  title: 'Car Rental',
  description: 'Discover the best car rental deals and discounts on your next trip with Car Rental. Reserve your ride and save today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
