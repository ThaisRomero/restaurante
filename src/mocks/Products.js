import pratoTartar from "../assets/Images/cardapio/tartar.jpeg";
import pratoRisoto from "../assets/Images/cardapio/risoto.jpg";
import pratoLombo from "../assets/Images/cardapio/lombo.jpg";
import pratoCeviche from "../assets/Images/cardapio/ceviche.jpg";
import pratoCarpaccio from "../assets/Images/cardapio/carpaccio.jpg";
import pratoTournedos from "../assets/Images/cardapio/tournedos.jpg";
import pratoMagret from "../assets/Images/cardapio/magret.jpg";
import pratoSalmão from "../assets/Images/cardapio/salmão.jpg";
import pratoBacalhau from "../assets/Images/cardapio/bacalhau.jpg";
import pratoTarte from "../assets/Images/cardapio/tarte-cebola.jpg";
import pratoRavioli from "../assets/Images/cardapio/ravioli.jpg";
import pratoRisotoLimao from "../assets/Images/cardapio/risoto-de-Limao.jpg";

import sobremesaCreme from "../assets/Images/cardapio/creme.jpg";
import sobremesaMousse from "../assets/Images/cardapio/mousse.jpg";
import sobremesaPanna from "../assets/Images/cardapio/panna.jpg";
import sobremesaTarte from "../assets/Images/cardapio/tarte-pera.jpg";

