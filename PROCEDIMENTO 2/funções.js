const dataJson = [
    {
      titulo: "Arroz de Couve-Flor",
      imagem: "fotos/arroz.jpg",
      preparo:
        "Deixe a couve flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar",
      ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
    },
    {
      titulo: "Bolo de Café",
      imagem: "fotos/bolo.jpg",
      preparo:
        "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura",
      ingredientes: [
        "Farinha de Trigo",
        "Açúcar",
        "Café Coado",
        "Chocolate em Pó",
        "Ovos",
      ],
    },
    {
      titulo: "Coxinha de Brigadeiro",
      imagem: "fotos/brigadeiro.jpg",
      preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
      ingredientes: [
        "Leite Condensado",
        "Chocolate em Pó",
        "Manteira",
        "Morango",
        "Chocolate Granulado",
      ],
    },
  ];
  
  getListaIngredientes = (ingredientes) => {
    let retorno = new String();
  
    for (item of ingredientes) {
      retorno += "<li>" + item + "</li>";
    }
  
    return retorno;
  };
  
  getCard = (dataCard) => {
    let card = document.getElementById("pnlCatalogo");
    card.innerHTML +=
      '<div class="card" style="width: 22rem; height: 39rem;">' +
      '<img class="card-img-top" src="'+ dataCard.imagem +'" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      dataCard.titulo +
      "</h5>" +
      "<ul>" +
      getListaIngredientes(dataCard.ingredientes) +
      "</ul>" +
      '<p class="card-text">' +
      dataCard.preparo +
      "</p>" +
      "</div>" +
      "</div>";
  };
  
  preencherCatalogo = () => {
    for (card of dataJson) {
      getCard(card);
    }
  };