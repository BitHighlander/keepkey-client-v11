// plasmo.config.js
export default {
    manifest: {
        permissions: ["activeTab"],
        content_scripts: [
            {
                matches: ["<all_urls>"],
                js: ["sidepanel.tsx"]  // Use the exact file extension for TypeScript
            }
        ]
    }
}