const itens = [
  {
    name: "Lombo de Cordeiro com Purê de Batata Doce e Redução de Vinho Tinto",
    description:
      "Fatias de lombo de cordeiro grelhadas ao ponto, servidas com um purê aveludado de batata doce. O prato é complementado com uma redução de vinho tinto, que traz uma profundidade de sabor irresistível.",
    img: pratoLombo,
    alt: "lombo",
    category: "carnes",
    price: 79.9,
    id: 1,
  },

  {
    name: "Carpaccio de Wagyu com Pesto de Manjericão e Lascas de Queijo Parmesão",
    description:
      "Finas fatias de carne de Wagyu, uma das mais nobres e suculentas, servidas cruas com pesto de manjericão, azeite de oliva extra virgem e lascas de queijo parmesão envelhecido, criando uma entrada fresca e saborosa.",
    img: pratoCarpaccio,
    alt: "carpaccio",
    category: "carnes",
    price: 89.9,
    id: 2,
  },

  {
    name: "Tournedos Rossini com Foie Gras e Molho de Madeira ",
    description:
      "Medalhões de filé mignon, acompanhados de foie gras grelhado e cobertos com um molho enriquecido de vinho tinto e caldo de carne, criando um prato sofisticado e indulgente.",
    img: pratoTournedos,
    alt: "tournedos",
    category: "carnes",
    price: 119.9,
    id: 3,
  },

  {
    name: "Magret de Pato com Molho de Laranja e Gengibre",
    description:
      "Peito de pato grelhado, servido com um molho agridoce de laranja e gengibre, acompanhado de purê de batata trufado e vegetais assados, proporcionando um equilíbrio entre doçura, acidez e riqueza.",
    img: pratoMagret,
    alt: "magret",
    category: "carnes",
    price: 86.9,
    id: 4,
  },

  {
    name: "Tartar de Atum com Abacate e Molho de Soja",
    description:
      "Uma apresentação elegante de atum fresco cortado em cubos, combinado com fatias de abacate cremoso. A receita é finalizada com um delicado molho de soja, um toque de pimenta e um fio de azeite trufado.",
    img: pratoTartar,
    alt: "tartar",
    category: "doMar",
    price: 86.9,
    id: 5,
  },

  {
    name: "Ceviche de Peixe Branco com Manga e Pimenta Rosa",
    description:
      "Peixe branco fresco marinado em suco de limão e laranja, misturado com fatias finas de manga, coentro e pimenta rosa. Uma combinação refrescante e picante, servida em uma apresentação minimalista e sofisticada.",
    img: pratoCeviche,
    alt: "ceviche",
    category: "doMar",
     price: 86.9,
    id: 6,
  },

  {
    name: "Salmão Selvagem com Crosta de Ervas e Molho de Limão Siciliano",
    description:
      "Um filé de salmão selvagem grelhado, coberto com uma crosta crocante de ervas finas, acompanhado de um molho de limão siciliano, que acrescenta frescor e leveza ao prato.",
    img: pratoSalmão,
    alt: "salmão",
    category: "doMar",
     price: 86.9,
    id: 7,
  },

  {
    name: "Bacalhau com Crosta de Azeitonas Pretas e Purê de Couve-Flor",
    description:
      "Posta de bacalhau assada, coberta por uma crosta crocante de azeitonas pretas e servida com um purê suave de couve-flor, resultando em uma combinação perfeita de sabores salgados e cremosos.",
    img: pratoBacalhau,
    alt: "bacalhau",
    category: "doMar",
     price: 86.9,
    id: 8,
  },

  {
    name: "Tarte Tatin de Cebolas Caramelizadas e Queijo de Cabra",
    description:
      "Uma variação da clássica tarte tatin, com cebolas caramelizadas e queijo de cabra cremoso, servida em uma crosta folhada crocante, criando uma combinação de sabores doces e salgados que encanta o paladar.",
    img: pratoTarte,
    alt: "tarte",
    category: "vegetariano",
     price: 86.9,
    id: 9,
  },

  {
    name: "Ravioli de Abóbora com Manteiga de Sálvia",
    description:
      "Massa fresca de ravioli recheada com purê de abóbora, acompanhada por um delicado molho de manteiga de sálvia e amêndoas torradas, formando um prato leve e saboroso, com notas adocicadas e aromáticas",
    img: pratoRavioli,
    alt: "ravioli",
    category: "vegetariano",
     price: 86.9,
    id: 10,
  },

  {
    name: "Risoto de Aspargos Verdes e Limão Siciliano com Amêndoas Tostadas",
    description:
      "Este risoto combina a cremosidade do arroz arbóreo com a leveza dos aspargos verdes e o frescor do limão siciliano. As amêndoas tostadas adicionam crocância e suavidade ao prato. Finalizado com parmesão ou queijo vegano, oferece uma refeição sofisticada e equilibrada.",
    img: pratoRisotoLimao,
    alt: "risoto-doce",
    category: "vegetariano",
     price: 86.9,
    id: 11,
  },

  {
    name: "Risoto de Cogumelos Selvagens com Parmesão e Trufas",
    description:
      "Um risoto cremoso, com arroz arbóreo perfeitamente cozido, envolto em um caldo de cogumelos silvestres e finalizado com lascas finas de trufa negra. O toque de parmesão ralado na hora dá a este prato uma textura única.",
    img: pratoRisoto,
    alt: "risoto",
    category: "vegetariano",
     price: 86.9,
    id: 12,
  },

  {
    name: "Creme Brûlée de Baunilha Bourbon com Frutas Vermelhas",
    description:
      "Uma clássica sobremesa francesa, com creme de baunilha feito com fava de baunilha bourbon, coberto com uma crosta de açúcar queimado e servido com frutas vermelhas frescas, trazendo um contraste entre o crocante e o cremoso.",
    img: sobremesaCreme,
    alt: "creme",
    category: "sobremesas",
     price: 86.9,
    id: 13,
  },

  {
    name: "Tarte Tatin de Pera com Caramelo de Baunilha e Amêndoas Torradas",
    description:
      "Uma versão sofisticada da tarte tatin, com peras caramelizadas que ganham sabor doce e profundo. A massa folhada crocante e o caramelo de baunilha adicionam riqueza, enquanto as amêndoas torradas proporcionam crocância. Servida quente, é finalizada com creme fresco ou sorvete de baunilha, criando uma sobremesa irresistível.",
    img: sobremesaTarte,
    alt: "tarte",
    category: "sobremesas",
     price: 86.9,
    id: 14,
  },

  {
    name: "Mousse de Chocolate Amargo com Framboesas e Crocante de Avelã",
    description:
      "Uma mousse cremosa e leve feita com chocolate amargo de alta qualidade, que derrete na boca e combina perfeitamente com o toque ácido das framboesas frescas. O crocante de avelã adiciona uma textura surpreendente, contrastando com a suavidade da mousse. A mistura de sabores intensos e frescos torna essa sobremesa elegante e refinada, ideal para finalizar um jantar gourmet.",
    img: sobremesaMousse,
    alt: "mousse",
    category: "sobremesas",
     price: 86.9,
    id: 15,
  },

  {
    name: "Panna Cotta de Coco com Coulis de Manga e Hortelã",
    description:
      "Uma panna cotta leve e cremosa, feita com leite de coco, que oferece um sabor suave e exótico. A camada de coulis de manga fresca traz um equilíbrio doce e ácido, enquanto a hortelã fresca adiciona um toque refrescante ao prato. Essa sobremesa delicada e de apresentação impecável é perfeita para quem busca uma opção fresca e sofisticada, com uma combinação de sabores tropicais.",
    img: sobremesaPanna,
    alt: "panna",
    category: "sobremesas",
     price: 86.9,
    id: 16,
  },
];
export default itens;
