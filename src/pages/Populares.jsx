import React, { useEffect, useState } from 'react';
import{ Grid,Paper, Typography, Card, CardMedia} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { use } from 'react';

export default function Populares(){
     const [peliculasPopulares, setPeliculasPopulares] = useState([])

useEffect(()=>{
      const fetchPopulares= async()=>{
            try {
                  const response = await axios.get('movie/popular');
        setPeliculasPopulares(response.data.results);
            } catch (error) {
                  console.error('Error al cargar películas populares:', error);    
            }
      }
      fetchPopulares()
},[])

}