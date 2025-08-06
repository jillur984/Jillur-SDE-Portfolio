import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      icon: <FaGithub />,
      path: "https://github.com/jillur984",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/jillur2day/",
    },

    {
      icon: <FaYoutube />,
      path: "",
    },

    {
      icon: <FaTwitter />,
      path: "https://x.com/MohammadJillur5",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link className={iconStyles} key={index} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
