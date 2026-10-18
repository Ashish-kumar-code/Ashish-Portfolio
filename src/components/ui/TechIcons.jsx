import React from 'react';

/**
 * TechIcon — Official colored SVG logos for developer technologies
 * Styled to match the Magic UI portfolio skills presentation.
 */

export function TechIcon({ name, size = 16, className = '' }) {
  const norm = (name || '').toLowerCase().trim();

  // 1. JAVA
  if (norm.includes('java') && !norm.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8.85 17.82c0 .48 3.86.88 4.67.16.82-.71-.8-1.07-.8-1.07s1.39.24 2.82-.48c1.43-.72.63-1.4.63-1.4s.58.4 1.48.33c.91-.07 1.54-.86 1.54-.86s-.31.25-.86.32c-.55.08-1.12-.13-1.12-.13s1.29-.63 1.83-1.74c-.58.33-1.42.45-1.42.45s1.26-.94 1.26-2.12c0-.18-.03-.35-.08-.51 0 0-.25.59-.97 1.05-.72.46-1.57.53-1.57.53s.7-.58.82-1.43c.12-.86-.44-1.63-.44-1.63s-.08.6-.53 1.13c-.46.54-1.08.82-1.08.82s.43-.88.16-1.93c-.27-1.05-1.17-1.7-1.17-1.7s.07.67-.28 1.44c-.36.77-.96 1.34-.96 1.34s.22-1.13-.53-2.1c-.74-.98-1.77-1.39-1.77-1.39s.21.75-.15 1.77c-.36 1.02-.92 1.76-1.76 2.37-.84.6-1.61.9-1.61.9s.89-.1 1.74-.53c.85-.43 1.48-1.08 1.48-1.08s-.59 1.15-1.79 1.95c-1.2.79-2.34.98-2.34.98s1.08.13 2.32-.23c1.24-.36 2.11-.97 2.11-.97s-.81.9-2.07 1.57c-1.25.68-2.31.84-2.31.84s1.28.16 2.6-.14c1.33-.3 2.22-.84 2.22-.84s-.97.83-2.43 1.42c-1.47.59-2.61.64-2.61.64s1.45.19 3-.04c1.55-.24 2.58-.75 2.58-.75s-1.17.84-2.84 1.41c-1.67.57-2.91.54-2.91.54s1.61.27 3.39.02c1.78-.26 2.87-.76 2.87-.76s-.93.68-2.65 1.16c-1.72.48-2.94.4-2.94.4s1.55.33 3.4.15c1.86-.18 3.12-.66 3.12-.66s-1.14.73-3.15 1.12c-2.01.39-3.23.19-3.23.19s1.6.43 3.65.29c2.05-.14 3.36-.61 3.36-.61s-1.36.81-3.69 1.18c-2.33.37-3.7.07-3.7.07s1.85.54 4.18.39c2.34-.16 3.75-.68 3.75-.68z" fill="#E76F00"/>
        <path d="M16.92 19.34c3.48-.48 4.2-2.15 4.2-2.15s-.62.8-2.68 1.28c-2.05.48-4.48.51-6.72.2-2.24-.32-3.88-1.04-3.88-1.04s1.39.66 3.75.96c2.37.3 5.33-.25 5.33-.25z" fill="#007396"/>
      </svg>
    );
  }

  // 2. SPRING / SPRING BOOT
  if (norm.includes('spring')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.5 10.3c-.6-4.5-4.2-8.1-8.7-8.7C7.4 1 2.5 5.2 2 10.7c-.5 5.7 3.8 10.7 9.5 11.2 5.9.6 11-3.7 11.5-9.6.1-.7-.7-1.1-1.2-.6l-5.6 5.6c-.6.6-1.5.6-2.1 0l-3.3-3.3c-.6-.6-.6-1.5 0-2.1l7.3-7.3c.4-.4 1.1-.1 1.1.5v.3c0 2.2 1.8 4 4 4h.3c.6 0 .9.7.5 1.1l-2 2z" fill="#6DB33F"/>
      </svg>
    );
  }

  // 3. HIBERNATE / JPA
  if (norm.includes('hibernate') || norm.includes('jpa')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 3h5v7H4V3zm11 0h5v18h-5V3zM4 14h5v7H4v-7z" fill="#BCAE79"/>
        <path d="M9 10h6v4H9v-4z" fill="#59666C"/>
      </svg>
    );
  }

  // 4. MICROSERVICES
  if (norm.includes('microservice')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="5" r="3" fill="#4F8CFF"/>
        <circle cx="5" cy="18" r="3" fill="#10B981"/>
        <circle cx="19" cy="18" r="3" fill="#8B5CF6"/>
        <path d="M12 8v4m0 0l-5 3m5-3l5 3" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }

  // 5. PYTHON
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.37h5.02v.71H4.99S2 7.03 2 12.3c0 5.27 2.61 5.09 2.61 5.09h1.56v-2.18s-.09-2.61 2.57-2.61h4.94s2.48.04 2.48-2.43V4.48S16.54 2 11.91 2zm-2.73 1.54a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z" fill="#3776AB"/>
        <path d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.37h-5.02v-.71h7.02s2.99.33 2.99-4.94c0-5.27-2.61-5.09-2.61-5.09h-1.56v2.18s.09 2.61-2.57 2.61h-4.94s-2.48-.04-2.48 2.43v5.69S7.46 22 12.09 22zm2.73-1.54a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z" fill="#FFD43B"/>
      </svg>
    );
  }

  // 6. JAVASCRIPT
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M7 17.5c.8.5 1.7.8 2.5.8 1.4 0 2.1-.7 2.1-1.7 0-1.1-.7-1.5-1.9-2-.9-.4-1.8-.8-2.4-1.3-.7-.6-1-1.4-1-2.4 0-2 1.5-3.4 3.9-3.4 1 0 1.9.2 2.7.7l-.8 1.6c-.6-.4-1.3-.6-1.9-.6-1.2 0-1.9.6-1.9 1.5 0 .9.6 1.3 1.8 1.8 1 .4 1.9.9 2.5 1.5.7.7 1 1.5 1 2.5 0 2.1-1.6 3.6-4.3 3.6-1.2 0-2.3-.3-3.2-.8l.8-1.7zm10.7-9.4v8.2c0 1.9-.9 2.8-2.6 2.8-.7 0-1.5-.2-2-.5l.5-1.6c.4.2.9.4 1.4.4.9 0 1.2-.5 1.2-1.4V8.1h1.5z" fill="#000000"/>
      </svg>
    );
  }

  // 7. TYPESCRIPT
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M14.5 10.5h-5V8.2h12v2.3h-4.7V20h-2.3v-9.5zm-.3 4.5c.7.4 1.5.7 2.3.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.6-1.3-1.6-1.7-.8-.3-1.6-.7-2.1-1.1-.6-.5-.9-1.2-.9-2 0-1.7 1.4-2.8 3.4-2.8.9 0 1.7.2 2.4.6l-.6 1.4c-.6-.3-1.2-.5-1.7-.5-1 0-1.6.5-1.6 1.2 0 .7.5 1.1 1.5 1.5.9.3 1.7.7 2.2 1.2.6.5.9 1.3.9 2.2 0 1.8-1.4 3-3.8 3-1.1 0-2.1-.3-2.9-.7l.4-1.5z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 8. REACT
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.6"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.6"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.6"/>
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
      </svg>
    );
  }

  // 9. TAILWIND CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    );
  }

  // 10. VITE
  if (norm.includes('vite')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.5 4.5l-9.2 16.5c-.2.4-.8.4-1 0L2.5 4.5c-.3-.5.2-1.1.7-.9l8.6 3.4c.2.1.4.1.6 0l8.4-3.4c.6-.2 1 .4.7.9z" fill="url(#viteGradient)"/>
        <path d="M14.6 2.2l-5.8 4.2c-.3.2-.4.6-.2.9l1.6 3.6c.2.4.7.5 1 .2l2-1.7-1.3 5.4c-.1.4.3.7.6.5l5.2-6.5c.3-.4 0-.9-.5-.9l-2.4.1 1.2-4.3c.1-.4-.2-.8-.6-.8l-.8-.6z" fill="#FFD62E"/>
        <defs>
          <linearGradient id="viteGradient" x1="2.5" y1="4" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF"/>
            <stop offset="1" stopColor="#BD34FE"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 11. HTML / HTML5
  if (norm.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E34F26"/>
        <path d="M12 3.8v16.4l5.9-1.5L19.2 3.8H12z" fill="#EF652A"/>
        <path d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2H7.6l.4 4.5L12 18v-3.7z" fill="#EBEBEB"/>
        <path d="M12 7.7h4.3l-.4 4.3H12V7.7zm0 6.6v3.7l4-.9.3-3.6h-2.1l-.1 1.7-2.1.5v-1.4z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 12. CSS / CSS3
  if (norm.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6"/>
        <path d="M12 3.8v16.4l5.9-1.5L19.2 3.8H12z" fill="#33A9DC"/>
        <path d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2H7.6l.4 4.5L12 18v-3.7z" fill="#EBEBEB"/>
        <path d="M12 7.7h4.3l-.4 4.3H12V7.7zm0 6.6v3.7l4-.9.3-3.6h-2.1l-.1 1.7-2.1.5v-1.4z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 13. MYSQL
  if (norm.includes('mysql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18.8 9.3c-.6-.7-1.5-1.1-2.5-1.1-1.4 0-2.6.8-3.1 2-.5-1.2-1.7-2-3.1-2-1 0-1.9.4-2.5 1.1-.6.7-1 1.7-1 2.9 0 2.5 2 4.6 4.6 4.6.9 0 1.7-.2 2.4-.7.4.3.9.5 1.5.5 1.5 0 2.7-1.1 2.9-2.5.4-.1.8-.4 1-.8.4-.7.3-1.6 0-2.3-.2-.6-.4-1.1-.2-1.7z" fill="#00758F"/>
        <path d="M15.5 14.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#F29111"/>
      </svg>
    );
  }

  // 14. POSTGRESQL
  if (norm.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 15.3c-.8.2-1.6.3-2.4.2-1.9-.2-3.4-1.8-3.4-3.7 0-.5.1-1 .3-1.4.3-.8.9-1.4 1.7-1.8.8-.4 1.7-.5 2.6-.3.9.2 1.6.8 2 1.5.4.7.5 1.6.3 2.4-.2 1.3-1 2.5-2.1 3.1z" fill="#336791"/>
      </svg>
    );
  }

  // 15. SQL / SQLITE / DATABASE / DBMS
  if (norm.includes('sql') || norm.includes('dbms') || norm.includes('database')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4F8CFF"/>
        <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#4F8CFF" strokeWidth="1.8" fill="none"/>
        <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#4F8CFF" strokeWidth="1.8" fill="none"/>
      </svg>
    );
  }

  // 16. MONGODB
  if (norm.includes('mongo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2c-.3 0-.6.1-.8.3C10.5 3 6 8.5 6 13.5c0 3.6 2.7 6.5 6 6.5s6-2.9 6-6.5c0-5-4.5-10.5-5.2-11.2-.2-.2-.5-.3-.8-.3zm0 2.2c2.4 3.2 4.2 6.8 4.2 9.3 0 2.4-1.9 4.3-4.2 4.3s-4.2-1.9-4.2-4.3c0-2.5 1.8-6.1 4.2-9.3z" fill="#47A248"/>
      </svg>
    );
  }

  // 17. REDIS
  if (norm.includes('redis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M2.5 7.5L12 3l9.5 4.5v9L12 21l-9.5-4.5v-9z" fill="#DC382D"/>
        <path d="M12 3v9m0 9v-9m0 0l9.5-4.5M12 12L2.5 7.5" stroke="#FFFFFF" strokeWidth="1.2"/>
      </svg>
    );
  }

  // 18. DOCKER
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.96 5.37h2.24v2.17h-2.24V5.37zm-2.73 0h2.24v2.17h-2.24V5.37zm-2.73 0h2.24v2.17H8.5V5.37zm8.18 2.62h2.24v2.17h-2.24V7.99zm-2.73 0h2.24v2.17h-2.24V7.99zm-2.72 0h2.24v2.17h-2.24V7.99zm-2.73 0h2.24v2.17H8.5V7.99zm-2.73 0h2.24v2.17H5.77V7.99zm17.06 3.12c-.44-.32-1.42-.38-2.18-.08-.34.13-.67.33-.94.59-.28-.15-.65-.24-1.07-.24H2.43c-.45 0-.81.36-.81.81 0 3.32 1.39 6.22 4.22 7.74 1.34.72 2.87 1.07 4.57 1.07 6.42 0 11.23-4.58 11.75-9.39.04-.38-.28-.5-.33-.5z" fill="#2496ED"/>
      </svg>
    );
  }

  // 19. GIT
  if (norm === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.6 10.8l-8.4-8.4a1.8 1.8 0 0 0-2.5 0L8.4 4.7 11 7.3a2.3 2.3 0 0 1 2.8 2.8l2.6 2.6a2.3 2.3 0 1 1-1.3 1.3l-2.5-2.5v4.2a2.3 2.3 0 1 1-1.8 0V11a2.3 2.3 0 0 1-1.2-3L7.1 5.5 2.4 10.2a1.8 1.8 0 0 0 0 2.5l8.4 8.4a1.8 1.8 0 0 0 2.5 0l8.3-8.3a1.8 1.8 0 0 0 0-2z" fill="#F05032"/>
      </svg>
    );
  }

  // 20. GITHUB
  if (norm.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#24292F"/>
      </svg>
    );
  }

  // 21. POSTMAN
  if (norm.includes('postman')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
        <path d="M12 6l4 6h-3v6h-2v-6H8l4-6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 22. LINUX
  if (norm.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2c-2.8 0-4 2.2-4 5v3c-1.5.5-3 2-3 4.5 0 2.8 2.2 4.5 5 4.5.3 0 .7 0 1-.1.7 1.3 1.8 2.1 3 2.1 1.2 0 2.3-.8 3-2.1.3.1.7.1 1 .1 2.8 0 5-1.7 5-4.5 0-2.5-1.5-4-3-4.5V7c0-2.8-1.2-5-4-5z" fill="#222222"/>
        <ellipse cx="12" cy="14" rx="3.5" ry="5" fill="#FFFFFF"/>
        <circle cx="10" cy="7" r="1" fill="#FFD43B"/>
        <circle cx="14" cy="7" r="1" fill="#FFD43B"/>
        <path d="M10.5 9.5c.8.6 2.2.6 3 0l-1.5 2-1.5-2z" fill="#FFA500"/>
      </svg>
    );
  }

  // 23. VS CODE
  if (norm.includes('code') || norm.includes('vscode')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M17.5 2.5L5 12l12.5 9.5 4.5-2.2V4.7L17.5 2.5z" fill="#007ACC"/>
        <path d="M17.5 2.5L9.5 9 17.5 15.5V2.5z" fill="#1F9CF0"/>
        <path d="M5 12l4.5-3.5L5 5 2 6.5 5 12zm0 0l4.5 3.5L5 19l-3-1.5L5 12z" fill="#0065A9"/>
      </svg>
    );
  }

  // 24. INTELLIJ
  if (norm.includes('intellij')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#000000"/>
        <path d="M4 18h16v2H4v-2zm2-12h3v8H6V6zm5 0h7v2h-5v1h4v2h-4v1h5v2h-7V6z" fill="#FE315D"/>
      </svg>
    );
  }

  // 24b. ECLIPSE
  if (norm.includes('eclipse')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="9.5" fill="#2C2255"/>
        <path d="M4 10.5h16v1.4H4v-1.4zm0 2.8h16v1.4H4v-1.4zm2 2.8h12v1.4H6v-1.4zm2-8.4h8v1.4H8V7.7z" fill="#F7941E"/>
      </svg>
    );
  }

  // 24c. JUPYTER NOTEBOOK
  if (norm.includes('jupyter') || norm.includes('notebook')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3.5c-4.4 0-8 1.9-8 4.2 0 2.1 2.9 3.8 6.7 4.1-1.3-.4-2.2-1.3-2.2-2.3 0-1.5 2-2.7 4.5-2.7s4.5 1.2 4.5 2.7c0 1-.9 1.9-2.2 2.3 3.8-.3 6.7-2 6.7-4.1 0-2.3-3.6-4.2-8-4.2z" fill="#F37626"/>
        <path d="M12 20.5c4.4 0 8-1.9 8-4.2 0-2.1-2.9-3.8-6.7-4.1 1.3.4 2.2 1.3 2.2 2.3 0 1.5-2 2.7-4.5 2.7s-4.5-1.2-4.5-2.7c0-1 .9-1.9 2.2-2.3-3.8.3-6.7 2-6.7 4.1 0 2.3 3.6 4.2 8 4.2z" fill="#616161"/>
        <circle cx="5" cy="12" r="1.5" fill="#767676"/>
        <circle cx="12" cy="12" r="1.5" fill="#F37626"/>
        <circle cx="19" cy="12" r="1.5" fill="#767676"/>
      </svg>
    );
  }

  // 25. REST API
  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="6" cy="12" r="3" fill="#8B5CF6"/>
        <circle cx="18" cy="12" r="3" fill="#3B82F6"/>
        <path d="M9 12h6" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="2 2"/>
        <path d="M13 10l2 2-2 2" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // 26. DSA / ALGORITHMS / DATA STRUCTURES
  if (norm.includes('algorithm') || norm.includes('data structure') || norm.includes('dsa')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="5" r="2.5" fill="#4F8CFF"/>
        <circle cx="6" cy="18" r="2.5" fill="#10B981"/>
        <circle cx="18" cy="18" r="2.5" fill="#F59E0B"/>
        <path d="M10.5 7.5L7.5 15.5m6-8l3 8" stroke="#6B7280" strokeWidth="1.6"/>
      </svg>
    );
  }

  // 27. OOP
  if (norm.includes('oop') || norm.includes('object-oriented')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#4F8CFF"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#10B981"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#F59E0B"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#8B5CF6"/>
      </svg>
    );
  }

  // 28. COMPUTER NETWORKS / SYSTEM DESIGN
  if (norm.includes('network') || norm.includes('system design')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="8" y="3" width="8" height="5" rx="1" fill="#4F8CFF"/>
        <rect x="2" y="16" width="6" height="5" rx="1" fill="#10B981"/>
        <rect x="16" y="16" width="6" height="5" rx="1" fill="#8B5CF6"/>
        <path d="M12 8v4m-7 4v-2h14v2" stroke="#6B7280" strokeWidth="1.6"/>
      </svg>
    );
  }

  // 29. OPERATING SYSTEMS
  if (norm.includes('operating system') || norm.includes(' os')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#6366F1"/>
        <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  // 30. LLM / OPENAI / AI
  if (norm.includes('llm') || norm.includes('openai') || norm.includes('gpt') || norm.includes('ai')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V14a1 1 0 0 0-2 0v2.93A8 8 0 0 1 4.07 13H7a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V7a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H17a1 1 0 0 0 0 2h2.93A8 8 0 0 1 13 16.93z" fill="#10A37F"/>
      </svg>
    );
  }

  // 31. LANGCHAIN
  if (norm.includes('langchain')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3a9 9 0 0 0-9 9c0 3.8 2.4 7 5.8 8.3.4.1.7-.2.7-.6v-2.2c-2.4.5-2.9-1.2-2.9-1.2-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2 .9 2.5.7.1-.6.3-.9.6-1.1-1.9-.2-3.9-.9-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.2 8.2 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.3.6.8.6 1.6v2.4c0 .4.3.7.7.6A9 9 0 0 0 12 3z" fill="#2F7E47"/>
      </svg>
    );
  }

  // 32. PROMPT ENGINEERING
  if (norm.includes('prompt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l2.4 5.8L20 10l-4.4 4 1.2 6-4.8-3.2L7.2 20l1.2-6L4 10l5.6-2.2L12 2z" fill="#8B5CF6"/>
      </svg>
    );
  }

  // 33. STREAMLIT
  if (norm.includes('streamlit')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3L2 19h20L12 3z" fill="#FF4B4B"/>
        <path d="M12 9l-4 8h8l-4-8z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 34. TENSORFLOW / CNN / KERAS
  if (norm.includes('tensor') || norm.includes('cnn') || norm.includes('deep learning')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#FF6F00"/>
        <path d="M12 6v12M7.5 8.5l9 5M16.5 8.5l-9 5" stroke="#FFFFFF" strokeWidth="1.6"/>
      </svg>
    );
  }

  // 35. AUTHENTICATION / JWT / SECURITY
  // 36. CLAUDE (Anthropic)
  if (norm.includes('claude') || norm.includes('anthropic')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.8 3.5L12 8.4l-1.8-4.9H7.8l3.2 8.5-5.5 1.3 2.8 4.4 5.2-3.8 2.1 7.1h2.5l-2.1-7.1 5.2 3.8 2.8-4.4-5.5-1.3 3.2-8.5h-2.6z" fill="#D97757"/>
      </svg>
    );
  }

  // 37. CURSOR (AI Editor)
  if (norm.includes('cursor')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#18181B"/>
        <path d="M7 6l10 5.5-4.8 1.4-1.6 4.6L7 6z" fill="#FFFFFF"/>
        <path d="M7 6l5.2 6.9-1.6 4.6L7 6z" fill="#38BDF8"/>
      </svg>
    );
  }

  // 38. VERCEL
  if (norm.includes('vercel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3L22 20H2L12 3z" fill="#000000"/>
      </svg>
    );
  }

  // DEFAULT FALLBACK ICON
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" fill="#4F8CFF" opacity="0.2"/>
      <circle cx="12" cy="12" r="4" fill="#4F8CFF"/>
    </svg>
  );
}

export default TechIcon;
