import React from "react";
import courses from "../courses";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function MyCard(){
    return (
        <>
            <Box
          sx={{
            bgcolor: 'text.disabled',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm"
          
          >
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              
            >
              Select the course
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Offers over 100 different courses ranging in over 25 domains 
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} columns={16}>
            {courses.map((course) => (
              <Grid item key={course} xs={12} sm={6} md={4}>
                <Card
                 sx={{ height: '100%',display: 'flex',flexDirection: 'column',borderRadius: '10px', ':hover': {boxShadow: 20}}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image={course.imageURL}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.name}
                    </Typography>
                    <Typography>
                      {course.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Purchase</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </>
    );
}

export default MyCard;
  