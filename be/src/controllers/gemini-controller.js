const iaGemini = require('../ia/gemini')

exports.searchQuestion = async (req, res) => {
    const responsePrompt = await iaGemini.responseEnterpriseROI({
        product: 300,
        custoProd: 100,
        unidadesProd: 10000,
        custoAll: 50000,
        receita: 3000000,
        despestasUnique: 200000,
        lucroLiqui: 1000000
    })

    res.status(200).json({ responsePrompt })
}