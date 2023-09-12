import React from 'react';
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Typography, Stack } from '@mui/material';
import {FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    
  return (
    <>
      <div className='footer'>
        <span>
          <Stack direction='row' alignItems='center' gap={1}>
            <Typography sx={{ fontSize: '1rem' }}>Made using:</Typography>
            <Typography sx={{ fontSize: '1rem' }}>
              <Link
                color={{ color: 'rgb(49, 49, 49)' }}
                underline='hover'
                href='https://unsplash.com/'
                target='_blank'
              >
                Unsplash
              </Link>
            </Typography>
          </Stack>
        </span>
        <span>
          <Stack direction='row' alignItems='center' gap={1}>
          <Typography sx={{ fontSize: '1rem' }}>Rodrigo</Typography>
            <Link
              color={{ color: 'black' }}
              underline='hover'
              href='https://github.com/Rodrigo300184'
              target='_blank'
            >
              <GitHubIcon fontSize='medium'  />
            </Link>
            
            <Link
              sx={{ paddingTop: "1.3px"}}
              href='https://www.linkedin.com/in/rodrigo-mart%C3%ADnez-ba633993/'
              target='_blank'
            >
              <FaLinkedin fontSize='25px' color="black"  />
            </Link>
          </Stack>
        </span>
      </div>
    </>
  )
}

