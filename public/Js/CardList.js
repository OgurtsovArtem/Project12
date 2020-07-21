export class CardList {
  constructor(container, classCreate,api) {
    this.container = container;
    this.classCreate = classCreate;
    this.api = api;
    /*REVIEW2. свойство this.api нигде в классе не используется, его не надо и задавать, так же как и параметр api. */
  }

  addCard(name, link, id) {
    const newCard  = this.classCreate(this.api).create(name,link,id)
    this.container.appendChild(newCard);
  }

  render(cardArr) {
    this.cardArr = cardArr;
    this.cardArr.forEach((Obj) => {
      this.addCard(Obj.name, Obj.link, Obj._id);
    });
  }

}
