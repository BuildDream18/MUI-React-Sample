import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

function Section({ image, title, content, imageAlignment }) {
  return (
    <div style={{ display: 'flex', flexDirection: imageAlignment === 'left' ? 'row' : 'row-reverse' }}>
      <div style={{ width: '40%', p: 3, display: 'flex', alignItems: 'center' }}>
        <img src={image} alt={title} style={{ width: "100%"}}/>
      </div>
      <div style={{ width: '60%' }}>
        <h3>{title}</h3>
        <p className='image-content'>{content}</p>
      </div>
    </div>
  );
}

const TemplatePage = ({ sections }) => {

  const renderSectionContent = (section, sectionKey) => {
    switch (sectionKey) {
      case 'home':
        return (
          <div style={{ backgroundImage: `url(${section.image})`, height: '700px' }} className="home-section">
            <div className="content">
              <h1>{section.title}</h1>
              <p>{section.content}</p>
            </div>
          </div>
        );
      case 'about':
      case 'faq':
      case 'blog':
      case 'contact':
        return (
          <div className="about-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        );
      case 'services':
        return (
          <div className="services-section">
            <h2>{section.title}</h2>
            {section.sections.map((subSection, subIndex) => (
              <Section key={subIndex} {...subSection} />
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="template-page">
      <CssBaseline />
      <Container maxWidth="lg">
        {Object.keys(sections).map((sectionKey, index) => {
          const section = sections[sectionKey];
          return (
            <div key={index}>
              <section id={sectionKey}>
                {renderSectionContent(section, sectionKey)}
              </section>
              <Divider variant="middle" />
            </div>
          );
        })}

      </Container>
    </div>
  );
};

export default TemplatePage;