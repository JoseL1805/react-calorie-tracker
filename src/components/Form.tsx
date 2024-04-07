import {  useState, ChangeEvent, FormEvent, Dispatch,  } from 'react';
import { categories } from '../data/categories';
import { Activity as ActivityType, Activity } from '../types/index';
import { ActivityActions } from '../reducers/activity-reducer';

type FormpProps = {
    dispath: Dispatch<ActivityActions>
}

export const Form = ({dispath} : FormpProps) => {


    const [activity, setActivity] = useState<ActivityType>({
        category: 1,
        calories: 0,
        name: ''
    })

    const handleChance = (e : ChangeEvent<HTMLSelectElement>  | ChangeEvent<HTMLInputElement>) => {
        // const isNumberField =  ['category', 'calories'].includes(e.target.value);
        let valueInput : number | string = e.target.value;
        if( e.target.type === 'number' ) { valueInput = +e.target.value; }
        setActivity({
            ...activity,
            [e.target.name] : valueInput
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity;
        return (name.trim() !== "" && calories > 0);
    }

    const handleSubmit = ( e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispath({ type: 'save-activity', payload: {newActivity : activity}})
        console.log("formulario enviado")
    }


    return (
        <>
            <form 
                className="space-y-5 bg-white shadow p-10 rounded-lg"
                onSubmit={ handleSubmit }
                >
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className='font-bold'>Categoria:</label>
                    <select 
                        onChange={handleChance}
                        name={'category'} 
                        value={activity.category} 
                        id="category" 
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white ">

                        {
                            categories.map( (category) => {
                                return (
                                    <option key={category.id} value={category.id}> {category.name} </option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="activity" className='font-bold'>Actividad:</label>
                    <input  
                        onChange={handleChance}
                        className='border border-slate-300 p-2 rounded-lg'
                        id="activity" 
                        type="text" 
                        name={'name'} 
                        value={activity.name} 
                        placeholder='Ej. Comida, Jugo de Naranja, Pesas, etc..'
                        />
                </div>


                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className='font-bold'>Calorias:</label>
                    <input  
                        onChange={handleChance}
                        className='border border-slate-300 p-2 rounded-lg'
                        id="calories" 
                        type="number" 
                        name={'calories'} 
                        value={ activity.calories} 
                        />
                </div>

                <input 
                    disabled={!isValidActivity()} 
                    type="submit" 
                    className=' disabled:opacity-60 bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white cursor-pointer' 
                    value={ activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio' } 
                    />
                
            </form>
        </>
    )
}
