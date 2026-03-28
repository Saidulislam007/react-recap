import React, { use } from 'react';

const Models = ({ modelsPromise }) => {
    const models = use(modelsPromise);
    console.log(models);
    return (
        <div className='max-w-7xl mx-auto px-6 py-16 text-center'>
            <div>
                <h1 className='text-5xl'>Our Models</h1>
                <p className='mt-4'>Here are some of our latest models.</p>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    models.map((model) => (
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10 h-[160px] bg-gray-200 align-center flex justify-center">
                                <img
                                    src={model.image}
                                    alt="Shoes"
                                    className="rounded-xl w-[80px] h-[80px] mb-auto" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{model.title}</h2>
                                <p>{model.description}</p>
                                <h2 className="card-title">${model.price}/month</h2>
                                <div className="card-actions">
                                    <button className="btn text-white rounded-lg  w-full bg-red-500">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Models;