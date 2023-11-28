// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Material Kit 2",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/pages/landing-pages/about-us" },
        
      ],
    },
    
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "sponsorships", route: "/pages/landing-pages/contact-us" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "#" },
    //     { name: "privacy policy", href: "#" },
    //     { name: "licenses (EULA)", href: "#" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {" "}
      <MKTypography
        component="a"
        href="https://github.com/Ayush312003"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        ayushsingh312003@gmail
      </MKTypography>
      .
    </MKTypography>
  ),
};
