import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import click from '../Assets/sounds/click01.mp3'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  new Audio (click).play();

  return (
    <Button
      className="btn-primary"
      href='/PlayGame'
      active
      size="lg"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Play Game'}
    </Button>
  );
}


