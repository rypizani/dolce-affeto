/**
 * Dolce Affeto Confeitaria
 * Dados de categorias e produtos — edite aqui para adicionar/remover itens e imagens.
 * Para novas imagens: coloque as URLs (ou paths em /public) no campo image.
 */

export const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real com DDI (ex: 5511987654321)
export const WHATSAPP_MESSAGE = "Olá! Gostaria de fazer um pedido da Dolce Affeto Confeitaria.";

/** Número formatado para exibição (altere junto com WHATSAPP_NUMBER) */
export const PHONE_DISPLAY = "(11) 99999-9999";

export const categories = [
  {
    id: "bolos",
    name: "Bolos",
    slug: "bolos",
    description: "Bolos artesanais para festas e momentos especiais.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9825ba770?w=800&q=80",
    icon: "🎂",
  },
  {
    id: "tortas",
    name: "Tortas",
    slug: "tortas",
    description: "Tortas doces e salgadas, perfeitas para qualquer ocasião.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    icon: "🥧",
  },
  {
    id: "doces-finos",
    name: "Doces Finos",
    slug: "doces-finos",
    description: "Brigadeiros, trufas e doces gourmet.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80",
    icon: "🍫",
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    slug: "cupcakes",
    description: "Cupcakes decorados com muito carinho.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80",
    icon: "🧁",
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    slug: "sobremesas",
    description: "Mousses, pavês e sobremesas especiais.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80",
    icon: "🍮",
  },
  {
    id: "festas",
    name: "Kits para Festas",
    slug: "kits-festas",
    description: "Kits personalizados para sua festa.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    icon: "🎉",
  },
];

export const products = [
  // Bolos
  {
    id: "bolo-chocolate",
    categoryId: "bolos",
    name: "Bolo de Chocolate Belga",
    description: "Massa de chocolate belga com recheio de ganache e cobertura de chocolate.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "bolo-red-velvet",
    categoryId: "bolos",
    name: "Red Velvet",
    description: "Clássico red velvet com cream cheese e raspas de chocolate.",
    image: "https://images.unsplash.com/photo-1558304481-63ebc18a8af8?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "bolo-naked",
    categoryId: "bolos",
    name: "Bolo Naked",
    description: "Bolo naked com frutas frescas e flores comestíveis.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
    price: "Sob consulta",
  },
  // Tortas
  {
    id: "torta-limao",
    categoryId: "tortas",
    name: "Torta de Limão",
    description: "Massa crocante, creme de limão e merengue suíço.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "torta-maca",
    categoryId: "tortas",
    name: "Torta de Maçã",
    description: "Torta de maçã com canela e farofa crocante.",
    image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "torta-morango",
    categoryId: "tortas",
    name: "Torta de Morango",
    description: "Base de biscoito, creme e morangos frescos.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d695e0e1a?w=600&q=80",
    price: "Sob consulta",
  },
  // Doces finos
  {
    id: "brigadeiro-gourmet",
    categoryId: "doces-finos",
    name: "Brigadeiro Gourmet",
    description: "Brigadeiros artesanais em diversos sabores.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d695e0e1a?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "trufas",
    categoryId: "doces-finos",
    name: "Trufas de Chocolate",
    description: "Trufas recheadas com sabores especiais.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "bem-casado",
    categoryId: "doces-finos",
    name: "Bem-casado",
    description: "Bem-casados para festas de casamento.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    price: "Sob consulta",
  },
  // Cupcakes
  {
    id: "cupcake-chocolate",
    categoryId: "cupcakes",
    name: "Cupcake de Chocolate",
    description: "Massa fofinha com cobertura de buttercream.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "cupcake-baunilha",
    categoryId: "cupcakes",
    name: "Cupcake de Baunilha",
    description: "Cupcake clássico com glacê colorido.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "cupcake-tematico",
    categoryId: "cupcakes",
    name: "Cupcakes Temáticos",
    description: "Decoração personalizada para sua festa.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80",
    price: "Sob consulta",
  },
  // Sobremesas
  {
    id: "mousse-maracuja",
    categoryId: "sobremesas",
    name: "Mousse de Maracujá",
    description: "Mousse leve e refrescante de maracujá.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "pave",
    categoryId: "sobremesas",
    name: "Pavê de Chocolate",
    description: "Pavê tradicional com biscoito e creme.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "petit-gateau",
    categoryId: "sobremesas",
    name: "Petit Gâteau",
    description: "Bolo de chocolate com recheio cremoso.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80",
    price: "Sob consulta",
  },
  // Kits festas
  {
    id: "kit-infantil",
    categoryId: "festas",
    name: "Kit Festa Infantil",
    description: "Kit com doces, bolo e lembrancinhas.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "kit-casamento",
    categoryId: "festas",
    name: "Kit Casamento",
    description: "Bem-casados e doces finos personalizados.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    price: "Sob consulta",
  },
  {
    id: "kit-corporativo",
    categoryId: "festas",
    name: "Kit Corporativo",
    description: "Coffee break e doces para eventos.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    price: "Sob consulta",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategoryId(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getWhatsAppLink(message = WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${text}`;
}
