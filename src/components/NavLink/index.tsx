import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
};

export function NavLink({ title, path }: NavLinkProps) {
  const router = useRouter();
  
  const isActive = router.pathname === path;
  console.log(router.pathname);

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
