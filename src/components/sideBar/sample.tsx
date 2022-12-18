import React from "react";
import { makeStyles } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  list: {
    width: 240,
  },
}));

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer
        sx={{
          width: 240,
          background: "linear-gradient(45deg, #43a047 30%, #66bb6a 90%)",
        }}
        variant="permanent"
        anchor="left"
      >
        <List
          sx={{
            width: 240,
          }}
        >
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          sx={{
            width: 240,
          }}
        >
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
