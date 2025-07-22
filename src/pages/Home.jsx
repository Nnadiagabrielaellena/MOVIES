import React from "react";
import { useMovies } from "../context/MovieContext"
import CarruselBanner from "../components/CarruselBanner"
import { CircularProgress } from "@mui/material";
import { Box, Grid } from "@mui/system";



export default function Home() {
      const {
            populares,
            mejoresPuntuadas,
            cargando,
            toggleFavorito,
            esFavorito,
      } = useMovies();

      if (cargando)
            return (
                  <Box texAlign="center" mt={5}>
                        <CircularProgress />
                  </Box>
            )
      return (
            < Box p={3} >
                  <CarruselBanner peliculas={populares.slice(0, 5)} />
                  <Grid container spacing={4} mt={4}>
                        <Grid item xs={12} md={6}>
                              <Typography variant="h5" gutterBottom textAlign="center">
                                    🎬 Populares
                              </Typography>
                              <Grid container spacing={2} justifyContent="center">
                                    {populares.slice(0, 6).map((peli) => (
                                          <Grid item xs={12} sm={6} key={peli.id}>
                                                <Link to={`/pelicula/${peli.id}`} style={{ textDecoration: "none" }}>
                                                      <Card>
                                                            <CardMedia
                                                                  component="img"
                                                                  height="300"
                                                                  image={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                                                                  alt={peli.title}
                                                            />
                                                            <CardContent>
                                                                  <Typography variant="body1" align="center">
                                                                        {peli.title}
                                                                  </Typography>
                                                                  <Box display="flex" justifyContent="center">
                                                                        <IconButton
                                                                              onClick={(e) => {
                                                                                    e.preventDefault(); // Evita redirigir al hacer clic en el corazón
                                                                                    toggleFavorito(peli);
                                                                              }}
                                                                        >
                                                                              {esFavorito(peli.id) ? (
                                                                                    <FavoriteIcon color="error" />
                                                                              ) : (
                                                                                    <FavoriteBorderIcon />
                                                                              )}
                                                                        </IconButton>
                                                                  </Box>
                                                            </CardContent>
                                                      </Card>
                                                </Link>
                                          </Grid>
                                    ))}
                              </Grid>
                        </Grid>


                  </Grid>



            </Box >
      )


}