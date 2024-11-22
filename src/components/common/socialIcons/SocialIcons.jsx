import { IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PropTypes from "prop-types";

const SocialIcons = ({ color }) => {
  const iconStyle = { color: color || "inherit" };
  return (
    <>
      <IconButton style={iconStyle}>
        <FacebookRoundedIcon />
      </IconButton>
      <IconButton style={iconStyle}>
        <InstagramIcon />
      </IconButton>
      <IconButton style={iconStyle}>
        <YouTubeIcon />
      </IconButton>
      <IconButton style={iconStyle}>
        <PinterestIcon />
      </IconButton>
    </>
  );
};

SocialIcons.propTypes = {
  color: PropTypes.string,
};

export default SocialIcons;
