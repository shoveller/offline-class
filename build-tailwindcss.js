const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')

const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
        type: 'all',
        source: ['theme/global.json', 'theme/dark.json', 'theme/dark.json']
    })
)

StyleDictionary.buildAllPlatforms()
