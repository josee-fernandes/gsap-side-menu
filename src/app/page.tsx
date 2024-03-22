'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MenuItem } from '@/components/menu-item'
import { ArrowLeft } from '@phosphor-icons/react'
import Image from 'next/image'

import avatarImage from '@/assets/avatar.jpeg'

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const pageRef = useRef<HTMLDivElement>(null)

  const handleShowMenu = () => {
    setIsMenuVisible((oldIsMenuVisible) => !oldIsMenuVisible)
  }

  useGSAP(() => {
    if (pageRef) {
      if (isMenuVisible) {
        gsap.to(pageRef.current, {
          x: -300,
          duration: 0.5,
          ease: 'power3.inOut',
        })
      } else {
        gsap.to(pageRef.current, {
          x: 0,
          duration: 1,
          ease: 'power4.inOut',
        })
      }
    }
  }, [pageRef, isMenuVisible])

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div ref={pageRef} className="relative inline-flex h-full">
        <div className="min-h-screen w-screen bg-zinc-800 text-white">
          <nav className="flex h-24 items-center justify-between bg-black p-4">
            <div>
              <div>GSAP</div>
            </div>
            <div>
              <button
                className="h-14 w-14 overflow-hidden rounded-full border-2 border-white"
                onClick={handleShowMenu}
              >
                <Image src={avatarImage} alt="" />
              </button>
            </div>
          </nav>
        </div>
        <aside className="w-[300px] bg-pink-500 p-4">
          <button
            className="group flex items-center gap-2 rounded p-4 text-white transition-all"
            onClick={handleShowMenu}
          >
            <ArrowLeft
              className="h-4 w-4 transition-all group-hover:-translate-x-3"
              weight="bold"
            />{' '}
            Close Menu
          </button>
          <ul className="flex flex-col gap-4">
            <MenuItem href="#">Settings</MenuItem>
            <MenuItem href="https://gsap.com/" isExtern>
              GSAP
            </MenuItem>
            <MenuItem href="https://nextjs.org/" isExtern>
              NEXT
            </MenuItem>
            <MenuItem href="https://tailwindcss.com/" isExtern>
              Tailwind
            </MenuItem>
            <MenuItem href="#">Support</MenuItem>
          </ul>
        </aside>
      </div>
    </div>
  )
}
