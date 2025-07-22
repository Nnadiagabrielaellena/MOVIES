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
      }, [id])
      if (!pelicula) return <p>Cargando detalles..</p>

      return (
            <Container>
                  <Card>
                        <CardMedia
                              component="img"
                              height="500"
                              image={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`}
                              alt={pelicula.title}
                        />

                        <CardContex>
                              <Typography variant="h4" gutterBottom>
                                    {pelicula.title}
                              </Typography>
                              <Typography variant="body1" sx={{ mt: 2 }}>
                                    {pelicula.overview}
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 2 }}>
                                    Fecha de estreno: {pelicula.release_date}
                              </Typography>
                              <Typography variant="body2">
                                    Puntuación: {pelicula.vote_average}
                              </Typography>
                        </CardContex>


                  </Card>
                  <Button variant="contained" sx={{ mt: 3 }} href="/">
                        Volver al Inicio
                  </Button>







            </Container>
      )



};
