# Fotos reais para adicionar ao site

O site já está no ar com placeholders elegantes (na paleta da marca) em todos os espaços de foto.
Para o site ficar 100% com a identidade dela, é só exportar estas fotos reais do Instagram
@alinebraga e salvar nesta pasta **exatamente com estes nomes de arquivo**. Assim que o arquivo
existir, o placeholder desaparece sozinho e a foto real aparece — não precisa mexer em nada de código.

| Arquivo a criar | De onde tirar | Tamanho recomendado |
|---|---|---|
| `favicon.png` | Logo oficial dela (o mesmo do link w.app/nutrialinebraga) | 512×512px, fundo quadrado |
| `hero-portrait.jpg` | Foto de perfil atual do Instagram (retrato, boa luz) | mín. 1000×1250px (proporção 4:5) |
| `about-portrait.jpg` | Outra foto dela (bastidor, consultório, ou foto de rosto diferente da hero) | mín. 1000×1250px (proporção 4:5) |
| `proof-1.jpg` | Print/foto do destaque "Resultados" (transformação 3 a 10kg) — **com autorização da cliente** | mín. 800×1000px |
| `proof-2.jpg` | Print/foto do destaque "Resultados" (transformação +10kg) — **com autorização da cliente** | mín. 800×1000px |
| `proof-3.jpg` | Print/foto do destaque "Minha História" | mín. 800×1000px |
| `recipe-mousse.jpg` | Foto do post "Mousse de maracujá proteico" | mín. 800×800px (quadrada) |
| `recipe-cafe.jpg` | Foto do post "É por isso que você não emagrece" (café/preparo) | mín. 800×800px (quadrada) |
| `recipe-treino.jpg` | Foto do post "Pré-treino x Pós-treino" | mín. 800×800px (quadrada) |
| `recipe-frango.jpg` | Foto do post "Frango na air fryer" | mín. 800×800px (quadrada) |

## Dicas rápidas
- Formatos aceitos: `.jpg` ou `.png` (se usar `.png`, troque a extensão no `index.html` também).
- Não precisa redimensionar com precisão — o CSS corta (`object-fit: cover`) e centraliza automaticamente.
- Para os prints de resultados/transformação, use sempre fotos que a própria Aline já publicou
  com consentimento das clientes (nunca fotos sem autorização).
- Depois de adicionar as fotos, é só subir a pasta `assets/images` de novo pro GitHub — a Vercel
  atualiza o site sozinha em menos de um minuto.
