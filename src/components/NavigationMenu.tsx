'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineHeart, HiOutlineAcademicCap, HiOutlineChartBar, HiOutlineInformationCircle, HiOutlineHeart as HiSolidHeart, HiOutlineVideoCamera, HiMenuAlt3, HiX } from 'react-icons/hi'
import Introducao from './introducao'
import Selecionar from './selecionar'
import Anatomia from './anatomia'
import Circulacao from './circulacao'
import Dados from './dados'
import Cuidados from './cuidados'
import Videos from './videos'

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuItems = [
    { name: 'Introdução', icon: HiOutlineAcademicCap, href: '#introducao' },
    { name: 'Anatomia do Coração', icon: HiOutlineHeart, href: '#anatomia' },
    { name: 'Circulação Sanguínea', icon: HiOutlineChartBar, href: '#circulacao' },
    { name: 'Dados Importantes', icon: HiOutlineInformationCircle, href: '#dados' },
    { name: 'Cuidados e Exercícios', icon: HiSolidHeart, href: '#cuidados' },
    { name: 'Vídeos Explicativos', icon: HiOutlineVideoCamera, href: '#videos' },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case '#introducao':
        return <Introducao />           
      case '#anatomia':
        return < Anatomia />
      case '#circulacao':
        return < Circulacao />
      case '#dados':
        return < Dados />
      case '#cuidados':
        return < Cuidados />
      case '#videos':
        return < Videos />
      default:
        return < Selecionar />
    }
  }

  return (
    <div>
      <nav className="p-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-opacity-50 backdrop-blur-lg shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <HiOutlineHeart className="h-8 w-8" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveSection(item.href)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out flex items-center bg-opacity-0 hover:bg-white hover:bg-opacity-10"
                    >
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-red-200 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
              >
                <span className="sr-only">Abrir menu principal</span>
                {isOpen ? (
                  <HiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveSection(item.href)
                    setIsOpen(false)
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition duration-150 ease-in-out flex items-center"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div>
        {renderContent()}
      </div>
    </div>
  )
}