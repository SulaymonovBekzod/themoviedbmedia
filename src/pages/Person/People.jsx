import React, { useContext, useState, useEffect } from 'react';
import personmovie from '../../repository/personmovie';
import { LangContext } from '../../components/Context/Context';
import { useParams } from 'react-router-dom';
import "./People.css"

export default function People() {
    const [personpeople, setPersonpeople] = useState();
    const { language } = useContext(LangContext);
    const param = useParams();

    async function getPeopleById() {
        try {
            const response = await personmovie.getMoviesByName(`${param.id}?language=${language}-US, 'people'`);
            setPersonpeople(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPeopleById();
    }, [language]);

    return (
        <div className='people_container'>
            <div className='people_row'>
                <div>
                    <img className='people_img' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${personpeople?.profile_path}`} alt="" />
                </div>
                <div className='people_text_big'>
                    <h1 className='person_title'>{personpeople?.name}</h1>
                    <p className='person_title'>{personpeople?.title}</p>
                    <h4 className='people_biography'>Biography</h4>
                    <p className='person_title3'>{personpeople?.biography}</p>
                    <img className='people_img' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${personpeople?.poster_path}`} alt="" />
                </div>
            </div>
        </div>
    );
}