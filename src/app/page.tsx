// src/app/home/page.js
// import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="home-container">
        <h1>Welcome to the Next.js App!</h1>
        <p>This is the homepage of your Next.js application.</p>

        {/* Image component */}
        {/* <Image
          src="/images/your-image.jpg"
          alt="Home Image"
          width={500}
          height={300}
          priority
        /> */}

        <div className="links">
          <Link href="/auth/login">Go to Login</Link>
          <Link href="/auth/register">Go to Register</Link>
        </div>
      </main>
    </div>
  );
}
