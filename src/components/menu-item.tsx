import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface MenuItemProps extends PropsWithChildren {
  href: string
  isExtern?: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isExtern,
}) => {
  const isExternProps = {
    rel: isExtern ? 'noopener noreferrer' : '',
    target: isExtern ? '_blank' : '',
  }

  return (
    <li className="group flex items-center gap-2 transition-all hover:-skew-x-6">
      <span className="block h-[5px] w-0 bg-white transition-all duration-200 group-hover:w-4" />
      <Link
        href={href}
        className="text-4xl font-black uppercase leading-8 transition-all group-hover:text-white"
        {...isExternProps}
      >
        {children}
      </Link>
    </li>
  )
}
