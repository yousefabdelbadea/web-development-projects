import React from "react"
import Style from './Card.module.css';
import { Link } from "react-router-dom";
import backupImage from "../../assets/Images/backup.png"

export default function Card({movie}) {

  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path?  `https://image.tmdb.org/t/p/w500/${poster_path}` : backupImage;

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg " src={image} alt="" />
      </Link>
      <Link to={`/movie/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {original_title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {overview}
      </p>
    </div>
  );
};

