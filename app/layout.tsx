import '@/styles/dist.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Relief Clover</title>
      </head>
      <body className="overflow-y-scroll bg-green-400">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">


          {children}

        </div>
      </body>
    </html>
  );
}
