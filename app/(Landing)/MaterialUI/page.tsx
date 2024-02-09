import React from 'react'
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Link } from '@mui/material'
import ResponsiveAppBar from "@/components/MaterialUI/ResponsiveAppBar";

const MaterialUIBody = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Grid container spacing={4} className={"mt-12"}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Card {card}
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default MaterialUIBody