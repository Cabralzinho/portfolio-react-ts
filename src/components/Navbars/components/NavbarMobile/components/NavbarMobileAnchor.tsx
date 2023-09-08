import { useHashChange } from '@/components/Navbars/hooks/useHashChange';
import { HTMLAttributes } from 'react';

type NavbarAnchorProps = {
  href: string,
  text: string,
  index: number
}& HTMLAttributes<HTMLLIElement>

export const NavbarMobileAnchor = ({
  className,
  href,
  text,
  index
}: NavbarAnchorProps) => {
  const hash = useHashChange();
  const hashMatched = hash === href

  return (
    <li className="flex">
      <a
        style={{animationDelay: `${index * 0.2}s`}}
        className={`${className} ${hashMatched ? "text-indigo-600" : null} `}
        href={href}>
        {text}
      </a>
    </li>
  )
}
