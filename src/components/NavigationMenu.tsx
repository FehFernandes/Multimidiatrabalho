'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineHeart, HiOutlineAcademicCap, HiOutlineChartBar, HiOutlineVideoCamera, HiMenuAlt3, HiX } from 'react-icons/hi'
import Introducao from './introducao'
import { FaDatabase } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import Selecionar from './selecionar'
import Anatomia from './anatomia'
import { MdBloodtype } from "react-icons/md";
import Circulacao from './circulacao'
import Dados from './dados'
import Cuidados from './cuidados'
import Videos from './videos'
import { motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuItems = [
    { name: 'Introdução', icon: FaHome, href: '#introducao' },
    { name: 'Anatomia do Coração', icon: HiOutlineHeart, href: '#anatomia' },
    { name: 'Circulação Sanguínea', icon: MdBloodtype, href: '#circulacao' },
    { name: 'Dados Importantes', icon: FaDatabase, href: '#dados' },
    { name: 'Cuidados e Exercícios', icon: CgGym, href: '#cuidados' },
    { name: 'Vídeos Explicativos', icon: HiOutlineVideoCamera, href: '#videos' },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case '#introducao':
        return <Introducao />
      case '#anatomia':
        return <Anatomia />
      case '#circulacao':
        return <Circulacao />
      case '#dados':
        return <Dados />
      case '#cuidados':
        return <Cuidados />
      case '#videos':
        return <Videos />
      default:
        return <Selecionar />
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    }),
  }

  return (
    <div>
      <nav className="p-2 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-opacity-50 backdrop-blur-lg shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <HiOutlineHeart className="h-8 w-8" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => setActiveSection(item.href)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out flex items-center bg-opacity-0 hover:bg-white hover:bg-opacity-10 ${activeSection === item.href ? 'bg-white bg-opacity-20' : ''}`}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-red-200 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Abrir menu principal</span>
                {isOpen ? (
                  <HiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setActiveSection(item.href)
                    setIsOpen(false)
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition duration-150 ease-in-out flex items-center ${activeSection === item.href ? 'bg-red-700' : ''}`}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  )
}
