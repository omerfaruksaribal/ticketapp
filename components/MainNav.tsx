import Link from 'next/link';

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">Main Page</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">Logout</Link>
        <Link href="/">Dark</Link>
      </div>
    </div>
  );
};

export default MainNav;
