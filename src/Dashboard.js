import React, { Component } from "react";
import "./Dashboard.css";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

class Dashboard extends Component {
  state = {
    email: "",
    uid: "",
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: "#7D19E5" }}>
          <Toolbar>
            <Grid justify="space-between" container spacing={24}>
              <Grid item>
                <Typography variant="h6" color="inherit" align="left">
                  SportMate
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  style={{ color: "#7D19E5", backgroundColor: "#FCD704" }}
                  color="inherit"
                  onClick={() => {
                    localStorage.setItem("loggedIn", "false");
                    this.setState({
                      email: "",
                      uid: ""
                    });
                    this.props.SignInHandler(this.state);
                  }}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <div style={styles.card}>
          <Paper>
            <AppBar position="static">
              <div style={{ backgroundColor: "#7D19E5" }}>
                <Grid
                  justify="space-between"
                  alignItems="center"
                  container
                  spacing={24}
                >
                  <Grid item style={{ margin: 10, marginLeft: 20 }}>
                    <Typography variant="h6" color="inherit" align="left">
                      Your Events
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginRight: 20
                    }}
                  >
                    <Button
                      style={{ color: "#7D19E5", backgroundColor: "#FCD704" }}
                      color="inherit"
                      onClick={() => {}}
                    >
                      Add Event
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <Tabs
                variant="fullWidth"
                value={this.state.value}
                onChange={this.handleChange}
                style={{ background: "#7D19E5" }}
              >
                <Tab label="You created" />
                <Tab label="You joined" />
              </Tabs>
            </AppBar>
          </Paper>
        </div>

        <div style={styles.card}>
          <Paper>
            <AppBar position="static">
              <div style={{ backgroundColor: "#7D19E5" }}>
                <Grid
                  justify="space-between"
                  alignItems="center"
                  container
                  spacing={24}
                >
                  <Grid item style={{ margin: 10, marginLeft: 20 }}>
                    <Typography variant="h6" color="inherit" align="left">
                      All Events
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <Table className={styles.table}>
                <TableHead>
                  <TableRow style={{ backgroundColor: "black", height: 35 }}>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                    >
                      Sport
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                      align="right"
                    >
                      Location
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                      align="right"
                    >
                      Capacity
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                      align="right"
                    >
                      Time
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                      align="right"
                    >
                      Host
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id} style={{ backgroundColor: "white", height: 35 }}> 
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AppBar>
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = {
  table: {
    minWidth: 700
  },

  card: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: 900
  },

  bar: {
    backgroundColor: "#7D19E5"
  },

  root: {
    flex: 3
  },

  grow: {
    flex: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default Dashboard;
