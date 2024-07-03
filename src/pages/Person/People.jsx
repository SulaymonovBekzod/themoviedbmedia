import React, { useContext, useState, useEffect } from "react";
import personmovie from "../../repository/personmovie";
import { LangContext } from "../../components/Context/Context";
import { useParams } from "react-router-dom";
import "./People.css";

export default function People() {
    const [personpeople, setPersonpeople] = useState();
    const [popularPeople, setPopularPeople] = useState([]);
    const { language } = useContext(LangContext);
    const { id } = useParams();

    async function getPeopleByID() {
        try {
            const response = await personmovie.getMoviesByName(`${id}?language=${language}-US&page=1, "people"`);
            setPersonpeople(response);
            console.log("Person by ID:", response);
        } catch (error) {
            console.log(error);
        }
    }

    async function getPopularPeople() {
        try {
            const response = await personmovie.getMoviesByName(`popular?language=${language}-US&page=1, "people"`);
            let selected = response.results.filter((person) => person.id == id)
            setPopularPeople(selected[0]);
            console.log(selected);
            console.log("Popular People:", response.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPeopleByID();
    }, [language, id]);

    useEffect(() => {
        getPopularPeople();
    }, [language]);

    return (
        <div className="people_container">
            <div className="people_row">
                <div>
                    <img
                        className="people_img"
                        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${personpeople?.profile_path}`}
                        alt=""
                    />
                </div>
                <div className="people_text_big">
                    <h1 className="person_title">{personpeople?.name}</h1>
                    <p className="person_title">{personpeople?.title}</p>
                    <h4 className="people_biography">Biography</h4>
                    <p className="person_title3">{personpeople?.biography}</p>
                </div>
            </div>
            <div>
                <h2>Known For</h2>
                <div className="popular_people">
                    {popularPeople.known_for?.map((item, index) => (
                        <div className="popular_person" key={index}>
                            <img className="known_img" src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
                            <p className="known_title">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}