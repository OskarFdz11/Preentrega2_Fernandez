import Grid from "@mui/material/Grid2";

const Saludo = ({ greetting }) => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#2F3227", padding: "10px 0" }}
      >
        <Grid item sx={{ margin: "0 10px" }}>
          <h1 style={{ color: "#DAD7CB" }}>{greetting}</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Saludo;
