import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios"


import {
      Typography,
      Box,
      Card,
      CardMedia,
      CardContex,
      Container,
      Button,
} from "@mui/material"


export default function DetallePelicula() {
      const { id } = useParams()
      const [pelicula, setPelicula] = useState(null)

      useEffect(() => {
            const fetchPelicula = async () => {
                  try {
                        const res = await axios.get(`movie/${id}`);
                        setPelicula(res.data)
                  } catch (error) {
                        console.log("error cargando detalle de PELICULA", error)
                  }
            }
            fetchPelicula()
      },[id])





};
