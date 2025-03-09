import "../styles/globals.css";
			export const metadata = {
				title: "login",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}