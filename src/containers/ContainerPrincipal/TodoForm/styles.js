import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  lista: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0",
    color: "#fff",
    backgroundColor: "#839bb7",
    borderRadius: "5px",
    padding: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "8px 0",
    padding: "10px",
    gap: "20px",
  },
 
}));

export default useStyles;
