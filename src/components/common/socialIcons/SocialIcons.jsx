import { IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const SocialIcons = () => {
  return (
    <>
      <IconButton>
        <FacebookRoundedIcon sx={{ color: "#ECE5D1" }} />
      </IconButton>
      <IconButton>
        <InstagramIcon sx={{ color: "#ECE5D1" }} />
      </IconButton>
      <IconButton>
        <YouTubeIcon sx={{ color: "#ECE5D1" }} />
      </IconButton>
      <IconButton>
        <PinterestIcon sx={{ color: "#ECE5D1" }} />
      </IconButton>
    </>
  );
};

export default SocialIcons;
