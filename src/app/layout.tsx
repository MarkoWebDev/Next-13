import "@/styles/globals.css";
import 'react-date-range/dist/styles.css'
import "react-date-range/dist/theme/default.css";

//replacing old head.js file for metadata
export const metadata = {
  title: {
    default: "HotelAgo",
    template: "%s | Hotel",
    keywords: ["Next JS, React JS, Tailwind CSS, JSON-server, Javacript"],
    description: 'Trying new next js 13 features',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
