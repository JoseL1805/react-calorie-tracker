import { useReducer } from 'react';
import './App.css'
import { Form, ActivityList } from './components';
import { activityReducer, initialState } from './reducers/activity-reducer';

function App() {

    const [state, dispath] = useReducer(activityReducer, initialState);

    return (
        <>  
            <header className='bg-lime-600 py-3 px-3'>
                <div className='max-w-3xl mx-auto flex justify-between'>
                    <h1 className='w-full text-center text-lg font-bold text-white uppercase'> contador de calorias</h1>
                </div>
            </header>    


            <section className='bg-lime-500 gap-30 py-10 px-20'>
                <Form dispath={dispath} state={state}/>
            </section>  

            <section className='p-10 mx-auto max-w-4xl'>
                <ActivityList
                    activities={state.activities}
                    dispath={dispath}
                />    
            </section>  


        </>
    )
}

export default App
