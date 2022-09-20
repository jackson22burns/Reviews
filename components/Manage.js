import {Entry} from './Entry';
import { useEffect } from "react";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductions, newProduction } from "../actions";
import {NavBar} from './NavBar';

export function Manage(props) {

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [genre, setGenre] = useState("");
    const [score, setScore] = useState("");
    const [summary, setSummary] = useState("");

    let productions = useSelector(state => state.productions);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProductions());
    }, [dispatch]);

    return (
      <div className = "page">
        <NavBar/>
        <div className = "manageContainer">
          <br/>
          <div className="infoBox">
            <div className = "productionForm">
              <h2>Add a new production to your bank, king </h2>
              <label htmlFor="prod">Production Title</label>
              <input type="text" id="ent" value={title} onChange={event => setTitle(event.target.value)}></input>

              <label htmlFor="type">Show or Movie?</label>
              <input type="text" id="ent" value={type} onChange={event => setType(event.target.value)}></input>

              <label htmlFor="prod">Genre</label>
              <input type="text" id="ent" value={genre} onChange={event => setGenre(event.target.value)}></input>

              <label htmlFor="type">Rating (1-10)</label>
              <input type="text" id="ent" value={score} onChange={event => setScore(event.target.value)}></input>

              <label htmlFor="prod">Summary</label>
              <input type="text" id="ent" value={summary} onChange={event => setSummary(event.target.value)}></input>

              <br></br>
              <button type="submit" form="form1" value="Submit" onClick ={()=>{
                dispatch(newProduction(title, type, genre, score, summary))
              }}>Add Production</button>

            </div>
          </div>
          <div className = "cardContainer">
            {productions.map((p) => {
              //console.log(p.p_id);
              return (
                  <Entry key={p.p_id} entry={p}><Link to={`/manage`}></Link></Entry>
              );
            })}
          </div>
        </div>
      </div>

    );
  }