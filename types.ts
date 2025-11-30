import React from 'react';

export interface Ministry {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}