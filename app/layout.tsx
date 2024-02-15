import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AIPrompt from "./components/Prompt";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function getChatGPTResponse(prompt: string) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY_HERE',
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100,  // Adjust as needed
            model: 'text-davinci-002',  // Specify the model
        }),
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

  return (
    
    <html lang="en">
      <body className={inter.className}>
     <ul>
       <li>
         <Link href="/examples/basic">Basic</Link>
       </li>
       <li>
         <Link href="/examples/getCellValue">Get Cell Value</Link>
       </li>
       <li>
         <Link href="/examples/getSelection">Get Selection</Link>
       </li>
       <li>
         <Link href="/examples/setCellValue">Set Cell Value</Link>
       </li>
       <li>
         <Link href="/examples/setCellFormat">Format Cell</Link>
       </li>
       <li>
         <Link href="/examples/autoFill">AutoFill Cell</Link>
       </li>
       <li>
         <Link href="/examples/setSelection">Merge Selected Cells</Link>
       </li>
     </ul>
     <div><AIPrompt /></div>

        {children}
      </body>
    </html>
  );
}
