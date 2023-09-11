import './main.scss'
import { DM_Sans } from 'next/font/google'

const dm = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Task 2',
  description: 'Movie discovery web app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>{children}</body>
    </html>
  )
}
