require("dotenv").config()

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run(question) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([question]);
    
    return result.response.text();
}

exports.responseEnterpriseROI = async (data) => {
    const promptSaida = "Vamos supor que minha empresa tenha os seguintes dados:\n\n" +
        `Valor inicial do produto: R$ ${data.product}\n` +
        `Custos de produção por unidade: R$ ${data.custoProd}\n` +
        `Unidades vendidas nos últimos 3 anos: ${data.unidadesProd}\n` +
        `Outros custos (marketing, etc.): R$ ${data.custoAll}\n` +
        `Receita total: R$ ${data.receita}\n` +
        `Outros investimentos: R$ ${data.despestasUnique}\n` +
        `Lucro líquido: R$ ${data.lucroLiqui}\n` +
        "E desejo saber quando de ROI terá minha empresa daqui a 3 anos."

    const response = await run(promptSaida)

    return response
    
}


