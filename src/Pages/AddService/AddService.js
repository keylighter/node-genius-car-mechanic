import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
        console.log(data);
    };

    return (
        <div className='add-service'>
            <h3>Lets Add some services</h3>

            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <input className='py-4' {...register("description")} placeholder='description' />
                <input type="number" placeholder='price' {...register("price")} />
                <input placeholder='image url'  {...register("image")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;