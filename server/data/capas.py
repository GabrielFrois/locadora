import json
import requests

# Substitua aqui com sua chave de API OMDb
OMDB_API_KEY = "SUA_CHAVE_AQUI"

# Carrega os dados
with open("filmes_1970_2000.json", "r", encoding="utf-8") as f:
    filmes = json.load(f)

# Preenche a capa_url consultando a OMDb
for filme in filmes:
    if not filme["capa_url"]:
        params = {
            "t": filme["titulo_original"],
            "y": filme["ano"],
            "apikey": OMDB_API_KEY
        }
        resp = requests.get("http://www.omdbapi.com/", params=params)
        data = resp.json()
        poster = data.get("Poster")
        if poster and poster != "N/A":
            filme["capa_url"] = poster
            print(f"[✓] {filme['titulo_original']}: capa adicionada.")
        else:
            print(f"[x] {filme['titulo_original']}: capa não encontrada.")

# Salva com capas preenchidas
with open("filmes_com_capas.json", "w", encoding="utf-8") as f:
    json.dump(filmes, f, ensure_ascii=False, indent=2)
