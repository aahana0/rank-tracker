import { Inter } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import LoginScreen from './LoginScreen';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={inter.className}>
        {!session && (
          <div>
            <LoginScreen />
          </div>
        )}
        {session && (
          <div className="max-w-lg mx-auto"> 
            <Header/>
            {children}
          </div>
        )}
      </body>
    </html>
  );
}