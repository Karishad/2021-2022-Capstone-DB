import React, { useEffect } from 'react';
import axios from "./axios"; 

//TODO save response as object then output on homepage
//useState for object

export default function HomePage() {
    useEffect(() => {
        async function getAllCourses() {
            try {
              const res = await axios.get('/courses');
              console.log(res.data);
            } catch (err) {
              console.error(err);
            };
          };

        getAllCourses();
    });

    return (
        <div className="Homepage">
            Display database pdfs
        </div>

    )
}
