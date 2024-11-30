from dotenv import load_dotenv
import os
import google.generativeai as genai

def main():
    load_dotenv()
    api_key = os.getenv('GOOGLE_GEMINI_API_KEY')
    
    if not api_key:
        raise ValueError("Chave de API não encontrada. Verifique o arquivo .env ou as variáveis de ambiente.")

    genai.configure(api_key=api_key)

    print("Modelos disponíveis:")
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)

    model = genai.GenerativeModel("gemini-1.5-pro-latest")
    chat = model.start_chat(history=[])

    print("\nChat iniciado. Digite 'fim' para encerrar.\n")

    while True:
        prompt = input("Esperando prompt: ")
        if prompt.lower() == 'fim':
            print("Encerrando a conversa.")
            break
        response = chat.send_message(prompt)
        print(f"Resposta: {response.text}")

if __name__ == "__main__":
    main()