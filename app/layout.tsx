import '@/app/globals.css';

export const metadata = {
  title: 'Rate Calendar App',
  description: 'A Rate Calendar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
