import { Box } from "@mui/material";
import './noResult.css';

export  const NoResults = ()=> {
  return (
   <> <Box display="flex" justifyContent="center">
        <h2>No hay fotos</h2>
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
