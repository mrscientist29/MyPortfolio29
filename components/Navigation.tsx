import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import styles from "./Navigation.module.css";
import { navigationLinks, socialLinks, personalInfo } from "../helpers/portfolioData";

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46.03.18 5.31.19 11.91c0 2.09.55 4.13 1.6 5.93L0 24l6.3-1.64a11.8 11.8 0 0 0 5.74 1.48h.05c6.6 0 11.97-5.37 11.99-11.97A11.94 11.94 0 0 0 20.52 3.48Zm-8.43 18.4h-.04a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.74.97.99-3.64-.24-.37a9.93 9.93 0 0 1-1.55-5.35C2.09 6.41 6.53 1.99 12.03 2c5.5.02 9.95 4.49 9.93 9.98-.02 5.48-4.49 9.9-9.87 9.9ZM17.3 14.22c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.15-.18.2-.35.22-.64.07-.29-.15-1.21-.44-2.3-1.41-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.35.44-.52.15-.18.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.29-1.05 1.03-1.05 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.17 4.56.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.59-.09 1.73-.71 1.97-1.4.24-.7.24-1.31.17-1.44-.07-.13-.26-.2-.55-.35Z"
      fill="currentColor"
    />
  </svg>
);

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top of the page, no section is active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    // Set initial active section based on hash
    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return <Instagram size={20} />;
      case "facebook":
        return <Facebook size={20} />;
      case "twitter":
        return <Twitter size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "whatsapp":
        return <WhatsappIcon size={20} />;
      default:
        return null;
    }
  };

  const handleHashClick = (hash: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = hash.substring(1); // Remove the # symbol
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Update URL hash without triggering page reload
      window.history.pushState(null, "", hash);
      setActiveSection(targetId);
    }
  };

  const isActiveLink = (linkHash: string, linkType: string) => {
    if (linkType === "hash") {
      const sectionId = linkHash.substring(1); // Remove # symbol
      return activeSection === sectionId;
    }
    return false;
  };

  const renderNavigationLink = (link: any) => {
    const isActive = isActiveLink(link.hash, link.type);
    
    if (link.type === "external") {
      return (
                <a
          key={link.name}
          href={link.hash}
          className={styles.navLink}
        >
          {link.name}
        </a>
      );
    }

    if (link.type === "hash") {
      return (
        <a
          key={link.name}
          href={link.hash}
          onClick={(e) => handleHashClick(link.hash, e)}
          className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
        >
          {link.name}
        </a>
      );
    }

    // Fallback for any remaining route types (shouldn't be used now)
    return (
      <Link
        key={link.name}
        to={link.hash}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {personalInfo.name}
      </Link>
      
      <nav className={styles.nav}>
        {navigationLinks.map(renderNavigationLink)}
      </nav>

      <div className={styles.socialLinks}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={social.name}
          >
            {getSocialIcon(social.icon)}
          </a>
        ))}
      </div>
    </header>
  );
};