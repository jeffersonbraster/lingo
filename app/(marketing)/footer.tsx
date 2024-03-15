import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size="lg" variant="ghost" className='w-full'>
            <Image src="/hr.svg" alt='Croácia' height={32} width={40} className='mr-4 rounded-md' />
            Croácia
        </Button>

        <Button size="lg" variant="ghost" className='w-full'>
            <Image src="/es.svg" alt='Espanha' height={32} width={40} className='mr-4 rounded-md' />
            Espanha
        </Button>

        <Button size="lg" variant="ghost" className='w-full'>
            <Image src="/jp.svg" alt='Japão' height={32} width={40} className='mr-4 rounded-md' />
            Japão
        </Button>

        <Button size="lg" variant="ghost" className='w-full'>
            <Image src="/fr.svg" alt='França' height={32} width={40} className='mr-4 rounded-md' />
            França
        </Button>

        <Button size="lg" variant="ghost" className='w-full'>
            <Image src="/it.svg" alt='França' height={32} width={40} className='mr-4 rounded-md' />
            Italia
        </Button>
      </div>
    </footer>
  )
}

export default Footer