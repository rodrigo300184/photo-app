import { Box } from "@mui/material";
import './noResult.css';

export  const NoResults = ()=> {
  return (
   <> <Box display="flex" justifyContent="center">
        {window.location.pathname === '/search'&&<h2 className="no-photos search">Sorry! No results were found</h2>}
        {window.location.pathname === '/favorites'&&<h2 className="no-photos">Sorry, no favorite photos yet!</h2>}
        </Box>
        <div className="no-result-image"></div>
        <Box display="flex" justifyContent="center">
      <p className="thanks-to">
        Icono de vector PNG diseñado por NikhilDesigner de{" "}
        <a href='https://es.pngtree.com/freepng/no-result-search-icon_6511543.html?sol=downref&id=bef' rel="noreferrer" target="_blank">
          Link
        </a>
      </p>
    </Box>
    </>
  );
}
