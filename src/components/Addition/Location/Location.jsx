import React, { useEffect } from 'react';
import { Container } from './Location.styled';

export const Location = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40593.41729990386!2d30.201883049919157!3d50.513918600187594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3216e94dd5db%3A0x5ce36944e7698f34!2sIrpin%2C%20Kyiv%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sin!4v1696939766189!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
};
