import React, { memo } from 'react';

const FooterSection = ({ title, links }) => (
  <nav>
    <h6 className="footer-title">{title}</h6>
    {links.map((link, index) => (
      <a key={index} className="link link-hover" href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
        {link}
      </a>
    ))}
  </nav>
);

const Footer = memo(() => {
  const sections = [
    {
      title: 'Services',
      links: ['Branding', 'Design', 'Marketing', 'Advertisement']
    },
    {
      title: 'Company',
      links: ['About us', 'Contact', 'Jobs', 'Press kit']
    },
    {
      title: 'Legal',
      links: ['Terms of use', 'Privacy policy', 'Cookie policy']
    }
  ];

  return (
    <footer className="footer flex justify-evenly bg-neutral text-neutral-content p-10">
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} links={section.links} />
      ))}
    </footer>
  );
});

export default Footer;