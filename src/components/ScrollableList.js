import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { getTempIcon } from "../utils/utils";

const styles = {
  container: {
    flexGrow: 1,
    pb: 1,
    width: "30%",
    position: "fixed",
    zIndex: 3,
    top: (theme) => theme.sizing(60),
    backgroundColor: "background.default",
    "& .MuiTabs-scroller": {
      p: "5px 0 25px 0"
    }
  },
  tabs: {
    "&.MuiTabs-flexContainer": {
      gap: 10
    }
  },
  card: (theme) => ({
    width: theme.spacing(22),
    height: theme.spacing(30),
    ml: 3,
    mr: 3,
    p: theme.sizing(4),
    "&.MuiCard-root": {
      backgroundColor: "background.gray",
      borderRadius: theme.spacing(2.5)
    }
  }),
  label: (theme) => ({
    width: theme.spacing(20),
    textAlign: "center"
  }),
  blankCard: {
    alignItems: "center",
    justifyContent: "center"
  },
  actionArea: {
    height: "100%",
    pt: (theme) => `${theme.sizing(4)} !important`,
    "&.MuiCardContent-root": {
      p: 1
    },
    "&.MuiCardActionArea-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pt: 2
    }
  },
  image: (theme) => ({
    width: "100%",
    height: "63%",
    color: "text.primary",
    borderRadius: theme.sizing(10),
    backgroundColor: "background.default",
    img: {
      width: "50%",
      height: "50%",
      objectFit: "contain"
    }
  }),
  addIcon: (theme) => ({
    fontSize: theme.spacing(15),
    color: "background.darkGray"
  }),
  tempIcon: {
    height: "1.5em",
    width: "1.5em"
  }
};

const ScrollableList = ({ data, type, onChange, selected, onAddFormClick, disabled }) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    const iconComponent = getTempIcon(type);
    const newIcon = React.cloneElement(iconComponent, { sx: styles.tempIcon });
    setIcon(newIcon);
  }, [type]);
  return (
    <Box sx={[disabled ? { opacity: 0.7 } : { opacity: 1 }, styles.container]}>
      <Tabs
        variant="scrollable"
        value={selected}
        TabIndicatorProps={{
          style: {
            display: "none"
          }
        }}
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={[
          styles.tabs,
          {
            [`& .${tabsClasses.scrollButtons}`]: {
              margin: 0,
              "&.Mui-disabled": { opacity: 0.3 },
              "& svg": (theme) => ({ fontSize: theme.spacing(8) })
            },
            [`& .${tabsClasses.scroller}`]: {
              display: "flex"
            }
          }
        ]}>
        {data.map((tab, index) => {
          const isSelected = index === selected;
          return (
            <Card
              sx={styles.card}
              key={`${index + 1}-${tab.label}`}
              elevation={isSelected ? 1 : 0}
              raised={isSelected}
              onClick={() => (disabled || isSelected ? null : onChange(index))}>
              <CardActionArea sx={styles.actionArea}>
                <Avatar variant="rounded" alt={tab.label} src={tab.icon} sx={styles.image}>
                  {icon}
                </Avatar>
                <CardContent>
                  <Typography noWrap variant="body2" component="div" sx={styles.label}>
                    {tab.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
        <Card
          onClick={() => (disabled ? null : onAddFormClick())}
          sx={[styles.card, styles.blankCard, styles.unSelectedCard, styles.addIcon]}>
          <CardActionArea sx={[styles.actionArea, styles.addIcon]}>
            <CardMedia>
              <AddIcon sx={styles.addIcon} />
            </CardMedia>
          </CardActionArea>
        </Card>
      </Tabs>
    </Box>
  );
};

export default ScrollableList;
