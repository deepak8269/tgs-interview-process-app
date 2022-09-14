import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const navStyle = {
  fontSize: 30
};

export const NavConfigs = [
  {
    name: "Profile",
    id: "profile",
    selected: true,
    endpoint: "/user/profile",
    icon: <PersonOutlineOutlinedIcon sx={navStyle} />
  },
  {
    name: "Experience",
    id: "experience",
    selected: false,
    endpoint: "/user/experience",
    icon: <WorkOutlineOutlinedIcon sx={navStyle} />
  },
  {
    name: "Projects",
    id: "projects",
    selected: false,
    endpoint: "/user/projects",
    icon: <FolderOutlinedIcon sx={navStyle} />
  },
  {
    name: "Certifications",
    id: "certifications",
    selected: false,
    endpoint: "/user/certifications",
    icon: <WorkspacePremiumIcon sx={navStyle} />
  },
  {
    name: "Skills",
    id: "skills",
    selected: false,
    endpoint: "/user/skills",
    icon: <ArchitectureOutlinedIcon sx={navStyle} />
  },
  {
    name: "Education",
    id: "education",
    selected: false,
    endpoint: "/user/education",
    icon: <SchoolOutlinedIcon sx={navStyle} />
  },
  {
    name: "Congratulation",
    id: "congrats",
    selected: false,
    endpoint: "/user/congrats"
  }
];
