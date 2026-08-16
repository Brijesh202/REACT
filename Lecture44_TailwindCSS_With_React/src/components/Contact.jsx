import React, { useState } from 'react'
import Modal from './Modal'

export function Contact(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
          <h1 className='text-xl'>Connect with us on {''} <a className="hover:text-blue-600" href="https://www.youtube.com/@procodrr" target='_blank'>Youtube</a></h1>
          <button onClick={() => setIsOpen(true)}>Open Popup</button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} 
            header={<p className='text-red-400 font-bold text-xl'>Hii</p>}
            footer={<div className='flex justify-end'>
                <button onClick={() => setIsOpen(false)} className='font-bold bg-slate-300 px-4 py-1 rounded'>Ok</button>
                </div>}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, impedit! Velit non exercitationem, vero earum delectus facilis? Dicta repellendus accusamus mollitia quis delectus, culpa deleniti, beatae autem, rem suscipit earum!</p>
          </Modal>
        </>
    )
}