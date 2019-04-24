import React, { Component } from "react";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";

let id = 0;

function createData(sport, location, capacity, time, host) {
  id += 1;
  return { id, sport, location, capacity, time, host };
}

class TableView extends Component {
  state = {};

  getTableComponent(row) {
    console.log(row);

    return (
      <ExpansionPanel style={{ width: 900 }}>
        <ExpansionPanelSummary>
          <Grid
            justify="space-between"
            alignItems="left"
            container
            spacing={24}
          >
            <Grid item>
              <Typography align="left">{row.sport}</Typography>
            </Grid>
            <Grid item>
              <Typography align="left">{row.location}</Typography>
            </Grid>
            <Grid item>
              <Typography align="left">{row.capacity}</Typography>
            </Grid>
            <Grid item>
              <Typography align="left">{row.time}</Typography>
            </Grid>
            <Grid item>
              <Typography align="left">{row.host}</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  loadEvents = () => {
    var rows = [];
    if (this.props.events && this.props.type && this.props.email) {
      if (this.props.type == "created") {
        this.props.events.map(event => {
          if (event.host == this.props.email) {
            rows.push(event);
          }
        });
      } else if (this.props.type == "joined") {
        this.props.events.map(event => {
          event.people.map(person => {
            if (person == this.props.email && person != event.host) {
              rows.push(event);
            }
          });
        });
      } else {
        rows = this.props.events;
      }

      return rows.map(row => (
        <ExpansionPanel style={{ width: 900 }}>
          <ExpansionPanelSummary>
            <Grid
              justify="space-between"
              alignItems="left"
              container
              spacing={24}
            >
              <Grid item>
                <Typography align="left">{row.sport}</Typography>
              </Grid>
              <Grid item>
                <Typography align="left">{row.location}</Typography>
              </Grid>
              <Grid item>
                <Typography align="left">{row.capacity}</Typography>
              </Grid>
              <Grid item>
                <Typography align="left">{row.time}</Typography>
              </Grid>
              <Grid item>
                <Typography align="left">{row.host}</Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ));
    }
  };

  render() {
    return (
      <div>
        <ExpansionPanel style={{ width: 900, backgroundColor: "black" }}>
          <ExpansionPanelSummary>
            <Grid
              justify="space-between"
              alignItems="left"
              container
              spacing={24}
            >
              <Grid item>
                <Typography
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Sport
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Location
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Capacity
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Time
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                  align="left"
                >
                  Host
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        {this.loadEvents()}
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
  }
};

export default TableView;
