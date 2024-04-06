import './App.css'
import { Form } from './components';

function App() {



    return (
        <>  
            <header className='bg-lime-600 py-3 px-3'>
                <div className='max-w-5xl mx-auto flex justify-between'>
                    <h1 className='w-full text-center text-lg font-bold text-white uppercase'> contador de calorias</h1>
                </div>
            </header>    


            <section className='bg-lime-500 gap-30 py-10 px-20'>
                <Form/>
            </section>    


        </>
    )
}

export default App
