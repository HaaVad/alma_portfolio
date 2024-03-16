import Link from 'next/link';

function Header() {

  return (
    <header 
    className="fade-in"
    >
        <Link href="/" className="w-min mx-auto" >
            <h1>Alma</h1>
            </Link>
    </header>
  );
};

export default Header;
