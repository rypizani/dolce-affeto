# Dolce Affeto Confeitaria

Site institucional da **Dolce Affeto Confeitaria** — doces artesanais. O site não vende diretamente; os pedidos são feitos pelo **WhatsApp**.

## Funcionalidades

- **Modo claro e escuro** — alternância no topo da página
- **Categorias e produtos** — tudo editável no código (sem banco)
- **Imagens** — cada categoria e produto tem imagem (URLs ou arquivos em `public`)
- **100% responsivo** — mobile-first, telefone em destaque no rodapé e na página de contato
- **WhatsApp** — botão flutuante e links em cada produto para pedir direto no WhatsApp

## Como rodar

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Como editar conteúdo

### Número de WhatsApp e telefone

Abra **`src/data/products.js`** e altere:

- `WHATSAPP_NUMBER` — número com DDI, só dígitos (ex: `5511987654321`)
- `PHONE_DISPLAY` — número formatado para exibição (ex: `(11) 98765-4321`)

### Categorias e produtos

No mesmo arquivo **`src/data/products.js`**:

- **`categories`** — array de categorias. Cada item tem: `id`, `name`, `slug`, `description`, `image` (URL), `icon` (emoji).
- **`products`** — array de produtos. Cada item tem: `id`, `categoryId` (igual ao `id` da categoria), `name`, `description`, `image` (URL), `price` (texto, ex: "Sob consulta").

Para **nova categoria**: adicione um objeto em `categories` e use o mesmo `id` em `categoryId` dos produtos.

Para **nova imagem**: use uma URL (ex: Unsplash, seu servidor) ou coloque a imagem em `public/` e use no objeto: `image: "/nome-da-imagem.jpg"`.

## Build para produção

```bash
npm run build
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (Vercel, Netlify, etc.).

## Tecnologias

- React 19 + Vite
- Chakra UI v3
- React Router v7
