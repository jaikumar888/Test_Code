// @/components/DummyPage.js
import React from 'react'
import Layout from './Layout'
import BodyPage from '@/pages/bodyPage'

export default function DummyPage({ title }) {
    return (
        <Layout
            pageTitle={title}
        >
            <div className="flex">
                <div className="flex text-center">
                    <h1 className="text-center">{title}</h1>
                </div>
            </div>

            <div className="flex">
            <main className="flex min-h-screen flex-col items-center  p-2">
            <BodyPage></BodyPage>
            <BodyPage></BodyPage>
            <BodyPage></BodyPage>
           

           </main>
            </div>
            
        </Layout>
        
        
    )
}
