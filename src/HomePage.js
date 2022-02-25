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
            <div className='pdf1'>PDF 1</div>
            <div className='pdf2'>PDF 2</div>
            <div className='pdf3'>PDF 3</div>
            <div className='pdf4'>PDF 4</div>
            <div className='pdf5'>PDF 5</div>
            <div className='pdf6'>PDF 6</div>
            <div className='pdf7'>PDF 7</div>
        </div>

    )
}
