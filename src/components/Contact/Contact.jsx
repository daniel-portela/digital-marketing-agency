import React from 'react';
import "./Contact.css";
import images from '../../constants/images';
import { Formik } from 'formik';
import Info from './Info';
import Map from './Map';

const Contact = () => {
    return (
        <section className='contact section-p-top bg-black' id="contact">
            <div className='container'>
                <div className='contact-content grid text-center'>
                    <div className='contact-left'>
                        <div className='section-t'>
                            <h3>Vamos Conversar?</h3>
                            <p className='text'>Entendemos que cada cliente possui desafios únicos e aspirações específicas.
                                É por isso que convidamos você a dar o primeiro passo em direção a uma parceria personalizada, onde suas metas tornam-se nossa prioridade.</p>
                        </div>

                        <Formik
                            initialValues={{ name: "", email: '', address: '' }}
                            validate={values => {
                                const errors = {};

                                if (!values.name) {
                                    errors.name = "O nome é obrigatório";
                                } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                                    errors.name = "Formato de nome inválido";
                                }

                                if (!values.email) {
                                    errors.email = 'O e-mail é obrigatório';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Endereço de email invalido';
                                }

                                if (!values.address) {
                                    errors.address = "Endereço é necessário";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,

                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='form-elem'>
                                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className="form-control" />
                                        <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
                                    </div>

                                    <div className='form-elem'>
                                        <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control" />
                                        <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
                                    </div>

                                    <div className='form-elem'>
                                        <input type="text" name="address" onChange={handleChange} onBlur={handleBlur} value={values.address} className="form-control" />
                                        <span className='form-control-text'>{errors.address && touched.address && errors.address}</span>
                                    </div>

                                    <div className='flex flex-start'>
                                        <button type="submit" disabled={isSubmitting} className="submit-btn">Enviar</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                    <div className='contact-right'>
                        <img src={images.form_main_img} alt="" />
                    </div>
                </div>
            </div>

            <Map />
            <Info />
        </section>
    )
}

export default Contact
