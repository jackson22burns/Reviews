import { useEffect } from "react";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductions } from "../actions";
import { Card } from "./Card";
import {NavBar} from './NavBar';


export function Productions(props) {


  const [searchResult, setSearchResult] = useState("");
  const [searchCriteria, setCriteriaResult] = useState("");

  let productions = useSelector(state => state.productions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductions());
  }, [dispatch]);


  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchResult(e.target.value)
  }

  const handleCriteriaChange = (e) => {
    e.preventDefault();
    setCriteriaResult(e.target.value)
  }
  //console.log(searchCriteria);
  if(searchResult.length > 0) {
    productions = productions.filter((prod) => {
      if(searchCriteria === "title") {
        return prod.p_name.toLowerCase().includes(searchResult.toLowerCase())
      } else if(searchCriteria === "genre") {
        return prod.p_genre.toLowerCase().includes(searchResult.toLowerCase())
      } else if(searchCriteria === "production type") {
        return prod.p_type.toLowerCase().includes(searchResult.toLowerCase())
      } else {
        return prod.p_name.toLowerCase().includes(searchResult.toLowerCase())
      }
    });
  }

  return (
    <div className = "page">
      <NavBar/>
      <br/>
      <div className = "prodContainer">
        <div className = "lookup">
          <label> Search Criteria: </label>
          <select className= "selectCriteria" onChange ={handleCriteriaChange} >
            <option value="prod">production type</option>
            <option value="title">title</option>
            <option value="genre">genre</option>
          </select>
          
          <br/>

          <input onChange ={handleSearchChange} 
                className = "searchBox" 
                type='Text' 
                placeholder = "Enter the production title"
                value = {searchResult}
          />
        </div>
        <div className = "cardContainer">
          {productions.map((p) => {
            return (
                <Card key={p.p_id} card={p}><Link to={`/productions`}></Link></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}