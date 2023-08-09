import React from 'react'
import './skill.css'
import JAVA from '../../assests/skillImage/download.png'
import C from '../../assests/skillImage/c.png'
import Cplus from '../../assests/skillImage/c++.png'
import Python from '../../assests/skillImage/python.png'
import JavaScript from '../../assests/skillImage/javascript.png'
import html from '../../assests/skillImage/html.png'
import css from '../../assests/skillImage/css.png'
import react from '../../assests/skillImage/react.png'
import node from '../../assests/skillImage/node.png'
import mongo from '../../assests/skillImage/mongo.png'
import mysql from '../../assests/skillImage/mysql.png'
import excel from '../../assests/skillImage/excel.png'
import tableau from '../../assests/skillImage/tableau.png'
import powerbi from '../../assests/skillImage/powerbi.png'
import celonis from '../../assests/skillImage/celonis.png'
import r from '../../assests/skillImage/r.png'
import aws from '../../assests/skillImage/aws.png'
import googlecloud from '../../assests/skillImage/googlecloud.png'

import {BsPatchCheckFill} from 'react-icons/bs'
function Skill() {
  return (
   <section id='Skill'>
    <h2>Skills</h2>
    <ul className='skills-image'>
      <li><img className="image-src" src={JAVA} alt="Java"/></li>
      <li><img className="image-src" src={C} alt="C"/></li>
      <li><img className="image-src" src={Cplus} alt="C++"/></li>
      <li><img className="image-src" src={Python} alt="Python"/></li>
      <li><img className="image-src" src={JavaScript} alt="JavaScript"/></li>
      <li><img className="image-src" src={html} alt="HTML"/></li>
      <li><img className="image-src" src={css} alt="CSS"/></li>
      <li><img className="image-src" src={react} alt="React"/></li>
      <li><img className="image-src" src={node} alt="Node"/></li>
      <li><img className="image-src" src={mongo} alt="Mongo" /></li>
      <li><img className="image-src" src={mysql} alt="Mysql"/></li>
      <li><img className="image-src" src={excel} alt="Excel"/></li>
      <li><img className="image-src" src={tableau} alt="Tableau"/></li>
      <li><img className="image-src" src={powerbi} alt="PowerBI"/></li>
      <li><img className="image-src" src={celonis} alt="Celonis"/></li>
      <li><img className="image-src" src={r} alt="R"/></li>
      <li><img className="image-src" src={aws} alt="AWS"/></li>
      <li><img className="image-src" src={googlecloud} alt="Google-Cloud"/></li>
    </ul>
   </section>
  )
}

export default Skill