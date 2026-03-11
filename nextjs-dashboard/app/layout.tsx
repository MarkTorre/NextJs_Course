import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { {console.log(children)}
  return (
    <html lang="en">
     
      <body>{children}</body>
    </html>
  );
}
