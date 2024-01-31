import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
    return (
        <section className='about section-p bg-dark' id="about">
            <div className='container'>
                <div className='about-content grid text-center'>
                    <div className="content-left">
                        <img src={images.about_main_img} alt="" />
                    </div>
                    <div className='content-right'>
                        <div className='section-t'>
                            <h3>Sobre nós</h3>
                        </div>
                        <p className="text">Bem-vindo à nossa agência, sua parceira estratégica no universo digital! 
                        Somos uma equipe apaixonada e inovadora, especializada em oferecer soluções abrangentes de marketing digital para impulsionar a presença online e o sucesso de negócios de todos os portes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About