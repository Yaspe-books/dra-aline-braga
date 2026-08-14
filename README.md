# Site — Aline Braga Nutricionista

Site institucional de uma página, construído em HTML/CSS/JS puro (sem build, sem dependências).
Pronto para publicar no GitHub + Vercel gratuitamente.

## Estrutura

```
aline-braga-site/
├── index.html              → todo o conteúdo e estrutura do site
├── styles.css               → todo o design (cores, tipografia, layout, responsividade)
├── script.js                 → menu mobile, links de WhatsApp, animações, FAQ
└── assets/images/
    └── LEIA-ME.md            → checklist de quais fotos reais adicionar e com qual nome
```

O número de WhatsApp real (**+55 12 98840-6870**) está centralizado em `script.js`, no topo do
arquivo, na constante `WHATSAPP_NUMBER`. Todos os botões do site geram o link automaticamente a
partir dali — não é preciso editar link por link.

## Antes de publicar

1. (Opcional, mas recomendado) Siga `assets/images/LEIA-ME.md` para trocar os placeholders pelas
   fotos reais da Aline.
2. Se os planos ganharem preço público no futuro, edite os blocos `<div class="plan-price">` em
   `index.html` (hoje estão como "Sob consulta" de propósito, por decisão do cliente).

## Passo a passo: publicar no GitHub + Vercel (grátis)

### 1. Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new) e crie um repositório novo (ex: `aline-braga-site`).
   Pode deixar como **Público** ou **Privado** — tanto faz para a Vercel.
2. Não marque nenhuma opção de criar README/gitignore automaticamente (já temos os nossos).

### 2. Subir os arquivos

Abra um terminal **dentro da pasta `aline-braga-site`** e rode, na ordem:

```
git init
git add .
git commit -m "Site inicial da Aline Braga"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/aline-braga-site.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário do GitHub. Se pedir login, use suas credenciais do GitHub
normalmente (ou um token, se tiver 2FA ativado).

### 3. Publicar na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e faça login com sua conta do GitHub.
2. Clique em **Import** no repositório `aline-braga-site`.
3. A Vercel detecta automaticamente que é um site estático — não precisa configurar nada
   (deixe "Framework Preset" como **Other**, Build Command e Output Directory em branco).
4. Clique em **Deploy**. Em menos de 1 minuto o site estará no ar, com uma URL do tipo
   `aline-braga-site.vercel.app`.

### 4. Domínio próprio (opcional)

Se a Aline tiver ou comprar um domínio (ex: `alinebraga.com.br`), em **Project → Settings → Domains**
na Vercel dá para adicionar o domínio e seguir as instruções de DNS mostradas na tela.

### 5. Atualizações futuras

Sempre que quiser mudar algo (texto, foto, cor), edite o arquivo localmente e rode:

```
git add .
git commit -m "Atualização do site"
git push
```

A Vercel republica o site automaticamente a cada `push`, sem precisar repetir a configuração.

## Conteúdo do site — o que é real e o que é copy de apoio

Para transparência com a cliente:

- **Real, extraído do Instagram @alinebraga**: bio, frase de abertura ("Fique em forma eliminando
  até 12kg em 3 meses..."), estrutura "Dieta + Treino + Suporte", filosofia "sem restrição e sem
  terrorismo nutricional", número de seguidores (349 mil) e publicações (3.483), número de WhatsApp,
  temas reais de conteúdo (mousse de maracujá, pré/pós-treino, chás, café da manhã, frango na air fryer).
- **Estrutura pedida pelo cliente (Pedro), não extraída do Instagram**: os 3 planos (Sessão Pontual,
  90 dias, 180 dias) — preços ficaram como "Sob consulta" por não haver valor público.
- **Copy de apoio (UX/interface)**: textos de botão, FAQ, microcopy — escritos para o site, mas
  sempre alinhados ao tom real dela (comida de verdade, sem terrorismo nutricional, 100% online).
- **Não incluído por falta de dado real**: endereço físico (o perfil sugere atendimento 100% online,
  não consultório físico), depoimentos com nome/citação direta (não havia texto de depoimento
  acessível publicamente — a prova social usa números reais + link direto para os destaques
  "Resultados" no Instagram, para não inventar falas de clientes).
