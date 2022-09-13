/**
 * Buscar config da api e popular o arquivo srcConfig
 */

const config = {
    "client": "848feb58-e832-4e2c-a3a4-c8fdd3697245",
    "theme": {
        "palette": {
            "contrastThreshold": 3,
            "tonalOffset": 0.2
        },
        "_palette": {
            "primary": "#e8eaf6",
            "secondary": "#fce4ec",
            "error": "#ffebee",
            "contrastThreshold": 3,
            "tonalOffset": 0.2
        }
    }
}

const test = populateConfig()

function populateConfig() {
    const fs = require('fs');
    const stringifiedConfig = JSON.stringify(config)
    fs.writeFile("src/srcConfig.json", stringifiedConfig, ()=>{});
}