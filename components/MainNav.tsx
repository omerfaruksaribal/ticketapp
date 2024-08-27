import Link from 'next/link';

const MainNav = () => {
  return (
    <div className="">
      <Link href="/">Main Page</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default MainNav;
