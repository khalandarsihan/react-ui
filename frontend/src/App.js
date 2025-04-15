import React from "react";
import "./index.css";

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8">
				<h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
					React + Tailwind in Frappe
				</h1>
				<p className="text-gray-700 mb-4">
					This is your React application with Tailwind CSS running inside your Frappe
					app.
				</p>
				<div className="flex justify-center space-x-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Primary Button
					</button>
					<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
						Secondary Button
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
