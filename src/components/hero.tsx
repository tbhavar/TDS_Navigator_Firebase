import React from 'react';

export function Hero() {
  return (
    <header className="wavy-gradient text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center text-center py-20 md:py-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          TDS Rate Navigator
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          By CA Tanmay | AY 2026-27
        </p>
      </div>
    </header>
  );
}
