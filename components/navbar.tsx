import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/concepts"><a>Concepts</a></Link></li>
        {/* Add other links as needed */}
      </ul>
      <style jsx>{`
        nav {
          background-color: #413C58;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          margin: 0;
        }
        a {
          color: #F0F0F0;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
