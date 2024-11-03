import { useState } from "react"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"] // Adjust this to specific URLs if needed
}

function Sidepanel() {
    const [data, setData] = useState("")

    return (
        <div
            style={{
                padding: 16
            }}>
            <h2>
                Welcome to your{" "}
                <a href="https://www.plasmo.com" target="_blank">
                    Plasmo
                </a>{" "}
                Extension!
            </h2>
            <input onChange={(e) => setData(e.target.value)} value={data} />
            <a href="https://docs.plasmo.com" target="_blank">
                View Docs
            </a>
        </div>
    )
}

export default Sidepanel
